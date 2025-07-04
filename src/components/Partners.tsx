import Amazon from "@/assets/amazon.svg"
import Google from "@/assets/google.svg"
import Salesforce from "@/assets/salesforce.svg"
import Shopify from "@/assets/shopify.svg"
import Zara from "@/assets/zara.svg"
import Marriott from "@/assets/marriott.svg"

const Partners = () => {
  const partners = [
    { name: "Amazon", logo: Amazon },
    { name: "Google", logo: Google },
    { name: "Salesforce", logo: Salesforce },
    { name: "Shopify", logo: Shopify },
    { name: "Zara", logo: Zara },
    { name: "Marriott", logo: Marriott }
  ];

  return (
    <section className="bg-white h-[146px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Text */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 h-full lg:pr-8">
            <h2 className="text-2xl font-bold text-grovia-dark mb-4">Our Partners</h2>
            <p className="text-text-muted">
              Trusted by thousands of local and local brand
            </p>
          </div>

          {/* Right Side - Partner Logos */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner) => (
                <div key={partner.name} className="">
                  <img src={partner.logo} alt="" className="scale-[1.4]" draggable="false" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;