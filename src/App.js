import "./styles/App.css";
import Header from "./components/header";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { NotfoundPage } from "./pages/notFoundPage";
import { LoginPage } from "./pages/login";
import { SignInPage } from "./pages/signIn";

import { RequireAuth } from "./hoc/requireAuth";
import { ChangePassword } from "./pages/changePassword";
import { AuthProvider } from "./hoc/authProvider";

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signIn" element={<SignInPage />} />
            <Route path="changePassword" element={
              <RequireAuth>
                <ChangePassword />
              </RequireAuth>
            } />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
