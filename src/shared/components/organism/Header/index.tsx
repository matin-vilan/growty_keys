"use client";

import Button from "@/shared/components/atoms/Button";
import Typography from "@/shared/components/atoms/Typography";
import Icon from "@/shared/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            {/* Logo Icon */}
            <Icon src="HeaderKeys" />

            {/* Brand Name and Tagline */}
            <div className="bg-[#FFFFFF4D]">
              <Typography
                variant="h1"
                fontSize="xl"
                fontWeight="black"
                color="charcoal"
              >
                Growth Key Marketing
              </Typography>
              <Typography
                variant="p"
                fontSize="xs"
                color="neutral-high"
                className="tracking-[3px]"
                fontWeight="light"
              >
                Unlock Your Potential
              </Typography>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-charcoal hover:text-secondary transition-colors"
            >
              Marketing Solutions
            </a>
            <a
              href="#"
              className="text-charcoal hover:text-secondary transition-colors"
            >
              Who We Help
            </a>
            <a
              href="#"
              className="text-charcoal hover:text-secondary transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-charcoal hover:text-secondary transition-colors"
            >
              About Us
            </a>
          </nav>

          {/* Contact and CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Icon src="phone" />
              <Typography className="text-[15px]" fontWeight="bold">
                +1 (555) 123-4567
              </Typography>
            </div>

            {/* CTA Button */}
            <Button variant="outline" size="medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-charcoal hover:text-secondary transition-colors py-2"
              >
                Marketing Solutions
              </a>
              <a
                href="#"
                className="text-charcoal hover:text-secondary transition-colors py-2"
              >
                Who We Help
              </a>
              <a
                href="#"
                className="text-charcoal hover:text-secondary transition-colors py-2"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-charcoal hover:text-secondary transition-colors py-2"
              >
                About Us
              </a>

              {/* Mobile Contact */}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-charcoal"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span className="text-charcoal font-medium">
                  +1 (555) 123-4567
                </span>
              </div>

              {/* Mobile CTA */}
              <button className="bg-primary text-charcoal px-6 py-3 rounded-lg font-semibold border-2 border-secondary hover:bg-muted transition-colors w-full mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
