import { Button } from "@/components/ui/button";

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
    <section id="how-it-works" style={{ backgroundColor: '#061311' }} className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Button variant="pill" size="pill" className="mb-6">
            How it works
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple Steps to Financial Empowerment
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
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
                  <div className="w-12 h-12 bg-grovia-primary rounded-full flex items-center justify-center">
                    {index === 0 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed text-lg">
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