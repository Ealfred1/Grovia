import { Button } from "@/components/ui/button";
import groviaIcon from "@/assets/grovia-icon.png";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={groviaIcon} 
              alt="Grovia" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-white">Grovia</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-white transition-colors">
              Home
            </a>
            <a href="#partnership" className="text-white hover:text-white transition-colors">
              Partnership
            </a>
            <a href="#features" className="text-white hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-white hover:text-white transition-colors">
              How it works
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-white transition-colors">
              Sign In
            </button>
            <button 
              className="w-[105px] h-[40px] rounded-[5px] text-white font-medium transition-colors"
              style={{ backgroundColor: '#3BB75E' }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;