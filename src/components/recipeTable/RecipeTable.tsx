import { MealDetailType } from "Interfaces/MealIntefaces";
import "./recipeTable.scss";

const RecipeTable = (props: MealDetailType) => {
    const nonEmptyPropValues = Object.entries(props).filter(([_, val]) => !!val);
    const measureValues: string[] | any[] = [];
    const ingredientValues: string[] | any[] = [];
    nonEmptyPropValues.forEach(k => {
        if(k[0].includes("strIngredient")){
            ingredientValues.push(k[1])
        }
        if(k[0].includes("strMeasure")){
            measureValues.push(k[1])
        }
    })
    const combineValues = [];
    for(let k = 0; k < measureValues.length; k++){
        combineValues.push([ingredientValues[k], measureValues[k]])
    }
    return (
        <div className="recipe-table">
            <label>{props.strMeal} Recipe</label>
            <table>
                <thead>
                    <tr>
                        <td>Ingredient</td>
                        <td>Measure</td>
                    </tr>
                </thead>
                <tbody>
                    {combineValues.map(val => (
                        <tr key={val[0]}>
                            <td>{val[0]}</td>
                            <td>{val[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecipeTable;
