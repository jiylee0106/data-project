import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default Router;


