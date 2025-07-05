import groviaIcon from "@/assets/logo.svg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function MobileFooter() {
  return (
    <footer className="bg-black py-10 md:hidden flex justify-center items-center">
      <div className="w-full max-w-[95vw] mx-auto bg-black rounded-[20px] p-6 flex flex-col items-center">
        {/* Logo and Main Text */}
        <div className="flex flex-col items-center mb-4">
          <img src={groviaIcon} alt="Grovia" className="mb-2" />
          <span className="text-2xl font-bold text-white mb-2">Grovia</span>
        </div>
        <p className="text-white font-bold text-center mb-4 text-sm">
          Stay up-to-date with the latest news, features and updates from Grovia. Follow us on social media!
        </p>
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
            <Facebook className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80 transition">
            <Twitter className="w-6 h-6 text-white" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
            <Youtube className="w-6 h-6 text-white" />
          </a>
        </div>
        {/* Footer Links - 3 columns, centered */}
        <div className="grid grid-cols-3 gap-4 w-full text-center mb-6">
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Company</h3>
            <ul className="space-y-1 text-text-secondary text-xs">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Legal</h3>
            <ul className="space-y-1 text-text-secondary text-xs">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2 text-sm">Support</h3>
            <ul className="space-y-1 text-text-secondary text-xs">
              <li><a href="#" className="hover:text-grovia-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-grovia-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr className="w-full border-t border-white/20 my-4" />
        <p className="text-text-secondary text-xs text-center mt-2">
          © 2025 Grovia app | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

const Footer = () => {
  return (
    <>
      {/* Desktop Version */}
      <footer className="bg-black py-20 hidden md:flex">
        <div className="container mx-auto px-4">
          {/* Footer Links */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src={groviaIcon} 
                  alt="Grovia" 
                  className=""
                />
              </div>
              <p className="text-text-secondary text-lg max-w-[90%] mb-6">
                Building Africa's most trusted cooperative fintech community
              </p>
              {/* Social Media Icons - left aligned, bottom of first column */}
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-80 transition">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
                  <Youtube className="w-6 h-6 text-white" />
                </a>
              </div>
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

          {/* Copyright - left aligned at bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-grovia-primary/20">
            <p className="text-text-secondary mb-4 md:mb-0 text-left w-full">
              © 2025 Grovia app | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* Mobile Version */}
      <MobileFooter />
    </>
  );
};

export default Footer;