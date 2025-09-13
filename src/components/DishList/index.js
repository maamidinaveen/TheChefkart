import DishCard from "../DishCard";

import "./index.css";

const DishList = (props) => {
  const { dishes, onAddDish,onRemoveDish,selectedDishes,openModal} = props;

  return (
    <ul className="dishes-list-container">
      {dishes.map((each) => (
        <DishCard
          key={each.id}
          dish={each}
          onAddDish = {onAddDish}
          selectedDishes ={selectedDishes}
          onRemoveDish = {onRemoveDish}
          openModal = {openModal}
        />
      ))}
    </ul>
  );
};

export default DishList;
