import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { putApi } from "../../services/api";
import { GlobalContext } from "../../store/Context";

const slides = [
  "images/animal_banner.jpg",
  "https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg",
  "https://cdn.discordapp.com/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg",
];

const Banner = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const [participateStatus, setParticipateStatus] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const context = useContext(GlobalContext);
  const logs = context.state.dailyEventsLog;
  const status = context.state.dataStatus;
  const pointStatus = context.state.point.status;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    logs.forEach((item) => {
      if (item.method === "Watched_Data") {
        context.dispatch({ type: "DATA", status: true });
      }
    });
  }, [logs, pointStatus]);

  const handleComplete = async () => {
    navigate("/data");
    if (isLoggedIn) {
      try {
        if (status) return;
        await putApi("point", {
          action_type: "Earned",
          method: "Watched_Data",
        });

        context.dispatch({
          type: "POINT",
          name: "status",
          value: !pointStatus,
        });

        setParticipateStatus(participateStatus + 1);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      id="default-carousel"
      className="text-lg mt-40 relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-0 pb-[30%] overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              activeSlide === index ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover object-center"
              alt="..."
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-white" : ""
            }`}
            aria-current={activeSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute left-1/2 transform -translate-x-1/2 bottom-10 px-4 py-2 text-white bg-teal-500 rounded-md cursor-pointer"
        onClick={handleComplete}
      >
        {status ? "자료 확인하러 가기" : "한국의 멸종위기종 알아보기"}
      </button>
    </div>
  );
};

export default Banner;
