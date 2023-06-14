import { useReducer, useEffect, Suspense, lazy } from "react";
import { GlobalContext } from "./store/Context";
import Router from "./Router";
import Layout from "./components/Layout/Layout";
import { initialState, reducer } from "./store/store";
import { getApi } from "./services/api";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";

const LoginForm = lazy(() => import("./components/User/Loginform"));
const RegisterForm = lazy(() => import("./components/User/RegisterForm"));

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
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Layout>
        <div className="mt-40 mb-20 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
          <Router />
        </div>
        <ErrorBoundary FallbackComponent={<div>Error...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </GlobalContext.Provider>
  );
};

export default App;
