import { useState } from "react";
import { Button } from "@/components/ui/button";
import groviaIcon from "@/assets/logo.svg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Partnership", href: "#partnership" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
];

function MobileHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden w-full bg-black h-[72px] flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={groviaIcon} alt="Grovia" className="" />
      </div>
      {/* Hamburger */}
      <button onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu className="text-white w-8 h-8" />
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#061311] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="text-white w-7 h-7" />
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-lg font-medium hover:text-grovia-primary transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="text-white text-lg font-medium mt-4" onClick={() => setOpen(false)}>
            Sign In
          </a>
          <Button className="w-full mt-2 bg-[#3BB75E] text-white font-bold" onClick={() => setOpen(false)}>
            Sign Up
          </Button>
        </nav>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}

const Header = () => {
  return (
    <header className="w-full">
      {/* Desktop Header */}
      <div className="bg-black h-[104px] w-full pt-[20px] hidden md:flex">
        <div className="px-6 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src={groviaIcon} 
                alt="Grovia" 
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-9">
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
      </div>
      {/* Mobile Header */}
      <MobileHeader />
    </header>
  );
};

export default Header;