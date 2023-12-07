import Image from "next/image";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import comment from "@/assets/images/comment.png";
import badge from "@/assets/images/badge.png";
import ab from "@/assets/images/ab.png";
export default function Welcome() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center gap-28 mt-36 px-3 w-[90%] m-auto">
        <div className="lg:w-[65%]">
          <Image src={ab} alt="" />
          <Image src={badge} alt="" />
        </div>

        <div className="leading-[55px] mt-12 w-full md:w-[90%]">
          <h2 className="text-[50px] font-sans font-bold text-[#00306E]">
            Welcome to
          </h2>
          <h1 className="text-[50px] font-sans font-bold text-[#D2093C]">
            Echooling LMS <br />
            Platform
          </h1>

          <p className="mt-10 text-[20px] text-[#777777]">
            Education is both the act of teaching knowledge to others and <br />{" "}
            the act of receiving knowledge from someone else.
          </p>
          <p className="mt-10 text-[16px] text-[#777777] mb-10">
            Have questions?
            <a
              href="#"
              className="text-[#D2093C] text-[16px] font-bold underline "
            >
              {" "}
              Get Free Guide{" "}
            </a>
          </p>
          <hr />
          <p className=" mt-10 text-[16px] text-[#777777] ">
            Education also refers to the knowledge received through schooling
            instruction <br />
            and to the institution of teaching as a whole. The main purpose of
            education <br />
            is the integral development of a person.
          </p>

          <div className="flex flex-col lg:flex-row ">
            <button className="mt-10 text-[16px] text-[#00306E]  border-2 rounded font-bold px-4">
              Read More
              <ArrowForwardIcon />
            </button>
            <div className="flex mt-10 ">
              <div className="ml-6">
                <Image src={comment} alt="" />
              </div>
              <div className="ml-4 leading-4">
                <p className="text-[14px] text-[#999999]">Get Support</p>
                <a
                  href=""
                  className="text-left text-[18px] text-[#00306E] font-bold"
                >
                  Support@react.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
