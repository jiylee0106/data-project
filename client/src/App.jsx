import Router from "./Router";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <Router />
      </div>
    </Layout>
  );
};

export default App;
