import { Button } from "@/components/ui/button";
import communityImg from "@/assets/international.svg";
import techImg from "@/assets/entrepreneur.svg";
import trustImg from "@/assets/large.svg"
import { ChevronRight } from "lucide-react";

const Differentiators = () => {
  const features = [
    {
      title: "Community Driven",
      description: "Grovia is a cooperative society, meaning every member has a voice, a stake, and a share in the growth. It's fintech, but with real people at the center.",
      buttonText: "Learn More"
    },
    {
      title: "Tech-Driven Purpose-Led", 
      description: "Grovia combines innovation with grassroots impact. Our platform is designed to empower, not complicate",
      buttonText: "Learn More"
    },
    {
      title: "Growth with Trust",
      description: "At Grovia, transparency and empowerment go hand in hand. Whether you're saving, borrowing, or investing, everything is built on trust and clarity.",
      buttonText: "Learn More"
    }
  ];

  return (
    <section style={{ backgroundColor: '#061311' }} className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Button variant="pill" size="pill" className="mb-6 bg-[#28B446] text-black font-bold text-sm">
            How is Grovia different?
          </Button>
          <h2 className="text-4xl md:text-[36px] font-bold text-white mb-4">
            A Cooperative Fintech Built for People
          </h2>
          <p className="text-xl text-white max-w-[828px] mx-auto">
            Grovia blends the power of technology with the heart of community ownership
          </p>
        </div>

        {/* Features Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Background Effects - Responsive positioning */}
          {/* Main Container */}
          <div 
            className="relative z-10 p-6 md:p-8 lg:p-12 overflow-hidden"
            style={{
              backgroundColor: '#0F2028',
              borderRadius: '20px',
              minHeight: '400px'
            }}
          >
            <div className="w-[200px] h-[178px] absolute z-[-1] right-[30%] bottom-[10%] bg-[#3BBFAD80] rounded-full blur-[60px]" />
            <div className="w-[100px] absolute right-[20%] z-[-1] top-[10%] h-[138px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
            <div className="w-[258px] absolute right-[-82px] z-[-1] bottom-[0] h-[322px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
            
            {/* Features Grid */}
            <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:gap-8 h-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col scale-[0.9] lg:scale-[1] py-4 px-5 rounded-[24px]"
                  style={{
                    backgroundColor: '#000',
                    boxShadow: '0px 1px 6px 0px #00000005',
                    minWidth: '382.25px',
                    minHeight: '391.97px',
                    opacity: 1,
                    borderRadius: '24px'
                  }}
                >
                  {/* Icon */}
                  <div className="w-[117px] h-[80px] mb-6 flex items-center justify-center">
                    {index === 0 && (
                      <img src={communityImg} alt="Community Driven" className="" />
                    )}
                    {index === 1 && (
                      <img src={techImg} alt="Tech-Driven Purpose-Led" className="w-16 h-16 object-contain" />
                    )}
                    {index === 2 && (
                      <img src={trustImg} alt="Growth with Trust" className="w-16 h-16 object-contain" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white mb-6 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  <button className="flex items-center text-white hover:text-grovia-accent transition-colors text-left">
                    <div className="w-[20px] mr-2 h-[20px] rounded-full border border-[#3BB75E] flex items-center justify-center">
                      <ChevronRight className="text-[#3BB75E] scale-[0.8]" />
                    </div>
                    {feature.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;