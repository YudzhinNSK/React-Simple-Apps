import {createStore, compose} from "redux";
import reducer from "./reducers";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(),
)

const store = configureStore({
  url: "/",
  isUserLogged: localStorage.getItem("isUserLogged") ? JSON.parse(localStorage.getItem("isUserLogged")).isLogged : false,
  userData: {
    name: "Evgeny",
    surname: "Gustomyasov"
  },
  news: {},
});

export default store;