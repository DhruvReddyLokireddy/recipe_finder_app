const recipes = [
  // Italian Recipes
  {
    name: "Pasta Carbonara",
    cuisine: "Italian",
    ingredients: "pasta, egg, cheese, bacon",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  },
  {
    name: "Margherita Pizza",
    cuisine: "Italian",
    ingredients: "pizza dough, tomato sauce, mozzarella cheese, basil",
    youtube_link: "https://www.youtube.com/watch?v=1d8Oi3u0Bcw"
  },
  {
    name: "Lasagna",
    cuisine: "Italian",
    ingredients: "lasagna noodles, ground beef, ricotta cheese, mozzarella cheese, tomato sauce",
    youtube_link: "https://www.youtube.com/watch?v=kfxrTDH7xK4"
  },
  {
    name: "Spaghetti Bolognese",
    cuisine: "Italian",
    ingredients: "spaghetti, ground beef, tomato sauce, onion, garlic",
    youtube_link: "https://www.youtube.com/watch?v=qJRa3ODLT-g"
  },
  {
    name: "Risotto",
    cuisine: "Italian",
    ingredients: "arborio rice, chicken broth, parmesan cheese, white wine, onion",
    youtube_link: "https://www.youtube.com/watch?v=_jIsad8_Jgg"
  },
  {
    name: "Tiramisu",
    cuisine: "Italian",
    ingredients: "mascarpone cheese, coffee, ladyfingers, cocoa powder, sugar",
    youtube_link: "https://www.youtube.com/watch?v=6ToxR-KL0hI"
  },
  {
    name: "Fettuccine Alfredo",
    cuisine: "Italian",
    ingredients: "fettuccine, butter, heavy cream, parmesan cheese",
    youtube_link: "https://www.youtube.com/watch?v=fiZmv_LM6tM"
  },
  {
    name: "Minestrone Soup",
    cuisine: "Italian",
    ingredients: "vegetable broth, pasta, beans, tomatoes, carrots, celery",
    youtube_link: "https://www.youtube.com/watch?v=adXRd4sTDpA"
  },
  {
    name: "Caprese Salad",
    cuisine: "Italian",
    ingredients: "tomatoes, mozzarella cheese, basil, olive oil, balsamic vinegar",
    youtube_link: "https://www.youtube.com/watch?v=Uw8P_3SRTQU"
  },
  {
    name: "Bruschetta",
    cuisine: "Italian",
    ingredients: "baguette, tomatoes, garlic, basil, olive oil",
    youtube_link: "https://www.youtube.com/watch?v=tc2_3gJkU9Q"
  },

  // Indian Recipes
  {
    name: "Chicken Curry",
    cuisine: "Indian",
    ingredients: "chicken, curry powder, coconut milk",
    youtube_link: "https://www.youtube.com/watch?v=J5vH3LvB4xA"
  },
  {
    name: "Butter Chicken",
    cuisine: "Indian",
    ingredients: "chicken, butter, cream, tomato sauce, garam masala",
    youtube_link: "https://www.youtube.com/watch?v=dZQKcTQai5c"
  },
  {
    name: "Paneer Tikka",
    cuisine: "Indian",
    ingredients: "paneer, yogurt, spices, bell peppers, onions",
    youtube_link: "https://www.youtube.com/watch?v=vfA3BR4ftQw"
  },
  {
    name: "Chole",
    cuisine: "Indian",
    ingredients: "chickpeas, tomatoes, onions, spices",
    youtube_link: "https://www.youtube.com/watch?v=jeGhB69VDn0"
  },
  {
    name: "Biryani",
    cuisine: "Indian",
    ingredients: "rice, chicken, saffron, spices",
    youtube_link: "https://www.youtube.com/watch?v=K7HwvFug6Hg"
  },
  {
    name: "Samosa",
    cuisine: "Indian",
    ingredients: "potatoes, peas, spices, dough",
    youtube_link: "https://www.youtube.com/watch?v=JZATz3FOJkw"
  },
  {
    name: "Dal Tadka",
    cuisine: "Indian",
    ingredients: "lentils, tomatoes, onions, spices",
    youtube_link: "https://www.youtube.com/watch?v=GtXL7ikYPWQ"
  },
  {
    name: "Aloo Gobi",
    cuisine: "Indian",
    ingredients: "potatoes, cauliflower, spices",
    youtube_link: "https://www.youtube.com/watch?v=kXGbYIjRbc8"
  },
  {
    name: "Palak Paneer",
    cuisine: "Indian",
    ingredients: "spinach, paneer, cream, spices",
    youtube_link: "https://www.youtube.com/watch?v=Ike9d5yVGyM"
  },
  {
    name: "Gulab Jamun",
    cuisine: "Indian",
    ingredients: "milk solids, sugar, rose water",
    youtube_link: "https://www.youtube.com/watch?v=e8Q5a9X1Ixs"
  },
  {
    name: "Rogan Josh",
    cuisine: "Indian",
    ingredients: "lamb, yogurt, garlic, ginger, spices",
    youtube_link: "https://www.youtube.com/watch?v=BPUdtXI1XK8"
  },
  {
    name: "Tandoori Chicken",
    cuisine: "Indian",
    ingredients: "chicken, yogurt, spices",
    youtube_link: "https://www.youtube.com/watch?v=cwJhz6hNSLk"
  },
  {
    name: "Malai Kofta",
    cuisine: "Indian",
    ingredients: "potatoes, paneer, cream, spices",
    youtube_link: "https://www.youtube.com/watch?v=UFWv4blcQ3Y"
  },
  {
    name: "Fish Curry",
    cuisine: "Indian",
    ingredients: "fish, coconut milk, spices, tomatoes",
    youtube_link: "https://www.youtube.com/watch?v=TpFKyN5PQZc"
  },
  {
    name: "Kofta",
    cuisine: "Indian",
    ingredients: "ground meat, onions, garlic, spices",
    youtube_link: "https://www.youtube.com/watch?v=SZQIoJqAOjY"
  },
  {
    name: "Masala Dosa",
    cuisine: "Indian",
    ingredients: "rice batter, potatoes, spices",
    youtube_link: "https://www.youtube.com/watch?v=RZqd6J4C3b8"
  },
  {
    name: "Raita",
    cuisine: "Indian",
    ingredients: "yogurt, cucumber, mint, spices",
    youtube_link: "https://www.youtube.com/watch?v=3QG3KDkGA-M"
  },
  {
    name: "Bhindi Masala",
    cuisine: "Indian",
    ingredients: "okra, tomatoes, onions, spices",
    youtube_link: "https://www.youtube.com/watch?v=4ScG4FMkA2k"
  },
  {
    name: "Pav Bhaji",
    cuisine: "Indian",
    ingredients: "mixed vegetables, pav bread, spices",
    youtube_link: "https://www.youtube.com/watch?v=RZmtTp6m5LU"
  },
  {
    name: "Lamb Vindaloo",
    cuisine: "Indian",
    ingredients: "lamb, vinegar, spices, potatoes",
    youtube_link: "https://www.youtube.com/watch?v=mbFDCEFsEYs"
  },

  // American Recipes
  {
    name: "Beef Stew",
    cuisine: "American",
    ingredients: "beef, potato, carrot, onion",
    youtube_link: "https://www.youtube.com/watch?v=b9hkg2omWZo"
  },
  {
    name: "BBQ Ribs",
    cuisine: "American",
    ingredients: "pork ribs, BBQ sauce, spices",
    youtube_link: "https://www.youtube.com/watch?v=2Xl6sCquYu8"
  },
  {
    name: "Fried Chicken",
    cuisine: "American",
    ingredients: "chicken, flour, spices, buttermilk",
    youtube_link: "https://www.youtube.com/watch?v=XdnK3RP-fYo"
  },
  {
    name: "Apple Pie",
    cuisine: "American",
    ingredients: "apples, pie crust, sugar, cinnamon",
    youtube_link: "https://www.youtube.com/watch?v=ecbGafyyGKo"
  },
  {
    name: "Mac and Cheese",
    cuisine: "American",
    ingredients: "macaroni, cheese, milk, butter",
    youtube_link: "https://www.youtube.com/watch?v=H7wGHV2Z7vg"
  },
  {
    name: "Clam Chowder",
    cuisine: "American",
    ingredients: "clams, potatoes, cream, bacon",
    youtube_link: "https://www.youtube.com/watch?v=6xBGHL2sl8o"
  },
    {
    name: "Cornbread",
    cuisine: "American",
    ingredients: "cornmeal, flour, sugar, milk",
    youtube_link: "https://www.youtube.com/watch?v=VztiKSkOZ-U"
  },
  {
    name: "Buffalo Wings",
    cuisine: "American",
    ingredients: "chicken wings, hot sauce, butter",
    youtube_link: "https://www.youtube.com/watch?v=e80CQnIPKYc"
  },
  {
    name: "Cheeseburger",
    cuisine: "American",
    ingredients: "ground beef, cheese, bun, lettuce, tomato",
    youtube_link: "https://www.youtube.com/watch?v=WxOP4-9Wo3M"
  },
  {
    name: "Pancakes",
    cuisine: "American",
    ingredients: "flour, milk, eggs, butter, syrup",
    youtube_link: "https://www.youtube.com/watch?v=vJ33MZqYx5w"
  },

  // Mexican Recipes
  {
    name: "Tacos",
    cuisine: "Mexican",
    ingredients: "tortilla, beef, lettuce, cheese",
    youtube_link: "https://www.youtube.com/watch?v=OtNpPhHxx2w"
  },
  {
    name: "Guacamole",
    cuisine: "Mexican",
    ingredients: "avocado, lime, cilantro, onion, tomato",
    youtube_link: "https://www.youtube.com/watch?v=HM0SkiYKLLs"
  },
  {
    name: "Enchiladas",
    cuisine: "Mexican",
    ingredients: "tortilla, chicken, cheese, enchilada sauce",
    youtube_link: "https://www.youtube.com/watch?v=KbKijMkcffo"
  },
  {
    name: "Quesadillas",
    cuisine: "Mexican",
    ingredients: "tortilla, cheese, chicken, bell peppers",
    youtube_link: "https://www.youtube.com/watch?v=qHpX0eEnu88"
  },
  {
    name: "Churros",
    cuisine: "Mexican",
    ingredients: "flour, sugar, cinnamon, butter",
    youtube_link: "https://www.youtube.com/watch?v=xBCG8nAsWr0"
  },
  {
    name: "Tamales",
    cuisine: "Mexican",
    ingredients: "corn husks, masa, pork, red sauce",
    youtube_link: "https://www.youtube.com/watch?v=4O9cUtQqbb8"
  },
  {
    name: "Fajitas",
    cuisine: "Mexican",
    ingredients: "chicken, bell peppers, onions, tortilla",
    youtube_link: "https://www.youtube.com/watch?v=TfJS-3FtrYs"
  },
  {
    name: "Pozole",
    cuisine: "Mexican",
    ingredients: "hominy, pork, cabbage, radishes",
    youtube_link: "https://www.youtube.com/watch?v=-8fV7A1iDjo"
  },
  {
    name: "Salsa",
    cuisine: "Mexican",
    ingredients: "tomatoes, onions, cilantro, jalapenos, lime",
    youtube_link: "https://www.youtube.com/watch?v=3AefknGHcJU"
  },
  {
    name: "Huevos Rancheros",
    cuisine: "Mexican",
    ingredients: "eggs, tortilla, salsa, beans, cheese",
    youtube_link: "https://www.youtube.com/watch?v=qzWXiE-x6rA"
  },

  // Japanese Recipes
  {
    name: "Sushi",
    cuisine: "Japanese",
    ingredients: "rice, fish, seaweed",
    youtube_link: "https://www.youtube.com/watch?v=I8DIxPZTB-c"
  },
  {
    name: "Ramen",
    cuisine: "Japanese",
    ingredients: "noodles, broth, pork, egg, green onions",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  },
  {
    name: "Tempura",
    cuisine: "Japanese",
    ingredients: "shrimp, vegetables, tempura batter",
    youtube_link: "https://www.youtube.com/watch?v=I8DIxPZTB-c"
  },
  {
    name: "Miso Soup",
    cuisine: "Japanese",
    ingredients: "miso paste, tofu, seaweed, green onions",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  },
  {
    name: "Teriyaki Chicken",
    cuisine: "Japanese",
    ingredients: "chicken, soy sauce, mirin, sugar, sake",
    youtube_link: "https://www.youtube.com/watch?v=I8DIxPZTB-c"
  },
  {
    name: "Onigiri",
    cuisine: "Japanese",
    ingredients: "rice, seaweed, various fillings",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  },
  {
    name: "Yakitori",
    cuisine: "Japanese",
    ingredients: "chicken, soy sauce, mirin, sugar",
    youtube_link: "https://www.youtube.com/watch?v=I8DIxPZTB-c"
  },
  {
    name: "Gyoza",
    cuisine: "Japanese",
    ingredients: "ground pork, cabbage, garlic, ginger, soy sauce",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  },
  {
    name: "Okonomiyaki",
    cuisine: "Japanese",
    ingredients: "flour, eggs, cabbage, pork, okonomiyaki sauce",
    youtube_link: "https://www.youtube.com/watch?v=I8DIxPZTB-c"
  },
  {
    name: "Matcha Ice Cream",
    cuisine: "Japanese",
    ingredients: "matcha powder, milk, sugar, cream",
    youtube_link: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
  }
];

const loadRecipes = async () => {
  return recipes;
};

export default loadRecipes;