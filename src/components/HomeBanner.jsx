import React from "react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
// import "swiper/css/zoom";
import { styled } from "styled-components";
import banner1 from "../assets/Home/bg1.jpg";
import banner2 from "../assets/Home/bg2.jpg";
import banner3 from "../assets/Home/bg3.jpg";
import { Link } from "react-router-dom";

export const HomeBanner = () => {
  const data = [
    {
      image: banner1,
      title: "WELCOME TO THE ARANYA VILLAS",
      descript:
        "Breathe,Explore & Rejuvenate - Embrace The Majesty Of Mountain Living ",
    },
    {
      image: banner2,
      title: "Discover The Elegance Of Your Dream Home",
      descript: "Where Elegance End Comfort Meet",
    },
    {
      image: banner3,
      title: "Create Memories At Altitude - Your Paradise Legacy Starts Here",
      descript:
        "A Chance To Create Lasting Memories In A Beautiful And Peaceful Mountain Range",
    },
  ];
  return (

    <BannerWrapper>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        zoom={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
        className=" w-full h-72 lg:h-[500px] md:h-[500px] sm:h-[100px]  bg-cover"
        effect="fade"
      >
        {data === undefined ? (
          <Spinner />
        ) : (
          data.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="">
                  <article className="text-white w-2/3 text-sm justify-center leading-1 items-center text-center">
                    <h1 className="lg:text-4xl leading-3 font-bold">{val.title}</h1>
                    <p className="lg:text-[16px] ">{val.descript}</p>
                  </article>
                  <div className="banner-image">
                    <img
                      src={val.image}
                      className="lg:h-[600px] w-full"
                      alt=""
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>

      {/* <div className="banner">
        <div className="row">
          <div className="banner_heading space-y-4">
            <h1 className="text-5xl">WELCOME TO THE ARANYA VILLAS</h1>
            <h1> </h1>
            <p>
              Breathe ,Explore & Rejuvenate - Embrace The Majesty Of
              MountainLiving .
            </p>
          </div>
        </div>
      </div> */}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
.banner-image img{
  background-size: 100% 100%;
  filter: brightness(60%);
}
  .swiper {
    .swiper-slide {
      // position: relative;
      // // height: 100vh;
      // background-size: 100% 100%;
      // img {
      //   width: 100%;
      //   height: auto;
      // background-size: 100% 100%;
    
       }
      article {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 10;
        h1 {
          line-height: 2.2rem;
          margin-bottom: 1rem;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      border: 1px solid var(--whiteColor);
      padding: 2.5rem 1.3rem;
      background: transparent;  
      border-radius: 5px;
      transition: all 0.5s ease;
      color: #bf9b30;
      top: 45%;
      &:hover {
        background: var(--primaryColor);
        color: var(--whiteColor);
      }
    }
  }
`;
