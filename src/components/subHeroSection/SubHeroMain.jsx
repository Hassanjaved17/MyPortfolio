import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const SubHeroMain = () => {
  const skills = ["Fast Learner", "Team Work", "Details Master", "Problem Solving"];

  // Duplicate array so loop looks smooth
  const slides = [...skills, ...skills, ...skills];

  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey uppercase py-2">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        freeModeMomentum={false}
        loop={true}
        slidesPerView="auto"
        spaceBetween={40}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} // lower = faster
        className="xl:text-4xl md:text-2xl sm:text-4xl"
      >
        {slides.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-auto px-8 whitespace-nowrap"
          >
            {skill}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SubHeroMain;
