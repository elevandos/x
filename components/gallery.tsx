"use client";
import Image from "next/image";
import Boyner1 from "@/public/gallery/festival-modasi-1.jpg";
import Boyner2 from "@/public/gallery/festival-modasi-2.jpg";
import Boyner3 from "@/public/gallery/festival-modasi-3.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <>
      <div className="">
        <Swiper
          loop={true}
          spaceBetween={30}
          breakpoints={{
            1280: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: "100%", minWidth: "300px" }}>
            <Image
              className="object-contain"
              style={{ objectFit: "fill" }}
              alt="Boyner Dynamic Fest"
              src={Boyner1}
            />
          </SwiperSlide>
                    <SwiperSlide style={{ width: "100%", minWidth: "300px" }}>
            <Image
              className="object-contain"
              style={{ objectFit: "fill" }}
              alt="Boyner Dynamic Fest"
              src={Boyner2}
            />
          </SwiperSlide>
                    <SwiperSlide style={{ width: "100%", minWidth: "300px" }}>
            <Image
              className="object-contain"
              style={{ objectFit: "fill" }}
              alt="Boyner Dynamic Fest"
              src={Boyner3}
            />
          </SwiperSlide>
           </Swiper>
      </div>
    </>
  );
};

export default Gallery;
