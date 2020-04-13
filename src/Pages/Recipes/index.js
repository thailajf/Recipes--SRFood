import React, { useEffect, useState } from "react";
import { App_ID, App_Key } from "../../Services/api";
import { Container, RecipesList, Header, Logo } from "./styles";
import Recipes from "../RecipeList/recips";

const App = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (props.location.param) {
      setQuery(props.location.param);
    }

    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    setRecipes([]);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Container>
      <Header>
        <Logo>
          <span>SR</span>Food
        </Logo>
        <form onSubmit={getSearch} className="Search-form">
          <input type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </Header>

      <RecipesList>
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            totalTime={recipe.recipe.totalTime}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </RecipesList>
    </Container>
  );
};

export default App;
