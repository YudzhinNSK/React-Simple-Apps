import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { HomePage } from "./pages/home";
import { LogIn } from "./pages/logIn";
import { News } from "./pages/news";
import { Profile } from "./pages/profile";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LogIn />}/>
          <Route path="news" element={<News />}/>
          <Route path="profile" element={<Profile />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
