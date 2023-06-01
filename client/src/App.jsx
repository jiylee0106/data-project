import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Layout/Header";
import Banner from "./components/Homepage/Banner";
import NewsArticle from "./components/Homepage/News/NewsArticle";
import Card from "./components/Card";
import Footer from "./components/Layout/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
        <Banner />
        <NewsArticle />
        <Card />
        <Footer/>
      </Router>
    </>
  );
};

export default App;
