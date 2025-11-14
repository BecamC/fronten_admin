import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useToken } from "./contexts/TokenContext";
import "./styles/App.css";

function App() {
  const { token } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" replace /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
