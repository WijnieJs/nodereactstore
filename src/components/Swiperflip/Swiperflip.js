import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,  EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
 import Avatar from "../Image/Avatar"
import e from "../../static/images/e.jpg";
import www1 from "../../static/images/www1.jpg";
import ww from "../../static/images/ww.jpg";
import w from "../../static/images/w.jpg";
import b from "../../static/images/b.webp" 
    

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]);

const Swiperflip = () => {
  return (
    <Swiper 
       effect= 'coverflow'
      spaceBetween={0}
     
        mousewheel= {true}
        centeredSlides={true}
         slidesPerView="auto"
        grabCursor={true}
        autoplay={{delay: 1200, disableOnInteraction: false}}
           pagination={{ clickable: true }}

    >
      <SwiperSlide className="swipe_item_a">
        <Avatar imageUrl={e}/>

      </SwiperSlide> 
      <SwiperSlide className="swipe_item_b">
         <Avatar imageUrl={ww}/>
      </SwiperSlide>
      <SwiperSlide className="swipe_item_c">
         <Avatar imageUrl={w}/>
      </SwiperSlide>
      <SwiperSlide className="swipe_item_d">
         <Avatar imageUrl={www1}/>
      </SwiperSlide>
      <SwiperSlide className="swipe_item_e">
         <Avatar imageUrl={b}/>
      </SwiperSlide>

      <SwiperSlide className="swipe_item_f"> 
      <Avatar imageUrl={e}/>
      </SwiperSlide>

      <SwiperSlide className="swipe_item_ff">Slide 7</SwiperSlide>

      ...
    </Swiper>
  );
};

export default Swiperflip