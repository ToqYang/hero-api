import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { SuperHero } from "../interfaces/superheroes";
import { heroesRed } from '../reducers/heroesRed';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

interface TeamHeroes {
	teamHeroes: SuperHero[];
}

export interface RootState {
	heroesRed: TeamHeroes
}


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({heroesRed});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);