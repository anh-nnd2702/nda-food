import { ReactElement, useEffect, useState } from "react";
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
  const renderListMeal = () => {
    const ListContainer: ReactElement[] = [];
    const blockCount = (meals.length/6) * 6;
    for(let mId = 0; mId < blockCount-6; mId+=6){
      const mealContainer = <MealContainer mealList={meals.slice(mId, mId+6)} listType="left-7" />
      ListContainer.push(mealContainer)
    }
    return ListContainer;
  }
  return ( 
    <div className="home-page">
      {renderListMeal()}
    </div>
  );
};

export default HomePage;
