import React from "react";

// Placeholder images (replace with your actual assets)
import phoneImg from "@/assets/closeup-hand-holding-blank-screen-smartphone-plain-background 1.svg";
import googlePlay from "@/assets/icon/playstore.svg";
import appStore from "@/assets/icon/appstore.svg";

const GetStarted = () => {
  return (
    <section className="py-20 relative flex justify-center items-center">
      <div
        className="relative overflow-hidden w-full flex flex-row items-center justify-between"
        style={{
          maxWidth: "1323px",
          height: "400px",
          borderRadius: "20px",
          background: "#011B33",
          opacity: 1,
        }}
      >
        <div className="w-[200px] h-[178px] absolute  right-[30%] bottom-[10%] bg-[#3BBFAD80] rounded-full blur-[60px]" />
            <div className="w-[258px] absolute right-[-82px] top-[0] h-[322px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
        {/* Left Side - Text and Buttons */}
        <div className="flex flex-col max-w-[600px] justify-center h-full pl-12 w-3/5">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            Get Started with Grovia Now
          </h2>
          <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-8">
            Download Grovia and unlock access to credit, savings, and more—all from your phone.
          </h3>
          <div className="flex flex-row gap-4 mt-4">
            <img src={googlePlay} alt="Get it on Google Play" className="h-12 w-auto" />
            <img src={appStore} alt="Download on the App Store" className="h-12 w-auto" />
          </div>
        </div>
        {/* Right Side - Phone Image */}
        <div className="relative flex-1 h-full flex items-end justify-end pr-12">
          <img
            src={phoneImg}
            alt="Grovia App on Phone"
            className="absolute bottom-0 right-0 h-[370px] w-auto z-10"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted; 