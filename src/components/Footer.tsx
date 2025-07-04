import { Button } from "@/components/ui/button";
import groviaIcon from "@/assets/grovia-icon.png";

const Footer = () => {
  return (
    <footer className="bg-grovia-dark py-20">
      <div className="container mx-auto px-4">
        {/* Get Started Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Started with Grovia Now
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of Africans building their financial future with our cooperative fintech platform
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="app-download" size="lg" className="flex items-center space-x-3 px-6 py-3">
              <div className="w-8 h-8 bg-grovia-primary rounded flex items-center justify-center">
                <span className="text-white text-lg">▶</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-text-muted">GET IT ON</div>
                <div className="font-semibold text-white">Google Play</div>
              </div>
            </Button>

            <Button variant="app-download" size="lg" className="flex items-center space-x-3 px-6 py-3">
              <div className="w-8 h-8 bg-grovia-primary rounded flex items-center justify-center">
                <span className="text-white text-lg">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-text-muted">Download on the</div>
                <div className="font-semibold text-white">App Store</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={groviaIcon} 
                alt="Grovia" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-white">Grovia</span>
            </div>
            <p className="text-text-secondary">
              Building Africa's most trusted cooperative fintech community
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Virtual Cards</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Savings</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Loans</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Ajo Groups</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-text-secondary">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-grovia-primary/20">
          <p className="text-text-secondary mb-4 md:mb-0">
            © 2025 Grovia app | All Rights Reserved
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-grovia-primary/20 rounded-full flex items-center justify-center hover:bg-grovia-primary/30 transition-colors">
              <span className="text-grovia-primary">f</span>
            </a>
            <a href="#" className="w-10 h-10 bg-grovia-primary/20 rounded-full flex items-center justify-center hover:bg-grovia-primary/30 transition-colors">
              <span className="text-grovia-primary">t</span>
            </a>
            <a href="#" className="w-10 h-10 bg-grovia-primary/20 rounded-full flex items-center justify-center hover:bg-grovia-primary/30 transition-colors">
              <span className="text-grovia-primary">in</span>
            </a>
            <a href="#" className="w-10 h-10 bg-grovia-primary/20 rounded-full flex items-center justify-center hover:bg-grovia-primary/30 transition-colors">
              <span className="text-grovia-primary">ig</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;