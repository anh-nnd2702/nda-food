import { useEffect, useState } from "react";
import { getMealByFilter } from "services/mealService";
import "./homePage.scss";
import MealCard from "components/mealCard/MealCard";
import MealContainer from "components/mealCard/MealContainer";

export type MealType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const HomePage = () => {
  const [meals, setMeals] = useState<MealType[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      getMealByFilter({
        filterType: "category",
        category: "beef",
      }).then((data) => setMeals(data.meals));
    };
    fetchCategories();
  }, []);

  return (
    <div className="home-page">
      {meals.length && <MealContainer mealList={meals} listType="left-7" />}
      {/* <div className="meal-list">
        {meals &&
          meals.map((meal) => (
            <MealCard meal={meal} key={meal.idMeal}></MealCard>
          ))}
      </div> */}
    </div>
  );
};

export default HomePage;
