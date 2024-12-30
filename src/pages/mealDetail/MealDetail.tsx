import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "services/mealService";
import { MealDetailType } from "Interfaces/MealIntefaces";
import NFTag from "components/common/tag/NFTag";
import RecipeTable from "components/recipeTable/RecipeTable";
import "./mealDetail.scss";

const MealDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mealData, setMealData] = useState<MealDetailType>();
  useEffect(() => {
    const fetchMeal = async () => {
      if (id) {
        const data = await getMealById(id);
        setMealData(data.meals[0]);
      } else {
        navigate("/");
      }
    };
    fetchMeal();
  }, []);
  return (
    <div className="meal-detail-page">
      <h4>{mealData?.strMeal}</h4>
      <NFTag
        tagType="normal"
        text={mealData?.strArea}
        variant="full"
        borderType="rounded"
      />
      <NFTag 
        tagType="normal"
        text={mealData?.strCategory}
        variant="full"
        borderType="rounded"
      />
      <img src={mealData?.strMealThumb}></img>
      {mealData && <RecipeTable {...mealData}/>}
      <iframe src={mealData?.strYoutube?.replace("watch?v=", "embed/")} width={"450"} height={"300"}/>
    </div>
  );
};

export default MealDetail;
