import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const excludedPaths = ["/login", "/register"];
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    if (excludedPaths.includes(currentPath)) {
      return children;
    } else {
      return (
        <>
          <Header />
          {children}
          <Footer />
        </>
      );
    }
  };

  return <>{renderContent()}</>;
};

export default Layout;
