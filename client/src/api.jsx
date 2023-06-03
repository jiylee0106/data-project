import axios from "axios";

const post = async (endpoint, data) => {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${endpoint}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axios.post(endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
};

export { post };
