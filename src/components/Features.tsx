import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import virtualCardImage from "@/assets/cards.svg";
import savingsIcon from "@/assets/savings.svg";
import loanIcon from "@/assets/loan.svg";
import insetBgImage from "@/assets/bggreen.svg"

const featuresData = [
  {
    title: "Virtual Card",
    description:
      "Grovia's virtual card gives you the power to make secure online transactions without the risk of exposing your physical bank details. Instantly generate a digital card through the Grovia app for payments, subscriptions, and business expenses.",
    image: virtualCardImage,
    imageAlt: "Grovia Virtual Card",
    cardClass: "bg-[#1D252C]",
    textClass: "text-white",
  },
  {
    title: "Save & Transfer",
    description:
      "Grovia makes saving money and sending funds simple, fast, and rewarding. Whether you're building your financial future.",
    image: savingsIcon,
    imageAlt: "Savings Icon",
    cardClass: "bg-[#011B33]",
    textClass: "text-white",
  },
  {
    title: "Loan",
    description:
      "Grovia provides affordable, flexible loans tailored to your savings and capacity.",
    image: loanIcon,
    imageAlt: "Loan Icon",
    cardClass: "bg-gradient-green",
    textClass: "text-black",
  },
];

function MobileFeatures() {
  return (
    <section id="features" className="bg-gradient-dark py-10 md:hidden">
      <div className="container mx-auto px-2 flex flex-col gap-8">
        {/* Header */}
        <div className="text-center mb-6">
          <Button variant="pill" size="pill" className="mb-6 bg-[#28B446] text-black font-bold text-sm">
            Features & Services
          </Button>
          <h2 className="text-[25px] font-bold text-white mb-1">
            Unlock the full power of Grovia
          </h2>
          <p className="text-[20px] text-white max-w-[798px] font-nold mx-auto">
            Generate and manage virtual cards for seamless and safe online payments.
          </p>
        </div>
        {/* Features List */}
        {featuresData.map((feature, idx) => (
          <Card key={feature.title} className={`${feature.cardClass} rounded-[24px] shadow-none border-none p-6`}>
            <CardContent className="flex flex-col items-center text-center">
              <img src={feature.image} alt={feature.imageAlt} className="mb-6" draggable="false" />
              <h3 className="text-2xl font-bold mb-4 text-center ${feature.textClass}">{feature.title}</h3>
              <p className={`text-[16px] ${feature.textClass}`}>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const Features = () => {
  return (
    <>
      {/* Desktop Version */}
      <section id="features" className="bg-gradient-dark py-20 hidden md:block">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Button variant="pill" size="pill" className="mb-6 bg-[#28B446] text-black font-bold text-sm">
              Features & Services
            </Button>
            <h2 className="text-[25px] md:text-[36px] font-bold text-white mb-1">
              Unlock the full power of Grovia
            </h2>
            <p className="text-[24px] text-white max-w-[798px] font-nold mx-auto">
            Generate and manage virtual cards for seamless and safe online payments.
          </p>
        </div>

        {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Virtual Card - spans both columns */}
            <div className="md:col-span-2">
              <Card className="bg-[#1D252C] overflow-hidden relative border-none min-h-[400px] shadow-none">
                <CardContent className="">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 h-full pt-32 px-8 flex justify-center flex-col">
                  <h3 className="text-3xl font-bold text-white mb-4">Virtual Card</h3>
                      <p className="text-text-secondary leading-10 mb-6">
                    Grovia's virtual card gives you the power to make secure online
                    transactions without the risk of exposing your physical bank details.
                    Instantly generate a digital card through the Grovia app for payments,
                    subscriptions, and business expenses.
                  </p>
                </div>
                    <div className="lg:w-1/2 absolute right-0 bottom-0 h-[400px] flex justify-center">
                  <img 
                    src={virtualCardImage} 
                    alt="Grovia Virtual Card" 
                        className="w-full h-full rounded-xl"
                        draggable="false"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
            </div>
          {/* Save & Transfer */}
            <Card className="bg-[#011B33] h-[400px] rounded-[20px] shadow-none border-none relative overflow-hidden">
              <CardContent className="h-full flex items-center pl-8 pr-0 relative">
                <div className="w-3/5">
                  <h3 className="text-[40px] font-bold text-white mb-4 text-left">Save & Transfer</h3>
                  <p className="text-white text-[17px] leading-10 text-left">
                    Grovia makes saving money and sending funds
                    simple, fast, and rewarding. Whether you're
                    building your financial future.
                  </p>
                </div>
                <div className="w-[100px] h-[138px] absolute right-[10%] bottom-[50%] bg-[#3BBFAD80] rounded-full blur-[60px]" />
                <div className="w-[100px] absolute right-[30%] bottom-[10%] h-[138px] bg-[#3BBFAD80] rounded-full blur-[60px]" />
                <img 
                  src={savingsIcon} 
                  alt="Savings Icon" 
                  className="w-40 h-40 absolute bottom-5 right-5"
                  draggable="false"
                />
            </CardContent>
          </Card>
          {/* Loan */}
            <Card className="bg-gradient-green h-[400px] rounded-[20px] shadow-none border-none relative overflow-hidden">
              <CardContent className="h-full flex flex-row items-center p-0 relative">
                {/* Inset image covering right 50% of the card */}
                <img
                  src={insetBgImage}
                  alt=""
                  className="absolute inset-0 left-[30%] z-0"
                  draggable="false"
                  style={{ pointerEvents: "none" }}
                />
                <div className="w-1/2 h-full flex flex-col justify-center pl-8 relative z-10">
                  <h3 className="text-[40px] font-bold text-black mb-4 text-left">Loan</h3>
                  <p className="text-black leading-10 text-[17px] text-left">
                Grovia provides affordable,
                flexible loans tailored to your
                savings and capacity.
              </p>
                </div>
                <div className="w-1/2 h-full absolute right-0 bottom-0 flex items-end justify-center z-10">
                  <img 
                    src={loanIcon} 
                    alt="Loan Icon" 
                    className="mb-8 "
                    draggable="false"
                  />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
      {/* Mobile Version */}
      <MobileFeatures />
    </>
  );
};

export default Features;