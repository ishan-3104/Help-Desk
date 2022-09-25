import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//components
import StudentSignin from "./components/SigninForms/StudentSignin/StudentSignin";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/LoginForm/Login";
import Complaint from "../src/components/Complaint";

//routing imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import ProfileProtectedRoute from "./components/Profile/ProfileProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signin" element={<Login />}></Route>
          <Route exact path="/signup" element={<StudentSignin />}></Route>
          <Route exact path="/complaint" element={<Complaint />}></Route>
          <Route
            exact
            path="/profile"
            element={
              <>
                <ProfileProtectedRoute>
                  <Profile />
                </ProfileProtectedRoute>
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
