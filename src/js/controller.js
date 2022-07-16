import * as model from './model.js';
import recipeView from './views/recipeView.js';
import { addHandlerRenderer } from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Showing which recipe you want on the main page
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Rendering a spinner before data shows up
    recipeView.renderSpinner();

    // 1) Loading a Recipe
    await model.loadRecipe(id);

    // 2) Rendering a Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert('Error: ' + err.message);
  }
};

// Show a recipe based on event handler

const init = function () {
  recipeView.addHandlerRenderer(controlRecipes);
};

init();
