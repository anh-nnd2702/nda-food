import { useEffect, useState } from "react";
import { getMealByFilter } from "services/mealService";
import "./homePage.scss";
import MealCard from "components/mealCard/MealCard";
import MealContainer from "components/mealCard/MealContainer";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { setParams, resetParams, getListMealAsync } from "store/mealSlice";
import Loading from "components/common/loading/Loading";

export type MealType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const HomePage = () => {
  // const [meals, setMeals] = useState<MealType[]>([]);
  const dispatch = useAppDispatch();
  const dataMeal = useAppSelector((state) => state.meal);
  const { meals, loading, error, filters } = dataMeal;

  useEffect(() => {
    dispatch(
      getListMealAsync({
        filterType: "category",
        category: "beef",
      })
    );
    // return dispatch(resetParams);
  }, [dispatch]);
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  return (
    <div className="home-page">
      {meals.length > 0 ? (
        <MealContainer mealList={meals.slice(0, 6)} listType="left-7" />
      ) : (
        ""
      )}
      {meals.length > 6 ? (
        <MealContainer mealList={meals.slice(6, 12)} listType="left-7" />
      ) : (
        ""
      )}
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
