import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#061311' }}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(50.08% 47.22% at 50% 52.67%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            WebkitMaskImage: 'radial-gradient(50.08% 47.22% at 50% 52.67%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
          }} 
        />
      </div>

      {/* Top-right gradient blur */}
      <div 
        className="absolute"
        style={{
          width: '613.341064453125px',
          height: '569.4080200195312px',
          top: '-182.53px',
          left: '1159.25px',
          backgroundColor: '#3BBFAD1A',
          backdropFilter: 'blur(150px)',
          WebkitBackdropFilter: 'blur(150px)'
        }}
      />

      {/* Bottom-left gradient blur */}
      <div 
        className="absolute"
        style={{
          width: '534px',
          height: '642.6095581054688px',
          top: '434.02px',
          left: '-174px',
          backgroundColor: '#3BBFAD1A',
          backdropFilter: 'blur(150px)',
          WebkitBackdropFilter: 'blur(150px)'
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            A next-generation, tech-powered cooperative transforming individuals and small businesses
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Building Africa's most trusted cooperative fintech community
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="app-download" size="lg" className="flex items-center space-x-3 px-6 py-3">
              <div className="w-8 h-8 bg-grovia-primary rounded flex items-center justify-center">
                <span className="text-white text-lg">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/60">GET IT ON</div>
                <div className="font-semibold text-white">Google Play</div>
              </div>
            </Button>

            <Button variant="app-download" size="lg" className="flex items-center space-x-3 px-6 py-3">
              <div className="w-8 h-8 bg-grovia-primary rounded flex items-center justify-center">
                <span className="text-white text-lg">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/60">Download on the</div>
                <div className="font-semibold text-white">App Store</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;