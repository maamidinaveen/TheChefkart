import "./index.css";

import leftArrow from "../../images/left_arrow.svg";
import searchIcon from "../../images/search_icon.svg";

import { Meal_types } from "../../data/mockDishes";

const Filters = (props) => {
  const {
    activeCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
    vegOnly,
    onVegOnlyChange,
    nonvegOnly,
    onNonVegOnlyChange,
    selectedDishes,
  } = props;

  const onClickVeg = () => onVegOnlyChange(!vegOnly);
  const onClickNonVeg = () => onNonVegOnlyChange(!nonvegOnly);

  return (
    <>
      <div className="search-container">
        <img src={leftArrow} alt="left arrow" className="left-arrow" />
        <input
          type="search"
          className="input-search"
          placeholder="Search dish for your party..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <img src={searchIcon} alt="search icon" className="search-icon" />
      </div>

      <div className="tabs-container">
        {Meal_types.map((eachType) => {
          const buttonClassName =
            activeCategory === eachType.value ? "active tab-btn" : "tab-btn";
          const spanClassName =
            activeCategory === eachType.value ? "count active-count" : "count";

          let count = 0;

          switch (eachType.value) {
            case "Starter":
              const startersArray = selectedDishes.filter(
                (each) => each.mealType === "STARTER"
              );
              count = startersArray.length;
              break;
            case "Main Course":
              const mainCourseArray = selectedDishes.filter(
                (each) => each.mealType === "MAIN COURSE"
              );
              count = mainCourseArray.length;
              break;
            case "Dessert":
              const dessertArray = selectedDishes.filter(
                (each) => each.mealType === "DESSERT"
              );
              count = dessertArray.length;
              break;
            case "Sides":
              const sidesArray = selectedDishes.filter(
                (each) => each.mealType === "SIDES"
              );
              count = sidesArray.length;
              break;
            default:
              count = 0
            
          }

          return (
            <button
              key={eachType.id}
              type="button"
              className={buttonClassName}
              onClick={() => onCategoryChange(eachType.value)}
            >
              {eachType.value}
              <span className={spanClassName}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="veg-filter-container">
        <h3>
          {activeCategory}s selected (
          {
            selectedDishes.filter(
              (each) =>
                each.mealType.toUpperCase() === activeCategory.toUpperCase()
            ).length
          }
          )
        </h3>
        <div className="toggles">
          {/* Veg Toggle */}
          <label className="checkbox-container">
            <input type="checkbox" checked={vegOnly} onChange={onClickVeg} />
            <span className="checkmark veg"></span>
          </label>

          {/* Non-Veg Toggle */}
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={nonvegOnly}
              onChange={onClickNonVeg}
            />
            <span className="checkmark nonveg"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Filters;
