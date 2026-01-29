/**
 * Author: Noel Regis
 * GitHub: https://github.com/noelregis718
 */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookmarkReducer from "./redux/features/bookmark";

// Helper to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("bookmarkState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

// Helper to save state to localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("bookmarkState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState() as any,
});

// Subscribe to store changes to persist state
store.subscribe(() => {
  saveState({
    bookmark: store.getState().bookmark,
  });
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
