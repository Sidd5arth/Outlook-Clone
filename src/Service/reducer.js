// src/reducers/reducer.js
import { combineReducers } from "redux";
import {
  ADD_EMAIL,
  DELETE_FAVORITE,
  ADD_FAVORITE,
  ADD_TO_READ,
  MOVE_TO_UNREAD,
} from "./action";

const initialFavoritesState = [];
export function favoritesReducer(state = initialFavoritesState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      const isDuplicate = state.some((item) => item.id === action.payload.id);

      if (!isDuplicate) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case DELETE_FAVORITE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const initialReadListState = [];
export function readListReducer(state = initialReadListState, action) {
  switch (action.type) {
    case ADD_TO_READ:
      const existingReadIndex = state.findIndex(
        (read) => read.id === action.payload.id
      );
      if (existingReadIndex !== -1) {
        const updatedReadList = [...state];
        updatedReadList[existingReadIndex] = action.payload;
        return updatedReadList;
      } else {
        return [...state, action.payload];
      }
    case MOVE_TO_UNREAD:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const initialEmailListState = [];
export function emailListReducer(state = initialEmailListState, action) {
  switch (action.type) {
    case ADD_EMAIL:
      const existingEmailIndex = state.findIndex(
        (email) => email.id === action.payload.id
      );

      if (existingEmailIndex !== -1) {
        const updatedEmailList = [...state];
        updatedEmailList[existingEmailIndex] = action.payload;
        return updatedEmailList;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favoritesList: favoritesReducer,
  readList: readListReducer,
  emailList: emailListReducer,
});

export default rootReducer;
