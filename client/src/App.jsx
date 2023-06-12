import { useReducer } from "react";
import { globalContext } from "./store/context";
import Router from "./Router";
import Layout from "./components/Layout/Layout";
import { initialState, reducer } from "./store/store";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Layout>
      <globalContext.Provider value={{ state, dispatch }}>
        <div className="my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
          <Router />
        </div>
      </globalContext.Provider>
    </Layout>
  );
};

export default App;
