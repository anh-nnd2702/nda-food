import {
    Card,
    CardActions,
    CardMedia,
    Typography,
    Button,
  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./mealCard.scss"

type MealType = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };

const MealCard = (props : {meal : MealType, key: string}) => {
  const navigate = useNavigate();
  const {meal} = props;
    return (
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
                    className="card__overlay-title"
                  >
                    {meal.strMeal}
                  </h5>
                </Typography>
              </CardMedia>
              <CardActions>
                <Button onClick={() => navigate(`/meal-detail/${meal.idMeal}`)} size={"small"}>
                  Share
                </Button>
              </CardActions>
            </Card>
    )
}

export default MealCard;