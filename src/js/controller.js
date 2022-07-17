import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Don't rerender unless there is a change in the view
// if (module.hot) {
//   module.hot.accept();
// }

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
    // Rendering a spinner inside the recipes view
    resultsView.renderSpinner();

    // 1) Reciving the search query from the searchView model
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Loading the search results
    await model.loadSearchResults(query);

    // 3) Rendering the results
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

// Show a recipe based on event handler
const init = function () {
  recipeView.addHandlerRenderer(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();

/*

  Make sure to throw errors from other modules to be shown here
  
  // https://forkify-api.herokuapp.com/v2

*/
