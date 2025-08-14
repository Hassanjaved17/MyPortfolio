import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const SubHeroMain = () => {
  const skills = ["Fast Learner", "Team Work", "Details Master", "Problem Solving", "Critical Thinking", "Creativity", "Time Management"];

  // Duplicate the skills so the loop looks continuous
  const slides = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey uppercase py-4 overflow-hidden">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        freeModeMomentum={false}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0} // Keep this at 0
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={true}
        className="text-lg sm:text-2xl md:text-3xl xl:text-4xl"
      >
        {slides.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto !whitespace-nowrap !flex !items-center !p-0 !m-0"
            style={{ padding: 0, margin: 0 }}
          >
            <span className="mx-10">{skill}</span>
          </SwiperSlide>))}
      </Swiper>
    </div>
  );
};

export default SubHeroMain;