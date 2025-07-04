import { Button } from "@/components/ui/button";
import groviaIcon from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-black h-[104px] w-full pt-[20px]">
      <div className="px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={groviaIcon} 
              alt="Grovia" 
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            <a href="#home" className="text-white font-medium text-[16px] hover:scale-105 transition-all duration-300">
              Home
            </a>
            <a href="#partnership" className="text-white font-medium text-[16px] hover:scale-105 transition-all duration-300">
              Partnership
            </a>
            <a href="#features" className="text-white font-medium text-[16px] hover:scale-105 transition-all duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-white font-medium text-[16px] hover:scale-105 transition-all duration-300">
              How it works
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white font-medium text-[16px] hover:text-white transition-colors">
              Sign In
            </button>
            <Button 
              className="w-[105px] h-[40px] bg-[#3BB75E] rounded-[5px] text-white font-medium hover:opacity-80">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;