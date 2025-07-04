import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Differentiators from "@/components/Differentiators";
import Referral from "@/components/Referral";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#061311] overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Differentiators />
      <Referral />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Index;
