import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { HomePage } from "./pages/home";
import { useDispatch } from "react-redux";
import { isUserLogged } from "./redux/actions/actionCreator";

const App = () => {
  const dispatch = useDispatch()
  console.log(dispatch(isUserLogged()));
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" />
          <Route path="news" />
          <Route path="profile" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
