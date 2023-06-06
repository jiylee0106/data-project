import instance from "../utils/axios";

async function get(endpoint, params = "") {
  try {
    const response = await instance.get(`/${endpoint}/${params}`);
    console.log(response);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function post(endpoint, data) {
  try {
    return await instance.post(`/${endpoint}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
}

export { get, post };
