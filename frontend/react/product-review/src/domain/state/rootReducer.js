import { combineReducers } from "redux";
import { groupByReducer } from "./groupingReducer";
import { reviewsReducer } from "./reviewsReducer";

const reducers = {
  reviews: reviewsReducer,
  groupBy: groupByReducer,
};

export const rootReducer = combineReducers(reducers);
