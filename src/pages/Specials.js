// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Specials = () => {
  return (
    <div className="wrapinswiper">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1602752975366-5520991f958d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="watch"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1518639845127-064c4bd0c574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
              alt="watch"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1562537218-26057ef20502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt="watch"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="https://images.unsplash.com/photo-1602752975366-5520991f958d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="watch"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
      <div className="special-svg"></div>
    </div>
  );
};
export default Specials;
