import Router from "./Router";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="mt-40">
        <Router />
      </div>
    </Layout>
  );
};

export default App;
