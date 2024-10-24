import { useState, useEffect, useMemo } from "react";
import NfAccordion from "components/common/accordion/NfAccordion";
import { getListCategory, getListArea, getListIngredient } from "services/mealService";
import "./layout.scss";
import { Autocomplete } from "@mui/material";
type categoryType = {
  strCategory: string;
};
type areaType = {
  strArea: string;
};
type ingredientType = {
  strIngredient: string;
};
const Sidebar = () => {
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [areas, setAreas] = useState<areaType[]>([]);
  const [ingredients, setIngredients] = useState<ingredientType[]>([]);
  useEffect(() => {
    getListCategory().then(res => {
      setCategories(res.meals)
    })
    getListArea().then(res => {
      setAreas(res.meals)
    })
    getListIngredient().then(res => {
      setIngredients(res.meals)
    })
  }, [])

  const categoriesList = useMemo(() => (
    <ul>
      {categories && categories.map((item, index) => (
        <li key={index}>{item.strCategory}</li>
      ))}
    </ul>
  ), [categories]);
  const areaList = useMemo(() => (
    <ul>
      {areas && areas.map((item, index) => (
        <li key={index}>{item.strArea}</li>
      ))}
    </ul>
  ), [areas]);
  const ingredientList = useMemo(() => (
    <ul>
      {ingredients && ingredients.map((item, index) => (
        <li key={index}>{item.strIngredient}</li>
      ))}
    </ul>
  ), [ingredients]);
  return <div id="sideBar">
    <div className="sidebar__selector">
      <NfAccordion 
        id="categoryAcd" 
        summary={
          <h6>Categories</h6>
        }
        detail={
          categoriesList
        }
      ></NfAccordion>
    </div>
    <div className="sidebar__selector">
      <NfAccordion 
        id="areaAcd" 
        summary={
          <h6>Areas</h6>
        }
        detail={
          areaList
        }
      ></NfAccordion>
    </div>
    <div className="sidebar__selector">
    </div>
  </div>;
};

export default Sidebar;
