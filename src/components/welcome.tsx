import comment from "@/assets/images/comment.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

import image from "@/assets/images/picimage.png";
export default function Welcome() {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row justify-center gap-28 mt-36 px-3 w-[90%] lg:w-[80%] m-auto">
        <div className="lg:w-[50%]">
          <Image src={image} alt=" image" />
        </div>

        <div className="leading-[55px] mt-12 w-full lg:w-[50%]">
          <h2 className="text-[50px] font-sans font-bold text-[#00306E]">
            Welcome to
          </h2>
          <h1 className="text-[50px] font-sans font-bold text-[#D2093C]">
            Student's Zone <br />
            Schooling System
          </h1>

          <p className="mt-10 text-[20px] text-blue-900 font-bold">
            The Most Trusted Name In AKU-EB & Federal Board
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
          <hr className="w-[80%]" />
          <p className=" mt-10 text-[16px] text-[#777777] ">
            <span className="text-[#00306E] font-bold text-[20px] ">
              students zone coaching offer{" "}
            </span>{" "}
            <br /> ix x xi xii and o ' level <br /> AGA Khan Board Federal Board
            Sindh board MDCAT ECAT AND BCAT aptitude <br />
            test preparation <br />
            Junior's coaching classes from I to viii
          </p>

          <div className="flex flex-col lg:flex-row ">
            <button className="mt-10 text-[16px] text-[#00306E]  border-2 rounded-md font-bold px-8  hover:bg-[#D2093C] hover:text-white">
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
                  className="text-left text-[18px] text-[#00306E] font-bold hover:text-[#D2093C]"
                >
                  www.studentszone.com.pk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
