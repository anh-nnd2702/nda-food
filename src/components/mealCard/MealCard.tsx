import { Card, CardMedia, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./mealCard.scss";

type MealType = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type MealCardPropType = {
  meal: MealType;
  key: string;
};

const MealCard = (props: MealCardPropType) => {
  const navigate = useNavigate();
  const { meal } = props;
  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        border: "solid 1px #fcfcfc",
      }}
    >
      <Card
        key={meal.idMeal}
        id={meal.idMeal}
        sx={{
          position: "relative",
          flexGrow: "1",
          height: "100%",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          image={meal.strMealThumb}
          sx={{
            // height: "200px",
            // width: "380px",
            height: "100%",
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
              onClick={() => navigate(`/meal-detail/${meal.idMeal}`)}
            >
              {meal.strMeal}
            </h5>
          </Typography>
        </CardMedia>
        {/* <CardActions>
        <Button
          onClick={() => navigate(`/meal-detail/${meal.idMeal}`)}
          size={"small"}
        >
          Share
        </Button>
      </CardActions> */}
      </Card>
    </Paper>
  );
};

export default MealCard;
