"use client";
// import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import { relative } from "path";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <nav>
      <div className="bg-[#00306e]  text-[14px] text-[white] hidden lg:!flex justify-around gap-5  h-10 items-center">
        <div className="flex gap-3">
          <div className="flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="hover:text-[#FFDFC7] cursor-pointer">
              (+1) 3344 999 999
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="hover:text-[#FFDFC7] cursor-pointer">
              info@reactheme.com
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
          <div>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="flex  items-center !justify-between lg:!justify-evenly mt-3">
        <div>
          <img
            src="https://reactheme.com/products/html/echooling/assets/images/logo.png"
            alt=""
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="hidden lg:!flex text-[#00306e] !text-base xl:!text-lg gap-10 xl:gap-20 font-semibold">
          <div className="hover:text-[#D2093C] cursor-pointer">Home</div>
          <div className="hover:text-[#D2093C] cursor-pointer">Pages</div>
          <div className="hover:text-[#D2093C] cursor-pointer">Courses</div>
          <div className="hover:text-[#D2093C] cursor-pointer">Blog</div>
          <div className="hover:text-[#D2093C] cursor-pointer">Contact</div>
        </div>
        <div className="flex  items-center gap-0 sm:gap-4 mr-5 sm:mr-20 text-[#00306e]">
          <div className="hidden sm:!flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="font-semibold text-lg hover:text-[#32A0FD] cursor-pointer">
              Log In
            </div>
          </div>
          <div className="hidden sm:!flex">
            <input
              className="bg-[#F4F5F5] w-[200px] sm:w-[245px] h-[30px] sm:h-[43px] rounded-[5px] hidden sm:!flex sm:rounded-[10px] pl-3 sm:pl-7 absolute"
              type="text"
              placeholder="Search Course"
            />
            <div className="relative pl-40 sm:pl-48 pt-1 sm:pt-2 text-black hidden sm:!flex">
              <svg
                className="hidden sm:!flex"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <div className="ml-7 w-[43px] h-[40px] mt-3 bg-[#2a6df5] text-[#ffffff] flex lg:!hidden justify-center items-center rounded-[5px] ">
            <MenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}