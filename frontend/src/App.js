import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import LoggedOutRoutes from "./routes/LoggedOutRoutes";
import NotVerified from "./pages/notVerified";
import ResendVerificationMail from "./pages/resend verification mail";
import ActivateAccount from "./pages/activate account";
import CreatePostPopup from "./components/createPostPopup";

function App() {
  return (
    <div>
      <CreatePostPopup />
      <Routes>
        <Route element={<LoggedOutRoutes />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/not-verified" element={<NotVerified />} exact />
          <Route path="/resend-activation-link" element={<ResendVerificationMail />} exact />
          <Route path="/activate/:token" element={<ActivateAccount />} exact />
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
