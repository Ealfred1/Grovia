import { Button } from "@/components/ui/button";

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
          <Button variant="pill" size="pill" className="mb-6">
            How is Grovia different?
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Cooperative Fintech Built for People
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Grovia blends the power of technology with the heart of community ownership
          </p>
        </div>

        {/* Features Container */}
        <div className="max-w-7xl mx-auto relative">
          {/* Background Effects - Responsive positioning */}
          <div 
            className="absolute hidden lg:block"
            style={{
              width: '100px',
              height: '176.29px',
              top: '29.38px',
              right: '5%',
              backgroundColor: '#3BBFAD80',
              backdropFilter: 'blur(150px)',
              WebkitBackdropFilter: 'blur(150px)',
              borderRadius: '50%'
            }}
          />
          <div 
            className="absolute hidden md:block"
            style={{
              width: '80px',
              height: '140px',
              top: '200px',
              left: '5%',
              backgroundColor: '#3BBFAD40',
              backdropFilter: 'blur(100px)',
              WebkitBackdropFilter: 'blur(100px)',
              borderRadius: '50%'
            }}
          />
          <div 
            className="absolute hidden lg:block"
            style={{
              width: '120px',
              height: '180px',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#3BBFAD30',
              backdropFilter: 'blur(120px)',
              WebkitBackdropFilter: 'blur(120px)',
              borderRadius: '50%'
            }}
          />
          
          {/* Main Container */}
          <div 
            className="relative z-10 p-6 md:p-8 lg:p-12"
            style={{
              backgroundColor: '#0F2028',
              borderRadius: '20px',
              minHeight: '400px'
            }}
          >
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-full">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 mb-6">
                    {index === 0 && (
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  <button className="flex items-center text-grovia-primary hover:text-grovia-accent transition-colors text-left">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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