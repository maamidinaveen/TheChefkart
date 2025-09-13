import { useNavigate } from "react-router-dom";

import "./index.css";

import vegIcon from "../../images/veg_icon.svg";

import nonVegIcon from "../../images/non_veg_icon.svg";

import ingredientIcon from "../../images/ingredient.png";

import chicken from "../../images/checken.png";

import cabbage from "../../images/cabbage.png";


const DishCard = (props) => {

  const navigate = useNavigate()

  const { dish, onAddDish,onRemoveDish, selectedDishes,openModal } = props;
  const { id, name, type, description } = dish;

  const iconUrl = type === "VEG" ? vegIcon : nonVegIcon;

  const imageUrl = type === "VEG" ? cabbage : chicken;

  const onClickAddbutton = () => {
    onAddDish(dish);
  };

  const onClickRemoveButton = () => {
    onRemoveDish(id)
  }

  const isSelected = selectedDishes.some((each) => each.id === id);

  return (
    <li className="dish-card-container">
      <div className="details-container">
        <div className="name-icon-container">
          <h1>{name}</h1>
          <img src={iconUrl} alt="icon" />
        </div>
        <p>
          {description}...
          <span className="read-btn" onClick={() => openModal(dish)}>Read more</span>
        </p>
        <div className="ingredient-container">
          <img src={ingredientIcon} alt="ingredient" />
          <button type='button' className="ing-btn" onClick={() =>navigate('/ingredients') }>Ingredient</button>
        </div>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="icon" />
        {isSelected ? (
            <button className="remove-btn" onClick={onClickRemoveButton}>
                Remove
            </button>
        ) : (
          <button className="add-btn" onClick={onClickAddbutton}>
            Add +
          </button>
        )}
      </div>
    </li>
  );
};

export default DishCard;
