import chicken from "../../images/pixel_chicken_image.png";

import vegIcon from "../../images/veg_icon.svg";

import nonVegIcon from "../../images/non_veg_icon.svg";

import ingredient from "../../images/ing-extra.svg";

import "./index.css";

const Modal = (props) => {
  const { dish, onClose, onRemoveDish } = props;
  const { name, category } = dish;

  const iconUrl = dish.type === "VEG" ? vegIcon : nonVegIcon;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="modal-card">
          <img src={chicken} alt="icon" className="dish-image" />
          <div className="details-container">
            <div className="name-icon-button-container">
              <div className="name-icon-container">
                <h4>{name}</h4>
                <img src={iconUrl} alt="icon" className="type-icon" />
              </div>
              <button
                type="button"
                className="rem-btn"
                onClick={() => {
                  onRemoveDish(dish.id);
                  onClose();
                }}
              >
                Remove
              </button>
            </div>
            <p>
              <span>{category.name}</span> {name} is a dish made chicken
              marinated shadfd is a dish made from xyz extra
            </p>
            <div className="ingredient-container">
              <img src={ingredient} alt="ing" />
              <h4>Ingredient</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
