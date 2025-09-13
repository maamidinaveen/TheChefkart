# 🍽️ Party Menu Selection App

A ReactJS application that allows users to select dishes for a party menu from categorized tabs and cuisines.  
This project was built as part of an assignment to demonstrate **UI design skills, logical thinking, and ReactJS fundamentals**.

---

## 🚀 Features

- **Meal Categories (Tabs)**  
  Four meal types displayed as tabs: `Starter`, `Main Course`, `Dessert`, and `Sides`.

- **Cuisine Categories**  
  Dishes are grouped under **cuisines**:
  - North Indian  
  - South Indian  
  - Chinese  

- **Dish List**  
  - Dish Name, Short Description, and Image displayed in a card layout  
  - `Add / Remove` button to toggle dish selection  
  - `Ingredient` button navigates to an ingredient details screen  
  - Cuisine type is shown with each dish card (e.g., *North Indian*).  

- **Search Functionality**  
  - Case-insensitive search by dish name  
  - Search works only within the selected category  

- **Veg / Non-Veg Filters**  
  - Independent toggle filters  
  - Updates dish list immediately  

- **Dish Selection Summary**  
  - Count of selected dishes shown in each tab  
  - Footer shows total selected dishes and a **Continue** button (static)  

- **Ingredient Screen**  
  - Navigates to a new page with **dummy dish data** (as per assignment requirement)  
  - Displays dish name, description, and a sample ingredient list  

---

## 🛠️ Tech Stack

- **ReactJS** (functional components + hooks)
- **React Router DOM** (navigation)
- **Mock JSON data** for dishes & ingredients (with cuisines included)
- **CSS Modules** for styling

---

## 📂 Project Structure

src/
├── components/
│ ├── Home.js  # Main container with cuisines + dishes
│ ├── DishCard.js # Card layout for individual dish
│ ├── DishList.js  # Renders list of dishes under cuisine
│ ├── Filters.js  # Tabs, search, and veg/non-veg filters
│ ├── IngredientModal.js # Ingredient screen (navigated route)
│ └── Modal.js # Dish details modal
├── data/
│ └── mockDishes.js # Mock data with cuisines (North, South, Chinese)
├── images/ # Dish and UI icons
├── App.js # Routes (Home + Ingredients)
└── index.js # Entry point

## 🚀 Quick Start

# Go to project folder
cd party-menu-app

# Install dependencies
npm install

# Start the development server
npm start