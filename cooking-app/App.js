import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, ImageBackground, FlatList, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';
import loadRecipes from './loadRecipes';
import Login from './login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace('Home');
  };

  return <Login onLogin={handleLogin} />;
};

const HomeScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const parsedRecipes = await loadRecipes();
        setRecipes(parsedRecipes);
      } catch (error) {
        Alert.alert('Error', 'Failed to load recipes.');
      }
    };

    fetchRecipes();
  }, []);

  const findRecipes = () => {
    const availableIngredients = ingredients.toLowerCase().split(',').map(i => i.trim());
    const selectedCuisine = cuisine.toLowerCase().trim();

    const results = recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.split(',').map(i => i.trim().toLowerCase());
      const hasAllIngredients = availableIngredients.every(i => recipeIngredients.includes(i));

      if (selectedCuisine) {
        return hasAllIngredients || recipe.cuisine.toLowerCase() === selectedCuisine;
      }

      return hasAllIngredients;
    });

    if (results.length === 0) {
      setSearchErrorMessage('No matching recipes found. Please check the ingredients and cuisine.');
      setMatchingRecipes([]);
    } else {
      setSearchErrorMessage('');
      setMatchingRecipes(results);
    }
  };

  const showRecipe = (recipe) => {
    navigation.navigate('Recipe', { recipe });
  };

  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <Animatable.View animation="fadeIn" duration={1500} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recipe Finder</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Enter Ingredients (comma separated):</Text>
          <Animatable.View animation="bounceInLeft" duration={1500}>
            <TextInput
              style={styles.input}
              value={ingredients}
              onChangeText={(text) => {
                setIngredients(text);
                setSearchErrorMessage('');
              }}
              placeholder="e.g. chicken, rice, tomato"
              placeholderTextColor="#ccc"
            />
          </Animatable.View>
          <Text style={styles.label}>Enter Cuisine (optional):</Text>
          <Animatable.View animation="bounceInRight" duration={1500}>
            <TextInput
              style={styles.input}
              value={cuisine}
              onChangeText={(text) => {
                setCuisine(text);
                setSearchErrorMessage('');
              }}
              placeholder="e.g. Italian"
              placeholderTextColor="#ccc"
            />
          </Animatable.View>
          <Animatable.View animation="bounceIn" duration={1500}>
            <TouchableOpacity style={styles.button} onPress={findRecipes}>
              <Text style={styles.buttonText}>Find Recipes</Text>
            </TouchableOpacity>
          </Animatable.View>
          {searchErrorMessage ? <Text style={styles.error}>{searchErrorMessage}</Text> : null}
          <Text style={styles.label}>Available Recipes:</Text>
          <ScrollView contentContainerStyle={styles.recipeList}>
            {matchingRecipes.length > 0 && matchingRecipes.map((recipe, index) => (
              <Animatable.View key={index} animation="fadeInUp" duration={1000}>
                <TouchableOpacity onPress={() => showRecipe(recipe)} style={styles.recipeButton}>
                  <Text style={styles.recipeText}>{recipe.name}</Text>
                </TouchableOpacity>
              </Animatable.View>
            ))}
          </ScrollView>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
};

const RecipeScreen = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
      <Animatable.View animation="fadeIn" duration={1500} style={styles.container}>
        <Text style={styles.title}>Recipe Finder</Text>
        <View style={styles.details}>
          <Text style={styles.detailsText}>Recipe: {recipe.name}</Text>
          <Text style={styles.detailsText}>Cuisine: {recipe.cuisine}</Text>
          <Text style={styles.detailsText}>Ingredients:</Text>
          <FlatList
            data={recipe.ingredients.split(',').map(i => i.trim())}
            renderItem={({ item }) => <Text style={styles.ingredientItem}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          {Platform.OS !== 'web' ? (
            <WebView
              style={styles.webview}
              source={{ uri: recipe.youtube_link }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          ) : (
            <Text style={styles.error}>Video not supported on web</Text>
          )}
          <Animatable.View animation="bounceIn" duration={1500}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText}>Back to Search</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#344955',
  },
  logoutButton: {
    backgroundColor: '#f9aa33',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#344955',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
    color: '#000',
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  error: {
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
  },
  recipeList: {
    alignItems: 'center',
    marginTop: 10,
  },
  recipeButton: {
    backgroundColor: '#f9aa33',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
 details: {
    marginVertical: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 18,
    marginVertical: 5,
    color: '#344955',
  },
  ingredientItem: {
    fontSize: 16,
    marginVertical: 2,
    color: '#344955',
  },
  webview: {
    marginTop: 20,
    height: 200,
    width: '100%',
  },
  button: {
    backgroundColor: '#f9aa33',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;