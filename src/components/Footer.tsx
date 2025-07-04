import groviaIcon from "@/assets/logo.svg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-20">
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
  );
};

export default Footer;