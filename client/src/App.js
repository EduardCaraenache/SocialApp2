import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import Videos from "./pages/videos/Videos";
import Groups from "./pages/groups/Groups";
import Saved from "./pages/saved/Saved";
import Faq from "./pages/faq/Faq";
import Jobs from "./pages/jobs/Jobs";
import Events from "./pages/events/Events";
import Courses from "./pages/courses/Courses";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// Switch a fosr schimbat cu Routes
//Asta e BUN NOUimport { Person } from "@mui/icons-material";
//inainte era alt FROM import { Person } from "@material-ui/icons";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        ></Route>
        <Route
          path="/messenger"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        ></Route>
        <Route
          path="/videos"
          element={!user ? <Navigate to="/" /> : <Videos />}
        ></Route>
        <Route
          path="/groups"
          element={!user ? <Navigate to="/" /> : <Groups />}
        ></Route>
        <Route
          path="/saved"
          element={!user ? <Navigate to="/" /> : <Saved />}
        ></Route>
        <Route
          path="/faq"
          element={!user ? <Navigate to="/" /> : <Faq />}
        ></Route>
        <Route
          path="/jobs"
          element={!user ? <Navigate to="/" /> : <Jobs />}
        ></Route>
        <Route
          path="/events"
          element={!user ? <Navigate to="/" /> : <Events />}
        ></Route>
        <Route
          path="/courses"
          element={!user ? <Navigate to="/" /> : <Courses />}
        ></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
