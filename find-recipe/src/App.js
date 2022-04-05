import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { Header, AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput } from './components/Header';
import { RecipeContainer, RecipeListContainer, RecipeName, SeeMoreText, CoverImage, IngredientsText } from './components/recipeComponent';


const APP_ID = "9c96de9a";
const APP_KEY = "5986326a775ec7c14f26c05b8a4fe9ef";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`

const RecipeComponent = (props) => {

  const [show, setShow] = React.useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id='alert-dialog-slide-title'>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientsObj) =>
                <tr>
                  <td>{ingredientsObj.text}</td>
                  <td>{ingredientsObj.weight}</td>
                </tr>
              )}

            </tbody>
          </table>
          <DialogActions>
            <IngredientsText onClick={() => window.open(recipeObj.url)}>See More</IngredientsText>
            <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
          </DialogActions>
        </DialogContent>

      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
      </RecipeContainer>
    </>
  );
};

function App() {

  const [timeoutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId)
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeOutId(timeOut);
  }

  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='food-icon.png' />Find Recipe</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search.png" />
          <SearchInput placeholder='Search Recipe' onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? recipeList.map((recipeObj) => (
          <RecipeComponent recipeObj={recipeObj.recipe} />
        )) : <Placeholder src="icon.png" /> }
      </RecipeListContainer>
    </Container>
  );
}

export default App;
