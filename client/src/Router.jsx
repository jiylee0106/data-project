import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Homepage from "./components/Homepage/Homepage";
import LoginForm from "./components/User/Loginform";
import RegisterForm from "./components/User/RegisterForm";
import Footer from "./components/Layout/Footer";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
