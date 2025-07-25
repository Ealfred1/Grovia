import { Card, CardContent } from "@/components/ui/card";
import referralIllustration from "@/assets/dollar.svg";
import referralPhone from "@/assets/iphone.svg";
import referScreen from "@/assets/refer.svg";

function MobileReferral() {
  return (
    <section className="py-8 md:hidden flex justify-center items-center">
      <div
        className="w-full max-w-[95vw] mx-auto bg-[#011B33] rounded-[20px] p-6 flex flex-col items-center"
        style={{ opacity: 1 }}
      >
        {/* Text */}
        <h2 className="text-base font-bold text-white mb-2 text-left w-full">Referral program</h2>
        <h3 className="text-sm font-bold text-white mb-3 text-left w-full">Earn Rewards by Inviting Others to Grow</h3>
        <p className="text-white text-xs mb-2 text-left w-full">
          Our referral program lets you earn rewards every time you invite someone to join the Grovia community.
        </p>
        <p className="text-white text-xs mb-4 text-left w-full">
          when they sign up and start using Grovia, you both benefit. It's our way of saying thank you for helping us build a stronger, more empowered financial network.
        </p>
        {/* Images below text, centered */}
        <div className="flex flex-col items-center gap-4 w-full mt-2">
          <img
            src={referralIllustration}
            alt="Dollar Illustration"
            className="mx-auto"
            draggable="false"
          />
          <div className="relative w-full flex justify-center">
            <img
              src={referralPhone}
              alt="Referral Phone"
              className="mx-auto"
              draggable="false"
            />
            <img
              src={referScreen}
              alt="Referral Screen"
              className="absolute top-0 left-1/2 -translate-x-1/2 mt-6"
              style={{ maxWidth: '80%', pointerEvents: 'none' }}
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Referral = () => {
  return (
    <>
      {/* Desktop Version */}
      <section className="py-20 hidden md:flex justify-center items-center">
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
          {/* Left Side - Text */}
          <div className="flex flex-col max-w-[709px] justify-center h-full pl-12 w-3/5">
            <h2 className="text-[48px] font-bold text-white mb-4">Referral program</h2>
            <h3 className="text-[32px] font-bold text-white mb-8">Earn Rewards by Inviting Others to Grow</h3>
            <p className="text-white text-lg mb-2">
              Our referral program lets you earn rewards every time you invite someone to join the Grovia community.
            </p>
            <p className="text-white text-lg">
              when they sign up and start using Grovia, you both benefit. It's our way of saying thank you for helping us build a stronger, more empowered financial network.
            </p>
          </div>
          {/* Right Side - Images */}
          <div className="relative flex-1 h-full flex items-end justify-end pr-12">
            {/* Phone image with overlayed screen */}
            <div className="absolute bottom-[-50%] right-0 z-10 h-[683px] w-[378px] flex items-center justify-center">
              <img
                src={referralPhone}
                alt="Referral Phone"
                className="w-full h-full"
                draggable="false"
              />
              {/* Overlay refer.svg as the phone screen, perfectly inside the phone */}
              <img
                src={referScreen}
                alt="Referral Screen"
                className="absolute bottom-[-16px] left-[10.5px] w-[500px] h-[306px]"
                style={{ pointerEvents: 'none' }}
                draggable="false"
              />
            </div>
            <div className="w-[200px] h-[178px] absolute  right-[50%] bottom-[10%] bg-[#3BBFAD80] rounded-full blur-[60px]" />
              <div className="w-[100px] absolute right-[20%] top-[10%] h-[138px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
              <div className="w-[258px] absolute right-[-82px] bottom-[0] h-[322px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
              
            {/* Dollar illustration image (absolutely positioned at right 30%) */}
            <img
              src={referralIllustration}
              alt="Dollar Illustration"
              className="absolute z-0 bottom-[30%] right-[70%] w-[150px] h-[150px]"
              draggable="false"
            />
          </div>
        </div>
      </section>
      {/* Mobile Version */}
      <MobileReferral />
    </>
  );
};

export default Referral;