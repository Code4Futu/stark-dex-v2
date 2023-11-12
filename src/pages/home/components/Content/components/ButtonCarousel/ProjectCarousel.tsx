import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { twJoin } from "tailwind-merge";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Button } from "antd";

export function ProjectCarousel({ items }: { items?: JSX.Element[] }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="!mr-6">
          <Button
            style={{
              background: "linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)",
            }}
            className="button-hover-1 flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-0 px-6 py-3"
          >
            <span className="text-base font-bold leading-normal text-[#1A1C24]">
              Buy SFN Token
            </span>
          </Button>
        </SwiperSlide>
        <SwiperSlide className="!mr-6">
          <Button className="button-linear-2 flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-0 px-6 py-3">
            <span className="text-base font-bold leading-normal text-[#1A1C24]">
              Apply for Launchpad
            </span>
          </Button>
        </SwiperSlide>
        <SwiperSlide className="!mr-6">
          <Button className="button-linear-2 flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-0 px-6 py-3">
            <span className="text-base font-bold leading-normal text-[#1A1C24]">
              Apply for Airdrop
            </span>
          </Button>
        </SwiperSlide>
        <SwiperSlide className="!mr-6">
          <Button className="button-hover-effect flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-2 border-[#F1F1F1] bg-transparent px-6 py-3">
            <span className="text-base font-bold leading-normal text-white">
              Launchpad List
            </span>
          </Button>
        </SwiperSlide>
        <SwiperSlide className="!mr-6">
          <Button className="button-hover-effect flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-2 border-[#F1F1F1] bg-transparent px-6 py-3">
            <span className="text-base font-bold leading-normal text-white">
              Airdrop list
            </span>
          </Button>
        </SwiperSlide>
        <SwiperSlide className="!mr-6">
          <Button className="button-hover-effect flex h-[43px] items-center justify-center gap-1 self-stretch rounded-xl border-2 border-[#F1F1F1] bg-transparent px-6 py-3">
            <span className="text-base font-bold leading-normal text-white">
              Your Pools
            </span>
          </Button>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
