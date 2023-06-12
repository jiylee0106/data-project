import Router from "./Router";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="my-20">
        <Router />
      </div>
    </Layout>
  );
};

export default App;
