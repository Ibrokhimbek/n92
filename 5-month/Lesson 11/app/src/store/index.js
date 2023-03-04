import { createStore, combineReducers } from "redux";
import { CounterReducer } from "./reducers/CounterReducer";

const reducers = combineReducers({
  counter: CounterReducer,
});

const store = createStore(reducers);

export { store };
