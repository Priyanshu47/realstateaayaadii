import React from "react";
import Card1 from "../assets/Home/bg1.jpg";
import Card2 from "../assets/Home/bg2.jpg";
import Card3 from "../assets/Home/bg3.jpg";
import { Link } from "react-router-dom";

export const DescriptionCard = () => {
  const data = [
    {
      image: Card1,
      title: "KASAULI",
      description:
        "Discover the allure of Kasauli Hills through our exceptional collection of cottages ,that exudes elegance and offers breathtaking views of the majestic mountains.",
      read: "",
    },
    {
      image: Card2,
      title: "DUDHWA",
      description:
        "Nestled in the heart of the Dudhwa valley lies a stunning villa that offers the perfect blend of tranquility and luxury. Aranya villas  are more than just a home - it’s a gateway to a harmonious lifestyle .",
      read: "",
    },
    {
      image: Card3,
      title: "NALDEHRA",
      description:
        "Experience the ultimate luxury living in the picturesque hills of Naldehra, surrounded by Himalayan peaks and lush forests. Welcome home to your own piece of paradise where you can unwind, relax, and escape from the hustle and bustle of city life.",
      read: "",
    },
  ];
  return (
    <>
      <div className="container my-16 mx-auto px-4 md:px-12">
        <div className="pb-5 flex text-3xl text-color font-bold justify-center">
          <h3>Our Projects</h3>
        </div>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {data.map((val, index) => {
            return (
              <>
                <div className="my-6 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                      <img
                        alt="Placeholder"
                        className="block h-64 w-full "
                        src={val.image}
                      />
                    </a>

                    <header className="leading-tight h-40 p-2 md:p-4">
                      <h1 className="text-[20px] font-bold text-color ">
                        {val.title}
                      </h1>
                      <h3 className="text-md">
                        <a
                          className="no-underline hover:underline text-black"
                          href="#"
                        >
                          {val.description}
                        </a>
                      </h3>
                      {/* <p className="text-grey-darker text-sm">
                            11/1/19
                        </p> */}
                    </header>

                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a
                        className="flex items-center no-underline hover:underline text-black"
                        href="#"
                      >
                        {/* <p className="ml-2 text-sm">
                                Author Name
                            </p> */}
                      </a>
                      <Link
                        to={val.read}
                        className="no-underline text-color hover:text-red-dark"
                        href="#"
                      >
                        Read More
                      </Link>
                    </footer>
                  </article>
                </div>
              </>
            );
          })}

          {/* <!-- END Column --> */}
        </div>
      </div>
    </>
  );
};
