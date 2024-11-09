import { MealType } from "pages/homePage/HomePage";
import MealCard from "./MealCard";
import "./mealContainer.scss";

type MealContainerPropType = {
  mealList: MealType[];
  listType: "normal" | "left-7" | "right-7";
};
const MealContainer = (props: MealContainerPropType) => {
  const { mealList, listType } = props;

  return (
    <div className="meal-container col-lg-12">
      <div className="col-lg-3">
        <div className="card-wrapper--square p-1">
          <MealCard meal={mealList[0]} key={mealList[0]?.idMeal} />
        </div>
        <div className="card-wrapper--square p-1">
          <MealCard meal={mealList[1]} key={mealList[1]?.idMeal} />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card-wrapper--rec-2-3 p-1">
          <MealCard meal={mealList[3]} key={mealList[3]?.idMeal} />
        </div>
      </div>
      <div className="col-lg-5 d-flex flex-column">
        <div className="meal-container__row flex-grow-1 d-flex flex-row p-1">
          <div className="pe-1 col-lg-5">
            <MealCard meal={mealList[2]} key={mealList[2]?.idMeal} />
          </div>
          <div className="ps-1 col-lg-7">
            <MealCard meal={mealList[4]} key={mealList[4]?.idMeal} />
          </div>
        </div>
        <div className="col-lg-12 flex-grow-1 p-1">
          <MealCard meal={mealList[5]} key={mealList[5]?.idMeal} />
        </div>
      </div>
    </div>
  );
};
export default MealContainer;
