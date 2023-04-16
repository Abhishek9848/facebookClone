import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>
      </Routes>
    </div>
  )

}

export default App;
