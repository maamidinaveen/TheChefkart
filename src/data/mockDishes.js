export const Meal_types = [
  {
    id: 1,
    value: "Starter",
  },
  {
    id: 2,
    value: "Main Course",
  },
  {
    id: 3,
    value: "Dessert",
  },
  {
    id: 4,
    value: "Sides",
  },
];

export const Category_names = [
  {
    id: 1,
    type: "North Indian",
  },
  {
    id: 2,
    type: "South Indian",
  },
  {
    id: 3,
    type: "Chinese",
  },
];

export const dishes = [
  // ===================== 🌶️ NORTH INDIAN =====================
  { id: 1, name: "Paneer Tikka", mealType: "STARTER", type: "VEG", description: "Grilled paneer cubes with spices.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "TANDOOR" },
  { id: 2, name: "Chicken Malai Tikka", mealType: "STARTER", type: "NON-VEG", description: "Creamy chicken skewers grilled to perfection.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "TANDOOR" },
  { id: 3, name: "Butter Chicken", mealType: "MAIN COURSE", type: "NON-VEG", description: "Creamy tomato gravy with tender chicken.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "CURRY" },
  { id: 4, name: "Dal Makhani", mealType: "MAIN COURSE", type: "VEG", description: "Slow-cooked black dal with butter and cream.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "DAL" },
  { id: 5, name: "Rogan Josh", mealType: "MAIN COURSE", type: "NON-VEG", description: "Kashmiri-style lamb curry with aromatic spices.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "CURRY" },
  { id: 6, name: "Jeera Rice", mealType: "SIDES", type: "VEG", description: "Steamed rice flavored with cumin.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "RICE" },
  { id: 7, name: "Tandoori Roti", mealType: "SIDES", type: "VEG", description: "Clay oven baked flatbread.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "BREAD" },
  { id: 8, name: "Gulab Jamun", mealType: "DESSERT", type: "VEG", description: "Milk solid dumplings soaked in sugar syrup.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "SWEET" },
  { id: 9, name: "Rasmalai", mealType: "DESSERT", type: "VEG", description: "Soft paneer patties soaked in saffron milk.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "SWEET" },
  { id: 10, name: "Phirni", mealType: "DESSERT", type: "VEG", description: "Rice pudding flavored with cardamom.", image: null, category: { id: 1, name: "North Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png" }, dishType: "SWEET" },

  // ===================== 🌶️ SOUTH INDIAN =====================
  { id: 11, name: "Medu Vada", mealType: "STARTER", type: "VEG", description: "Crispy fried lentil doughnuts.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "FRIED" },
  { id: 12, name: "Chicken 65", mealType: "STARTER", type: "NON-VEG", description: "Spicy fried chicken bites.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "FRIED" },
  { id: 13, name: "Masala Dosa", mealType: "MAIN COURSE", type: "VEG", description: "Crispy dosa stuffed with potato filling.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "DOSAI" },
  { id: 14, name: "Chettinad Chicken Curry", mealType: "MAIN COURSE", type: "NON-VEG", description: "Fiery chicken curry from Chettinad region.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "CURRY" },
  { id: 15, name: "Vegetable Kurma", mealType: "MAIN COURSE", type: "VEG", description: "Mixed vegetables in coconut gravy.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "CURRY" },
  { id: 16, name: "Sambar", mealType: "SIDES", type: "VEG", description: "Lentil stew with tamarind.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "CURRY" },
  { id: 17, name: "Curd Rice", mealType: "SIDES", type: "VEG", description: "Rice mixed with yogurt and tempered spices.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "RICE" },
  { id: 18, name: "Payasam", mealType: "DESSERT", type: "VEG", description: "Sweet pudding with jaggery & coconut milk.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "SWEET" },
  { id: 19, name: "Kesari Bath", mealType: "DESSERT", type: "VEG", description: "Saffron flavored semolina pudding.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "SWEET" },
  { id: 20, name: "Rava Laddu", mealType: "DESSERT", type: "VEG", description: "Sweet balls made from semolina and sugar.", image: null, category: { id: 2, name: "South Indian", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png" }, dishType: "SWEET" },

  // ===================== 🌶️ CHINESE =====================
  { id: 21, name: "Spring Rolls", mealType: "STARTER", type: "VEG", description: "Crispy rolls stuffed with vegetables.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "FRIED" },
  { id: 22, name: "Chicken Lollipop", mealType: "STARTER", type: "NON-VEG", description: "Crispy chicken wings tossed in spicy sauce.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "FRIED" },
  { id: 23, name: "Chilli Chicken", mealType: "MAIN COURSE", type: "NON-VEG", description: "Spicy chicken with onions & peppers.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "STIR-FRY" },
  { id: 24, name: "Veg Manchurian", mealType: "MAIN COURSE", type: "VEG", description: "Veg dumplings in tangy Manchurian sauce.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "CURRY" },
  { id: 25, name: "Kung Pao Chicken", mealType: "MAIN COURSE", type: "NON-VEG", description: "Stir-fried chicken with peanuts & veggies.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "STIR-FRY" },
  { id: 26, name: "Fried Rice", mealType: "SIDES", type: "VEG", description: "Chinese-style stir fried rice.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "RICE" },
  { id: 27, name: "Hakka Noodles", mealType: "SIDES", type: "VEG", description: "Stir-fried noodles with soy sauce.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "NOODLES" },
  { id: 28, name: "Honey Noodles with Ice Cream", mealType: "DESSERT", type: "VEG", description: "Crispy noodles served with vanilla ice cream.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "SWEET" },
  { id: 29, name: "Sesame Balls", mealType: "DESSERT", type: "VEG", description: "Fried dough balls filled with red bean paste.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "SWEET" },
  { id: 30, name: "Mango Pudding", mealType: "DESSERT", type: "VEG", description: "Chilled mango-flavored pudding.", image: null, category: { id: 3, name: "Chinese", image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png" }, dishType: "SWEET" },
];
