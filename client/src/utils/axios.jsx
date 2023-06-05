import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_HOST;

const getToken = () => {
  return sessionStorage.getItem("accessToken") || undefined;
};

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 4000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getToken();

    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log("404 페이지로 넘어가야 함!");
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
