import axios from "../../axios-orders";

import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const fecthIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        dispatch(fecthIngredientsFailed());
      });
  };
};
