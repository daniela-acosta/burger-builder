import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const updateLoadingTrue = (state, action) => {
  return updateObject(state, { loading: true });
};

const updateLoadingFalse = (state, action) => {
  return updateObject(state, { loading: false });
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateLoadingFalse(state, action);

    case actionTypes.PURCHASE_BURGER_START:
    case actionTypes.FETCH_ORDERS_START:
      return updateLoadingTrue(state, action);

    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
