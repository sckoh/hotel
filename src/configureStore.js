import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics";
import rootReducer from "./ducks";

const epicMiddleware = createEpicMiddleware();
let middleware = [epicMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require("redux-logger");
  middleware = [...middleware, createLogger()];
}

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  epicMiddleware.run(rootEpic);
  return store;
};

export default configureStore;
