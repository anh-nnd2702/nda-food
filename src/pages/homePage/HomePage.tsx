import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMealByFilter } from "services/mealService";

type MealType = {
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
  const navigate = useNavigate();
  return (
    <div>
      {meals &&
        meals.map((meal) => (
          <Card
            key={meal.idMeal}
            id={meal.idMeal}
            sx={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <CardMedia
              image={meal.strMealThumb}
              sx={{ height: "160px", backgroundSize: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom component={"div"}>
                {meal.strMeal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => navigate("/meal-detail")} size={"small"}>
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default HomePage;
