import instance from "../utils/axios";

async function get(endpoint, params = "") {
  try {
    return await instance.get(`/${endpoint}/${params}`);
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

async function put(endpoint, data) {
  try {
    return await instance.put(`/${endpoint}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function patch(endpoint, data) {
  try {
    return await instance.patch(`/${endpoint}`, data);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function del(endpoint) {
  try {
    return await instance.delete(`/${endpoint}`);
  } catch (error) {
    return Promise.reject(error);
  }
}
export { get, post, put, patch, del };
