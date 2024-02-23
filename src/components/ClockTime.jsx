import { Swiper, SwiperSlide } from "swiper/react";
import { Controller,Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function ClockInfo({time,text}){
    return(
        <div className="clock-avg">
            <div style={{fontSize: "1.5em", color:"#007ee5", fontWeight: "900"}}>{time}</div>
            <div style={{fontWeight: "500"}}>{text} </div>
        </div>
    )
}

function ClockTime() {
  return (
    <div className="clock-time-div">
      <Swiper
       navigation={true} modules={[Navigation]} className="mySwiper"
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
      >
        <SwiperSlide>
            <ClockInfo time={"00:30"} text={"Average Working hour"} />
        </SwiperSlide>
        <SwiperSlide>
            <ClockInfo time={"00:30"} text={"Average Working hour"} />
        </SwiperSlide>
        <SwiperSlide>
            <ClockInfo time={"00:30"} text={"Average Working hour"} />
        </SwiperSlide>
        <SwiperSlide>
            <ClockInfo time={"00:30"} text={"Average Working hour"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClockTime;
