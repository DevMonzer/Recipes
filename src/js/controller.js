import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import { addHandlerRenderer } from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Showing which recipe you want on the main page
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 0) Rendering a spinner before data shows up
    recipeView.renderSpinner();

    // 1) Loading a Recipe
    await model.loadRecipe(id);

    // 2) Rendering a Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // Rendering error
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // Reciving the search query from the searchView model
    const query = searchView.getQuery();

    await model.loadSearchResults('pizza');
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

// Show a recipe based on event handler
const init = function () {
  recipeView.addHandlerRenderer(controlRecipes);
};

init();

/*

  Make sure to throw errors from other modules to be shown here
  
  // https://forkify-api.herokuapp.com/v2

*/
