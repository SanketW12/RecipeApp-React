import React, { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import "./App.css";
import Recipe from "./Recipe";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const apiId = "a1b941de";
  const apiKey = "1508120e4346b0325ae435c473dcf9d5";

  // useEffect(() => {
  //   getRecipe();
  // }, []);

  function getSearch(e) {
    setSearch(e.target.value);
  }

  function showSearch() {
    if (search === "") {
      alert("write some thing");
    } else {
      async function getRecipe() {
        const dataJ = await Axios.get(
          `https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${apiKey}`
        );

        setRecipes(dataJ.data.hits);
        console.log(dataJ.data.hits);
      }
      getRecipe();
    }
    setSearch("");
  }

  return (
    <>
      <div>
        <div className="header">
          <Input value={search} onChange={getSearch} placeholder="Type food" />
          <Button onClick={showSearch} variant="contained" color="primary">
            Search
          </Button>
        </div>

        <div id="root">
          {recipes.map((recipes, i) => {
            return (
              <Recipe
                key={i}
                tittle={recipes.recipe.label}
                calories={recipes.recipe.calories}
                imgsrc={recipes.recipe.image}
              ></Recipe>
            );
          })}
        </div>
      </div>
    </>
  );
}
