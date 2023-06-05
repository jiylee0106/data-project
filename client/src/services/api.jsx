import instance from "../utils/axios";

async function get(endpoint, params = "") {
  try {
    const response = await instance.get(`/api/${endpoint}/${params}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function post(endpoint, data) {
  try {
    const response = await instance.post(`/api/${endpoint}`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export { get, post };
