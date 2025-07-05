import { Button } from "@/components/ui/button";
import profile from "@/assets/profile1.svg"
import verify1 from "@/assets/verify1.svg"
import card1 from "@/assets/card1.svg"

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Download the Grovia app or visit our platform to create your account. It's fast, easy, and free. All you need is a phone number and basic information to get started."
    },
    {
      title: "Verification", 
      description: "Complete a quick verification process to confirm your identity and protect your account. This ensures safe access to all features"
    },
    {
      title: "Transaction",
      description: "Once verified, you can start saving, applying for loans, creating Ajo groups, generating virtual cards, and making secure transactions"
    }
  ];

  return (
    <section id="how-it-works" style={{ backgroundColor: '#061311' }} className="py-20 relative">
      <div className="w-[200px] h-[178px] absolute right-[10%] bottom-[50%] bg-[#3BBFAD80] rounded-full blur-[60px]" />
      <div className="w-[100px] absolute left-[10%] top-[10%] h-[138px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
      <div className="w-[258px] absolute left-[-82px] bottom-[0] h-[322px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Button variant="pill" size="pill" className="mb-6 bg-[#28B446] text-black font-bold text-sm">
            How it works
          </Button>
          <h2 className="text-[18px] md:text-[36px] font-bold text-white mb-6">
            Simple Steps to Financial Empowerment
          </h2>
          <p className="text-base md:text-xl text-white font-bold max-w-[1172px] mx-auto">
            Our easy-to-follow process makes it simple for individuals and businesses to unlock the full benefits of Grovia.
          </p>
        </div>

        {/* Steps with Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div 
                    className="absolute left-6 top-12 w-0.5 h-20 bg-grovia-primary"
                    style={{ zIndex: 1 }}
                  />
                )}
                
                {/* Icon */}
                <div className="relative z-10 mr-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    {index === 0 && (
                     <img src={profile} alt="" className="" />
                    )}
                    {index === 1 && (
                      <img src={verify1} alt="" className="" />
                    )}
                    {index === 2 && (
                      <img src={card1} alt="" className="" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white leading-relaxed text-sm md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;