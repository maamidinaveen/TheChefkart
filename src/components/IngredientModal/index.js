import { useNavigate } from "react-router-dom";

import "./index.css";

import leftArrow from "../../images/left_arrow.svg";

import vegetables from "../../images/vegetables.png";

const IngredientModal = () => {

    const navigate = useNavigate()

  return (
    <div className="ingredient-list-container">
      <div className="ingredient-content">
        <div className="header">
          <button type='button' className="arrow-button" onClick={() => navigate("/")}>
            <img src={leftArrow} alt="left arrow" />
          </button>
          <h1>Ingredient list</h1>
        </div>
        <div className="details-list-container">
          <div className="dish-name-image-container">
            <div className="dish-details">
              <h2>Fried Avocado Tacos...</h2>
              <p>
                Panco fried avocado, Mayo, panco fried avocado, Mayo, Panco
                fried avocado avocado, Mayo, Panco fried avocado...
              </p>
            </div>
            <img src={vegetables} alt="veg" />
          </div>
          <div className="raw-details">
            <h4>Ingredients</h4>
            <p>For 2 people</p>
            <hr className="line" />
            <ul className="list-container">
              <li>
                <p>Cauliflower</p>
                <p>01 PC</p>
              </li>
              <li>
                <p>Mustard oil</p>
                <p>1/2 litres</p>
              </li>
              <li>
                <p>Cauliflower</p>
                <p>01 PC </p>
              </li>
              <li>
                <p>Tomato</p>
                <p>01 PC</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;
