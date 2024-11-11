import { MealType } from "pages/homePage/HomePage";
import MealCard from "./MealCard";
import "./mealContainer.scss";
import { Paper } from "@mui/material";

type MealContainerPropType = {
  mealList: MealType[];
  listType: "normal" | "left-7" | "right-7";
};
const MealContainer = (props: MealContainerPropType) => {
  const { mealList, listType } = props;

  return (
    <div className="meal-container col-lg-12">
      <div className="col-lg-3 col-md-">
        <div className="card-wrapper square">
          <MealCard meal={mealList[0]} key={mealList[0]?.idMeal} />
        </div>
        <div className="card-wrapper square">
          <MealCard meal={mealList[1]} key={mealList[1]?.idMeal} />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card-wrapper rec-1-2">
          <MealCard meal={mealList[2]} key={mealList[2]?.idMeal} />
        </div>
      </div>
      <div className="col-lg-6 d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="col-lg-4">
            <div className="card-wrapper rec-2-3">
              <MealCard meal={mealList[3]} key={mealList[3]?.idMeal} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card-wrapper rec-4-3">
              <MealCard meal={mealList[4]} key={mealList[4]?.idMeal} />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card-wrapper rec-2-1">
            <MealCard meal={mealList[5]} key={mealList[5]?.idMeal} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MealContainer;
