import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { IndexReducer, indexState } from "./primaryReducer";
import { ValueReducer, valueState } from "./secondaryReducer";

const reducers = combineReducers({
  indexState: IndexReducer,
  valueState: ValueReducer
});
const store = createStore(reducers);

const ReactSample = ({
  value = valueState,
  index = indexState,
  onIncrement,
  onIncrementIndex,
  onDecrement,
  onDecrementIndex
}) => (
  <div>
    <h1>value : {value}</h1>

    <button onClick={onIncrement}>+ Value</button>
    <button onClick={onDecrement}>- Value</button>
    <h1>index : {index}</h1>

    <br />
    <button onClick={onIncrementIndex}>+ Index</button>
    <button onClick={onDecrementIndex}>- Index</button>
  </div>
);
const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <ReactSample
      value={store.getState().valueState.value}
      index={store.getState().indexState.index}
      onIncrement={() => store.dispatch({ type: "INCREMENTVALUE" })}
      onDecrement={() => store.dispatch({ type: "DECREMENTVALUE" })}
      onIncrementIndex={() => store.dispatch({ type: "INCREMENTINDEX" })}
      onDecrementIndex={() => store.dispatch({ type: "DECREMENTINDEX" })}
    />,
    rootElement
  );
};

store.subscribe(render);
render();
