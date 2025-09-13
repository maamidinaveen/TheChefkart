import { useState } from "react";

import Modal from "../Modal";

import { dishes } from "../../data/mockDishes";

import { Category_names } from "../../data/mockDishes";

import DishList from "../DishList";

import Filters from "../Filters";

import upArrow from "../../images/up_arrow.svg";

import rightArrow from "../../images/right_arrow.svg";

import "./index.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starter");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonvegOnly, setNonvegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const [currentDish, setCurrentDish] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleCategoryName = (name) => {
    setCategoryName(categoryName === name ? null : name);
  };

  const onAddDish = (dish) => {
    setSelectedDishes([...selectedDishes, dish]);
  };

  const onRemoveDish = (id) => {
    const updateSelectedDishes = selectedDishes.filter(
      (each) => each.id !== id
    );
    setSelectedDishes(updateSelectedDishes);
  };

  

  const openModal = (dish) => {
    setCurrentDish(dish);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentDish(null);
    setShowModal(false);
  };

  let filteredDishes;

  return (
    <div className="app-container">
      <div className="app-store">
        <Filters
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegOnly={vegOnly}
          onVegOnlyChange={setVegOnly}
          nonvegOnly={nonvegOnly}
          onNonVegOnlyChange={setNonvegOnly}
          selectedDishes={selectedDishes}
        />

        <div className="categories-name-container">
          {Category_names.map((eachCategoryName) => {
            filteredDishes = dishes.filter(
              (each) => each.category.name === eachCategoryName.type
            );

            filteredDishes = filteredDishes.filter(
              (each) =>
                each.mealType.toUpperCase() === selectedCategory.toUpperCase()
            );

            filteredDishes = filteredDishes.filter((each) =>
              each.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (vegOnly && !nonvegOnly) {
              filteredDishes = filteredDishes.filter(
                (each) => each.type === "VEG"
              );
            } else if (!vegOnly && nonvegOnly) {
              filteredDishes = filteredDishes.filter(
                (each) => each.type === "NON-VEG"
              );
            }

            return (
              <div className="category-name" key={eachCategoryName.id}>
                <div className="category-header">
                  <h2>{eachCategoryName.type}</h2>
                  <button
                    type="button"
                    className="arr-btn"
                    onClick={() => toggleCategoryName(eachCategoryName.type)}
                  >
                    <img src={upArrow} alt="up arrow" />
                  </button>
                </div>

                {categoryName === eachCategoryName.type && (
                  <div className="dishes-container">
                    <DishList
                      dishes={filteredDishes}
                      onAddDish={onAddDish}
                      onRemoveDish={onRemoveDish}
                      selectedDishes={selectedDishes}
                      openModal={openModal}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="footer-section-container">
          <div className="count-container">
            <h3>
              Total Dish Selected <span>{selectedDishes.length}</span>
            </h3>
            <img src={rightArrow} alt="right arrow" />
          </div>
          <button className="continue-button" type="button">
            Continue
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          dish={currentDish}
          onClose={closeModal}
          onRemoveDish={onRemoveDish}
        />
      )}
    </div>
  );
};

export default Home;
