import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "services/mealService";
import { MealDetailType } from "Interfaces/MealIntefaces";

const MealDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mealData, setMealData] = useState<MealDetailType>()
  useEffect(() => {
    const fetchMeal = async () => {
      if(id){
        const data = await getMealById(id)
        setMealData(data.meals[0]);
      }
      else{
        navigate("/")
      }
    }
    fetchMeal();
  }, [])
  return <div className="meal-detail-page">
    <h5>{mealData?.strMeal}</h5>
  </div>;
};

export default MealDetail;
