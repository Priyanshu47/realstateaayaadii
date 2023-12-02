import React from "react";
import styled from "styled-components";
import img1 from "../assets/Home/bg1.jpg";
import img2 from "../assets/Home/bg2.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const AboutIntro = () => {
  const listing = [
    {
      content: "Good Road Connectivity.",
    },
    {
      content: "Hassle- free Property Transfer",
    },
    {
      content: "High-Altitude Property",
    },
    {
      content: "Panoramic view",
    },
  ];
  return (
    <AboutIntroWrapper>
      <div className="flex flex-wrap place-content-center w-full py-20 px-5">
        <div className="w-full lg:w-1/2">
          <div className="first lg:w-full h-[450px] flex justify-center items-center">
            <div className="second w-[80%] h-[350px]"></div>
          </div>
        </div>
        <div className="w-full mt-2 lg:w-1/2 space-y-5 lg:px-10">
          <div className="flex items-center">
            <div className="h-1 rounded-full bg-color"></div>
            <h1 className="ml-3 text-center5" >
            World Of Luxury </h1>
    
          </div>
          <h3 className="lg:text-3xl text-color">
            "Your Getaway To Elevated Living".
          </h3>
          <p>
            Are you searching for the perfect blend of comfort, luxury, and
            breathtaking views? Look no further! Our exquisite properties are
            located in the heart of Kasauli, Naldehra and Dudhwa.That offers
            breathtaking views and luxurious amenities. Whether you're looking
            for a comfortable retreat or an adventuresome getaway, our property
            has something for everyone..
          </p>
          <ul>
            {listing.map((val,i) => {
              return (
                <div key={i} className="flex items-center space-x-3 py-2 ml-5">
                  <BsFillCheckCircleFill className="text-color" />
                  <li>{val.content}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </AboutIntroWrapper>
  );
};

const AboutIntroWrapper = styled.div`
@media screen and (max-width: 600px) {
 .first{
  height:250px;
      width:330px;
 }
  .second{
  height:220px;
      width:300px; 
 }
}
  .first {

    background-image: url(${img1});
    background-size: 100% 100%;
  }
  .second {
    background-image: url(${img2});
    background-size: 100% 100%;
  }
`;
