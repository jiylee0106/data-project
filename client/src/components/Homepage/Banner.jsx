import React, { useEffect } from "react";

const Carousel = () => {
  const slides = [
    "https://cdn.discordapp.com/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg",
    "https://cdn.discordapp.com/attachments/1114069039757676599/1114075473459302410/FxcOYbmacAA10-p.jpg",
    "https://cdn.discordapp.com/attachments/1114069039757676599/1114084929794482176/dab60569596261c385ba8e401315566e.jpg",
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000); // 4초마다 다음 슬라이드로 이동

    return () => {
      clearInterval(interval); // 컴포넌트가 unmount될 때 interval 정리
    };
  }, []); // []를 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleClick = () => {
    // 버튼 클릭 시 다른 페이지로 이동하는 로직 구현
    window.location.href = "https://example.com"; // 여기에 이동하고자 하는 페이지 URL을 입력(아직 미정)
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
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
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
  className="absolute left-1/2 transform -translate-x-1/2 bottom-10 px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer"
  onClick={handleClick}
>
  한국의 멸종 위기종 알아보기
</button>
    </div>
  );
};

export default Carousel;