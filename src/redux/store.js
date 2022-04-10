import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({
  url: "/",
  isUserLogged: localStorage.getItem("isUserLogged") ? JSON.parse(localStorage.getItem("isUserLogged")).isLogged : false,
  user:{},
  news: {},
});

sagaMiddleware.run(rootSaga)

export default store;