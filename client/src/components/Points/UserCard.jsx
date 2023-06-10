import { useState, useEffect } from "react";
import * as Api from "../../services/api";

const UserCard = () => {
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    const getEmail = async () => {
      try {
        const response = await Api.get("user");
        setEmail(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getTotalPoints = async () => {
      try {
        const response = await Api.get("point");
        setTotal(response.data.point);
      } catch (error) {
        console.log(error);
      }
    };

    getEmail();
    getTotalPoints();
  }, []);

  return (
    <div className="w-full h-full p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 pb-8 text-xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white break-words">
        {email}
      </h5>
      <p className="mb-3 pb-8 lg:text-2xl font-normal text-gray-700 dark:text-gray-400">
        보유 ❤️: {total}
      </p>
    </div>
  );
};

export default UserCard;
