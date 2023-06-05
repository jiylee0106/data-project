import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const LoginForm = lazy(() => import("./components/User/Loginform"));
const RegisterForm = lazy(() => import("./components/User/RegisterForm"));
const About = lazy(() => import("./components/About/About"));
const Participate = lazy(() => import("./components/Participate/Participate"));
const Article = lazy(() => import("./components/Article/Article"));
const Data = lazy(() => import("./components/Data/Data"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="/article" element={<Article />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
