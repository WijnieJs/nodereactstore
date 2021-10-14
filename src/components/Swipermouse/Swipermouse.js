/* eslint-disable no-restricted-globals */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/mousewheel/mousewheel.scss";
 // import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";

 
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Swipermouse = (props) => {
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        direction="vertical"
        spaceBetween={0}
        speed={790}
        sensitivity={12}
        mousewheel={true}
        onSlideChange={(swiper) => props.setIndexback(swiper.activeIndex)}
        // ={(swiper) => setActiveIndex(swiper.activeIndex.toString())}
        // onSwiper={(swiper) => console.log("")}
        // scrollbar={{ draggable: true }}
        // pagination={{ clickable: true }}
        style={{ height: "100vh",width: "100%", marginTop: "0px" }}
      >
        <SwiperSlide className="slide_item">
             
        </SwiperSlide>
        {/* <SwiperSlide className="slide_item three">           
        
         <Slidesmain imagewatch={woman} contain/>
</SwiperSlide> */}
        <SwiperSlide className="slide_item ">
         
        </SwiperSlide>

        <SwiperSlide className="slide_item ">
          
        </SwiperSlide>
        <SwiperSlide className="slide_item ">
      
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Swipermouse;
