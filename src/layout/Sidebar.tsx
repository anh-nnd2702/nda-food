import { useState, useEffect, useMemo } from "react";
import NfAccordion from "components/common/accordion/NfAccordion";
import { getListCategory, getListArea } from "services/mealService";
import "./layout.scss";
type categoryType = {
  strCategory: string;
};
type areaType = {
  strArea: string;
};

type SidebarPropType = {
  isShowMenu: boolean;
};

const Sidebar = (props: SidebarPropType) => {
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [areas, setAreas] = useState<areaType[]>([]);
  useEffect(() => {
    getListCategory().then((res) => {
      setCategories(res.meals);
    });
    getListArea().then((res) => {
      setAreas(res.meals);
    });
  }, []);

  const categoriesList = useMemo(
    () => (
      <ul>
        {categories &&
          categories.map((item, index) => (
            <li key={index}>{item.strCategory}</li>
          ))}
      </ul>
    ),
    [categories]
  );
  const areaList = useMemo(
    () => (
      <ul>
        {areas &&
          areas.map((item, index) => <li key={index}>{item.strArea}</li>)}
      </ul>
    ),
    [areas]
  );
  return (
    <div id="sideBar" className={props.isShowMenu ? "show" : "hide"}>
      <div className="sidebar__selector">
        <NfAccordion
          id="categoryAcd"
          summary={<h6>Categories</h6>}
          detail={categoriesList}
        ></NfAccordion>
      </div>
      <div className="sidebar__selector">
        <NfAccordion
          id="areaAcd"
          summary={<h6>Areas</h6>}
          detail={areaList}
        ></NfAccordion>
      </div>
      <div className="sidebar__selector"></div>
    </div>
  );
};

export default Sidebar;
