const Partners = () => {
  const partners = [
    { name: "Amazon", logo: "amazon" },
    { name: "Google", logo: "google" },
    { name: "Salesforce", logo: "salesforce" },
    { name: "Shopify", logo: "shopify" },
    { name: "Zara", logo: "zara" },
    { name: "Marriott", logo: "marriott" }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Text */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl font-bold text-grovia-dark mb-4">Our Partners</h2>
            <p className="text-text-muted">
              Trusted by thousands of local and local brand
            </p>
          </div>

          {/* Right Side - Partner Logos */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-gray-400 hover:text-grovia-primary transition-colors cursor-pointer">
                    {partner.name}
                  </div>
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