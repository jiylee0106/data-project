import Router from "./Router";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-10 md:px-20 lg:px-40">
        <Router />
      </div>
    </Layout>
  );
};

export default App;
