"use client";

import Box from "@/shared/components/atoms/Box";
import Button from "@/shared/components/atoms/Button";
import Typography from "@/shared/components/atoms/Typography";
import Icon from "@/shared/icon";
import { useState } from "react";

const NavLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="text-charcoal hover:text-secondary transition-colors"
    >
      {children}
    </a>
  );
};

const navItems = [
  {
    label: "Marketing Solutions",
    href: "#",
  },
  {
    label: "Who We Help",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#FFFFFF4D]">
      <Box className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="flex justify-between items-center py-4">
          <Box className="flex items-center space-x-3">
            <Icon src="HeaderKeys" />
            <Box>
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
            </Box>
          </Box>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Box className="hidden md:flex items-center space-x-4">
            <Box className="flex items-center space-x-2">
              <Icon src="phone" />
              <Typography className="text-[15px]" fontWeight="bold">
                +1 (555) 123-4567
              </Typography>
            </Box>

            <Button variant="outline" size="medium">
              Get Started
            </Button>
          </Box>

          <Button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Box className="w-6 h-6 flex flex-col justify-center space-y-1">
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
            </Box>
          </Button>
        </Box>

        {/* mobile */}
        {isMenuOpen && (
          <Box className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Contact */}
              <Box className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Box className="w-5 h-5rounded-full flex items-center justify-center">
                  <Icon src="phone" />
                </Box>
                <span className="text-charcoal font-medium">
                  +1 (555) 123-4567
                </span>
              </Box>

              {/* Mobile CTA */}
              <Button variant="outline">Get Started</Button>
            </nav>
          </Box>
        )}
      </Box>
    </header>
  );
};

export default Header;
