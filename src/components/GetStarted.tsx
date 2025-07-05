import React from "react";

// Placeholder images (replace with your actual assets)
import phoneImg from "@/assets/closeup-hand-holding-blank-screen-smartphone-plain-background 1.svg";
import googlePlay from "@/assets/icon/playstore.svg";
import appStore from "@/assets/icon/appstore.svg";

function MobileGetStarted() {
  return (
    <section className="py-8 md:hidden flex justify-center items-center">
      <div
        className="w-full max-w-[95vw] mx-auto bg-[#011B33] rounded-[20px] p-6 flex flex-col items-center relative"
        style={{ opacity: 1, minHeight: '340px' }}
      >
        {/* Text and Buttons */}
        <h2 className="text-base font-bold text-white mb-2 text-left w-full">Get Started with Grovia Now</h2>
        <h3 className="text-sm font-bold text-white mb-3 text-left w-full">
          Download Grovia and unlock access to credit, savings, and more—all from your phone.
        </h3>
        <div className="flex flex-row gap-4 mt-2 mb-4 w-full justify-start">
          <img src={googlePlay} alt="Get it on Google Play" className="h-10 w-auto" />
          <img src={appStore} alt="Download on the App Store" className="h-10 w-auto" />
        </div>
        {/* Phone image absolutely at the bottom center */}
        <img
          src={phoneImg}
          alt="Grovia App on Phone"
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{ maxHeight: '180px' }}
          draggable="false"
        />
      </div>
    </section>
  );
}

const GetStarted = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="py-20 relative hidden md:flex justify-center items-center">
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
      {/* Mobile Version */}
      <MobileGetStarted />
    </>
  );
};

export default GetStarted; 