import { createLogger } from "redux-logger";
import { applyMiddleware, createStore as create } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./reviewSaga";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const logger = createLogger({
  duration: true,
  collapsed: true,
});

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [logger, sagaMiddleware];

  const store = create(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
