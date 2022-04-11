import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/header";
import { HomePage } from "./pages/home";
import { LogIn } from "./pages/logIn";
import { News } from "./pages/news";
import { Profile } from "./pages/profile";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { isUserLogged } = useSelector(store => store?.switchReducer || { isUserLogged: false } );
  return isUserLogged ? children : <Navigate to="/login" />;
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogIn />}/>
          <Route path="news" element={<News />}/>
          <Route path="profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
