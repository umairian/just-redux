const { createStore } = require("redux");

const reducerFunction = (oldState = { counter: 0, message: null }, action) => {
  if (action.type === "increment") {
    return { ...oldState, counter: oldState.counter + 1 };
  } else if (action.type === "decrement") {
    return { ...oldState, counter: counter - 1 };
  }
  return oldState;
};

const store = createStore(reducerFunction);

console.log(store.getState());

const pullStoreData = () => {
  const storeData = store.getState();
  console.log(storeData);
};

store.subscribe(pullStoreData);

store.dispatch({ type: "increment" });
