import { Button } from "@/components/ui/button";
import Playstore from "@/assets/icon/playstore.svg"
import Appstore from "@/assets/icon/appstore.svg"
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="min-h-screen flex pt-20 relative overflow-hidden" style={{ backgroundColor: '#061311' }}>
      {/* Grid Pattern Overlay */}
      {/* Top-right gradient shape (no blur) */}
      <div 
        className="absolute blur-[150px] bg-[#3BBFAD2A]"
        style={{
          width: '613.34px',
          height: '569.41px',
          top: '-182.53px',
          left: '1159.25px',
          zIndex: 1,
        }}
      />

      {/* Bottom-left gradient shape (no blur) */}
      <div 
        className="absolute bg-[#3BBFAD2A] blur-[150px]"
        style={{
          width: '534px',
          height: '642.61px',
          top: '434.02px',
          left: '-174px',
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Overlay - now on top of gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{zIndex: 2}}>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.10) 1px, transparent 2px), 
              linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 2px)
            `,
            backgroundSize: '150px 70px', // More spacing, more rectangular
            // Fade out only from the center (50%) to the bottom (100%)
            maskImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 100%)',
          }} 
        />
        {/* Opaque overlay at the bottom to cover the grid */}
        {/* <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: '260px',
            background: 'linear-gradient(0deg, #061311 80%, rgba(6,19,17,0.0) 100%)',
            pointerEvents: 'none',
          }}
        /> */}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-[1183px] mx-auto">
          {/* Main Headline */}
          <h1 className="text-[20px] md:text-[30px] lg:text-[50px] font-bold text-white max-w-[1183px] mb-6 leading-tight">
            A next-generation, tech-powered cooperative transforming individuals and small businesses
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-[18px] text-white font-bold mb-12 whitespace-nowrap max-w-[528px] mx-auto">
            Building Africa's most trusted cooperative fintech community
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="#" className="hover:opacity-70">
             <img src={Playstore} alt="" className="" draggable="false" />
            </Link>

            <Link to="#" className="hover:opacity-70">
              <img src={Appstore} alt="" className="" draggable="false" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;