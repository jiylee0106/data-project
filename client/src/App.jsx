import { useReducer, useEffect } from "react";
import { globalContext } from "./store/context";
import Router from "./Router";
import Layout from "./components/Layout/Layout";
import { initialState, reducer } from "./store/store";
import { getApi } from "./services/api";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const isToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (isToken) {
      dispatch({ type: "ISLOGGEDIN", value: true });
    }
  }, [isToken]);
  useEffect(() => {
    const getDailyLogs = async () => {
      if (localStorage.getItem("accessToken")) {
        try {
          const response = await getApi("point/daily-events");
          dispatch({ type: "DAILYLOGS", value: response.data.logs });
        } catch (error) {
          alert(error.response.data.message);
        }
      }
    };

    getDailyLogs();
  }, [state.point.status, state.quizStatus]);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <Layout>
        <div className="mt-40 mb-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
          <Router />
        </div>
      </Layout>
    </globalContext.Provider>
  );
};

export default App;
