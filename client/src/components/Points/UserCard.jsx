import { useState, useEffect, useContext } from "react";
import { getApi } from "../../services/api";

import Heart from "./Heart";
import { GlobalContext } from "../../store/Context";

const UserCard = () => {
  const context = useContext(GlobalContext);
  const user = context.state.userInfo;
  const [total, setTotal] = useState("");

  useEffect(() => {
    const getEmail = async () => {
      try {
        const response = await getApi("user");
        console.log(response);
        context.dispatch({
          type: "USER",
          name: "email",
          value: response.data.email,
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    const getTotalPoints = async () => {
      try {
        const response = await getApi("point");
        setTotal(response.data.point);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    getEmail();
    getTotalPoints();
  }, []);

  return (
    <div className="w-full h-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 pb-8 text-xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
        {user.email}
      </h5>
      <p className="flex items-center mb-3 pb-8 lg:text-2xl font-normal text-gray-700 dark:text-gray-400">
        보유
        <Heart />: {total}
      </p>
    </div>
  );
};

export default UserCard;
