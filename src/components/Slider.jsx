"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Category from "@/components/Category";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Slider() {
  const slides = [
    {
      label: "Coding",
      imageUrl: "/coding.png",
      slug: "/",
    },
    {
      label: "Web Development",
      imageUrl: "/web_development.png",
      slug: "/",
    },
    {
      label: "Life Style",
      imageUrl: "/life_style.png",
      slug: "/",
    },
    {
      label: "Technology",
      imageUrl: "/technology.png",
      slug: "/",
    },
    {
      label: "Travel",
      imageUrl: "/travel.png",
      slug: "/",
    },
    {
      label: "Fashion",
      imageUrl: "/fashion.jpg",
      slug: "/",
    },
  ];

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      scrollbar={{ draggable: true }}
      modules={[Autoplay]}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="!w-[250px]">
            <Category
              label={slide.label}
              imageUrl={slide.imageUrl}
              slug={slide.slug}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
