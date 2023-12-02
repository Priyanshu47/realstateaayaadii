import React, { useRef, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Footer = () => {
  const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;
  const TEMPLATE_KEY = import.meta.env.VITE_TEMPLATE_KEY;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();
  const [errors, setErrors] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleForm = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // email integration
  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      // setErrors("All fields are mondatory!");
      toast.error("All fields are required!");
    } else {
      emailjs
        .sendForm(
          `${SERVICE_KEY}`,
          `${TEMPLATE_KEY}`,
          form.current,
          `${PUBLIC_KEY}`
        )

        .then(
          (result) => {
            setErrors("");
            toast.success("Your response recorded!");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      // e.target.reset();
    }
  };

  return (
    <>
      <div className="bg-slate-950 w-full container md:px-12  flex flex-wrap">
        <div className="lg:p-20 p-8 flex flex-wrap mx-auto ">
          <div className="flex flex-wrap w-full lg:w-2/3 ">
            <div className=" pt-20 p-1 text-white text-lg pb-5 ">
              <p>
                Ready to take the next step and buy your villa ? Reach out to us
                using this contact form , and one of our dedicated agents will
                get in touch with you shortly.We are here to make the process
                seamless, transparent, and profitable for you. Our dedicated
                team of real estate experts specializes in villa sales, and we
                take pride in our ability to deliver exceptional results for our
                clients.:
              </p>
            </div>
            {/* <FaFacebookF /> */}
            <h3 className="text-white w-full pt-10 text-2xl">Follow Us :</h3>
            <div className="flex items-center pt-10 space-x-5 text-center">
              <div>
                <Link to="https://www.facebook.com/aayaadi.india">
                  <FaFacebookF className="text-white text-2xl" />
                </Link>
              </div>
              <div>
                <Link to="https://www.instagram.com/aayaadi.india/">
                  <BsInstagram className="text-white text-2xl" />
                </Link>
              </div>
              <div>
                <Link to="https://twitter.com/aayaadi_india">
                  <BsTwitter className="text-white text-2xl" />
                </Link>
              </div>

              <div>
                <Link to="https://www.linkedin.com/company/aayaadi/about/">
                  <FaLinkedin className="text-white text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-1/3 text-white text-center flex flex-col px-auto ">
            <h3 className="w-full pt-10">Get in Touch!</h3>
            <form
            ref={form}>
              <input className="p-[10px] my-2 rounded-lg w-72"
                type="text"
                onChange={handleForm}
                autoComplete="off"
                name="name"
                placeholder="Enter name"
              />
              <input className="p-[10px] my-2 rounded-lg w-72"
                type="email"
                onChange={handleForm}
                autoComplete="off"
                name="email"
                placeholder="Enter email"
              />
              <textarea className="p-[10px] my-2 rounded-lg w-72"
                id=""
                cols="30"
                rows="0"
                onChange={handleForm}
                name="message"
                autoComplete="off"
                placeholder="Write message"
              ></textarea>
              <button  className="p-[10px] my-2 bg-yellow-700 rounded-lg w-72" onClick={sendEmail}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h2>
          © 2022 by Aayaadi&nbsp;
          <Link className="" to="/privacy-policy">
            . Privacy Policy .
          </Link>
          &nbsp;Support
        </h2>
      </div>
    </>
  );
};
