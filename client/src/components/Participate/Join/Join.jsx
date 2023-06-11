import { useEffect, useState } from "react";
import JoinDescr from "./JoinDescr";
import JoinImage from "./JoinImage";
import { getApi } from "../../../services/api";

const joinData = {
  title: "자가용 대신 대중교통이용",
  description:
    "자가용 대신 대중교통을 이용하면 연간 17.4그루의 소나무를 지구에 심는 효과를 낼 수 있어요!승용차 1대당 1년에 약 2톤의 CO2를 배출합니다. 현재 국내에 약 2,500만대 이상의 자동차가 등록되어 있다고 하니,가히 천문학적인 수치의 온실가스를 마구 배출하고 있는 셈이죠. 우리에겐 전기차라는 훌륭한 대안이 있지만,당장 바꾸기가 어렵다면 대중교통이라는 선택지가 있어요!버스는 자가용에서 배출되는 온실가스의 양의 1/3배,지하철은 1/8배까지 줄일 수 있죠.더이상 나중으로 미루지 말고, 바로 오늘부터 실천해보는 건 어떨까요.",
};

const Join = () => {
  const [joinLogs, setJoinLogs] = useState([]);
  const [joinStatus, setJoinStatus] = useState(false);

  const [participateStatus, setParticipateStatus] = useState(0);

  useEffect(() => {
    getJoinLogs();
  }, [participateStatus]);

  useEffect(() => {
    joinLogs.forEach((item) => {
      if (item.method === "Participation") {
        setJoinStatus(true);
      }
    });
  }, [joinLogs]);

  const getJoinLogs = async () => {
    try {
      const response = await getApi("point/daily-events");
      console.log(response);
      setJoinLogs(response.data.logs);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="p-10 bg-white flex flex-col lg:flex-row">
      <div className="w-full p-6 lg:w-1/2 justify-items-center ">
        <JoinImage />
      </div>

      <div className="w-full p-6 lg:w-1/2">
        <JoinDescr
          participateStatus={participateStatus}
          setParticipateStatus={setParticipateStatus}
          status={joinStatus}
          title={joinData.title}
          description={joinData.description}
        />
      </div>
    </div>
  );
};

export default Join;
