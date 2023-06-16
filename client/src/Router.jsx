import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const About = lazy(() => import("./components/About/About"));
const Participate = lazy(() => import("./components/Participate/Participate"));
const Article = lazy(() => import("./components/Article/Article"));
const Data = lazy(() => import("./components/Data/Data"));
const PwChange = lazy(() => import("./components/Mypage/PwChange"));
const Points = lazy(() => import("./components/Points/Points"));
const Collection = lazy(() => import("./components/Collection/Collection"));
const Admin = lazy(() => import("./components/Admin/Admin"));

const Router = () => {
  return (
    <ErrorBoundary FallbackComponent={<div>Error...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/article" element={<Article />} />
          <Route path="/data" element={<Data />} />
          <Route path="/change-password" element={<PwChange />} />
          <Route path="/points" element={<Points />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;
