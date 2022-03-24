import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from 'redux-saga';
import giftReducer from "../reducers/gift-reducers";
import loginReducer from "../reducers/login-reducers";
import userReducer from "../reducers/user-reducers";
import giftSaga from "../sagas/gift-sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    gift: giftReducer,
    user: userReducer
  });

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(compose(applyMiddleware(sagaMiddleware, routerMiddleware(history))))
);

sagaMiddleware.run(giftSaga);