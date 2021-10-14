/* eslint-disable no-restricted-globals */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Avatar from "../Image/Avatar"
// import "swiper/components/mousewheel/mousewheel.scss";
 // import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
 Virtual 

} from "swiper";

  
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Virtual]);

const Productslider = (props) => {
 
  return (
    <main>
      <Swiper
      spaceBetween={50}
     
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      virtual
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => props.setImgHd(swiper.activeIndex)}  
      className="productSlideWrapper"
      >
        {props.images.map((img, index) => (
           <SwiperSlide key={img}  virtualIndex={index}  className="productSlideItem">
             <Avatar imageUrl={img} />
           </SwiperSlide>
        ))} 
         {/* <SwiperSlide className="productSlideItem">
           <Image imageUrl={`${ props.images[0]}`} />
         </SwiperSlide>
      <SwiperSlide className="productSlideItem">Slide 2</SwiperSlide>
      <SwiperSlide className="productSlideItem">Slide 3</SwiperSlide>
      <SwiperSlide className="productSlideItem">Slide 4</SwiperSlide> */}
      </Swiper>
    </main>
  );
};

export default Productslider;
