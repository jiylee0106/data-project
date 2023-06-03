import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Homepage from "./components/Homepage/Homepage";
import LoginForm from "./components/User/Loginform";
import RegisterForm from "./components/User/RegisterForm";
import About from "./components/About/About";
import Participate from "./components/Participate/Participate";
import Data from "./components/Data/Data";
import Footer from "./components/Layout/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Header />}
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/articipate" exact element={<Participate />} />
          <Route path="/data" exact element={<Data />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
