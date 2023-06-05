// api.js
import axios from "axios";

const backendPortNumber = "3000";
const serverUrl = `http://${window.location.hostname}:${backendPortNumber}/`;

const post = async (endpoint, data) => {
  try {
    const response = await axios.post(serverUrl + endpoint, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
      },
    });

    console.log(`%cPOST 요청: ${serverUrl + endpoint}`, "color: #296aba;");
    console.log(
      `%cPOST 요청 데이터: ${JSON.stringify(data)}`,
      "color: #296aba;"
    );
    console.log(
      `%cPOST 응답 데이터: ${JSON.stringify(response.data)}`,
      "color: #296aba;"
    );

    return response.data;
  } catch (error) {
    console.error(`POST 요청 실패: ${serverUrl + endpoint}`, error);
    throw error;
  }
};

export { post };
