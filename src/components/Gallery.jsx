import React, { useState } from "react";
import Card1 from "../assets/Home/bg1.jpg";
import Card2 from "../assets/Home/bg2.jpg";
import Card3 from "../assets/Home/bg3.jpg";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const [show, setShow] = useState(4);

  const showMore = () => {
    setShow(show + 4);
  };
  const data = [
    {
      image: Card1,
      title: "Nature Walks and Hikes",
      read: "",
    },
    {
      image: Card2,
      title: "Outdoor Dining",
      read: "",
    },
    {
      image: Card3,
      title: "Photography",
      read: "",
    },
    {
      image: Card3,
      title: "Wellness Retreats",
      read: "",
    },
    {
      image: Card3,
      title: "Bird Watching",
      read: "",
    },
    {
      image: Card3,
      title: "Picnics",
      read: "",
    },
    {
      image: Card3,
      title: "Adventure Sports",
      read: "",
    },
    {
      image: Card3,
      title: "Scenic Drive",
      read: "",
    },
  ];

  return (
    <div className="container my-28 mx-auto px-4 md:px-12">
      <div className="pb-5 text-center text-color font-bold">
        <h3></h3>
        <h3 className="lg:px-60 text-2xl">
          Explore And Relish The Finest Activities From Aranya Villas And
          Cottages
        </h3>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {data.slice(0, show).map((val, index) => {
          return (
            <>
              <div className="my-6 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <div className="absolute py-52 z-50 cursor-pointer">
                  <div className="px-5 text-center">
                    <h1 className="text-lg text-white">{val.title}</h1>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg brightness-50">
                  <Link to="">
                    <img
                      alt="Placeholder"
                      className="block h-64 w-full "
                      src={val.image}
                    />
                  </Link>
                </div>
              </div>
            </>
          );
        })}

        {/* <!-- END Column --> */}
      </div>
      <div className="flex justify-center text-white">
        <button onClick={showMore} className="bg-color p-2 border-0">
          Show More
        </button>
      </div>
    </div>
  );
};
