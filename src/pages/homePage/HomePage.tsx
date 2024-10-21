import { useEffect, useState } from "react";
import {
  getListArea,
  getListCategory,
  getListIngredient,
  getMealByFilter,
  getMealBySearchKey,
} from "services/mealService";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      getListCategory().then((data) => setCategories(data));
      getListArea();
      getListIngredient();
      getMealByFilter({
        filterType: "category",
        category: "beef",
      });
    };
    fetchCategories();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
