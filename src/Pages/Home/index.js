import React, { useEffect, useState } from "react";
import { Container, Content, Apresentation, Search } from "./style.js";
import Recipes from "../RecipeList/recips";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
const Home = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Content>
        <Apresentation>
          <h2>What do you wanna eat?</h2>
          <div>
            <h1>
              <span>SR</span>Food
            </h1>
            <h3>The best place to found recipes</h3>
          </div>
        </Apresentation>
        <Search>
          <input type="text" value={search} onChange={updateSearch}></input>
          <Link
            to={{
              pathname: "/listRecipes",
              param: search,
            }}
          >
            <button type="button">Search</button>
          </Link>
        </Search>
      </Content>
    </Container>
  );
};

export default withRouter(Home);
