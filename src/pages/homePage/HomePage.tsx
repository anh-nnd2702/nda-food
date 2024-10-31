import {
  Card,
  CardActions,
  CardContent,
  Box,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMealByFilter } from "services/mealService";
import "./homePage.scss";

type MealType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const CardOverlay = (props: any) => {
  return <div className="card-overlay">{props.children}</div>;
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
    <div className="home-page">
      <div className="meal-list">
        {meals &&
          meals.map((meal) => (
            <Card
              key={meal.idMeal}
              id={meal.idMeal}
              sx={{ position: "relative" }}
            >
              <CardMedia
                image={meal.strMealThumb}
                sx={{
                  height: "200px",
                  // width: "380px",
                  backgroundSize: "cover",
                }}
              >
                <Typography
                  gutterBottom
                  component={"div"}
                  sx={{
                    height: "100%",
                    display: "flex",
                    margin: "0",
                    overflow: "hidden",
                  }}
                >
                  <h5
                    style={{
                      alignSelf: "flex-end",
                      width: "100%",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      padding: "4px 8px",
                      backgroundColor: "rgba(255, 255, 255, 0.54)",
                      marginBottom: "0",
                    }}
                  >
                    {meal.strMeal}
                  </h5>
                </Typography>
              </CardMedia>
              <CardActions>
                <Button onClick={() => navigate("/meal-detail")} size={"small"}>
                  Share
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
