import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Collection from "./components/Collection/Collection";
import Admin from "./components/Admin/Admin";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const LoginForm = lazy(() => import("./components/User/Loginform"));
const RegisterForm = lazy(() => import("./components/User/RegisterForm"));
const About = lazy(() => import("./components/About/About"));
const Participate = lazy(() => import("./components/Participate/Participate"));
const Article = lazy(() => import("./components/Article/Article"));
const Data = lazy(() => import("./components/Data/Data"));
const PwChange = lazy(() => import("./components/Mypage/PwChange"));
const Points = lazy(() => import("./components/Points/Points"));

const Router = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/article" element={<Article />} />
            <Route path="/data" element={<Data />} />
            <Route path="/change-password" element={<PwChange />} />
            <Route path="/points" element={<Points />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
};

export default Router;
