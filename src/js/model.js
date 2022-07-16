import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helper.js';

// The initial value of the state object
export const state = {
  recipe: {},
};

// Loading the recipe after getting it from the server
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    // Updating the state object with the new recipe we got from the server
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    // console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

// Implementing the search functionality

export const loadSearchResults = async function (query) {
  try {
    const data = await getJSON(`${API_URL}/recipes?search=pizza`);
  } catch (err) {
    throw err;
  }
};
