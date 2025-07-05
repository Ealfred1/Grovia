import Amazon from "@/assets/amazon.svg"
import Google from "@/assets/google.svg"
import Salesforce from "@/assets/salesforce.svg"
import Shopify from "@/assets/shopify.svg"
import Zara from "@/assets/zara.svg"
import Marriott from "@/assets/marriott.svg"
import { useRef, useEffect } from "react";
import gsap from "gsap";

const partners = [
  { name: "Amazon", logo: Amazon },
  { name: "Google", logo: Google },
  { name: "Salesforce", logo: Salesforce },
  { name: "Shopify", logo: Shopify },
  { name: "Zara", logo: Zara },
  { name: "Marriott", logo: Marriott }
];

function MobilePartners() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.from(logoRefs.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.4,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);
  return (
    <section className="bg-white py-6 md:hidden">
      <div className="px-4">
        <h2 ref={titleRef} className="text-xl font-bold text-grovia-dark mb-2">Our Partners</h2>
        <p ref={subtitleRef} className="text-text-muted mb-4">
          Trusted by thousands of local and local brand
        </p>
        <div className="overflow-hidden w-full">
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {partners.map((partner, idx) => (
              <div key={partner.name} ref={el => logoRefs.current[idx] = el}>
                <img src={partner.logo} alt={partner.name} draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Partners = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.from(logoRefs.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.4,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);
  return (
    <>
      {/* Desktop Version */}
      <section className="bg-white h-[146px] items-center hidden md:flex">
        <div className="container mx-auto px-4">
          <div className="flex flex-row items-center">
            {/* Left Side - Text */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 h-full lg:pr-8">
              <h2 ref={titleRef} className="text-2xl font-bold text-grovia-dark mb-4">Our Partners</h2>
              <p ref={subtitleRef} className="text-text-muted">
                Trusted by thousands of local and local brand
              </p>
            </div>

            {/* Right Side - Partner Logos */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {partners.map((partner, idx) => (
                  <div key={partner.name} className="" ref={el => logoRefs.current[idx] = el}>
                    <img src={partner.logo} alt={partner.name} className="scale-[1.4]" draggable="false" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Version */}
      <MobilePartners />
    </>
  );
};

export default Partners;