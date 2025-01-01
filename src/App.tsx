import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/pages/LandingPage.tsx";
import { SignIn } from "./components/pages/SignIn.tsx";
import { SignUp } from "./components/pages/SignUp.tsx";
import Dashboard from "./components/pages/Dashboard.tsx";
import ProtectedRoute from "./components/routeType/ProtectedRoute.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
