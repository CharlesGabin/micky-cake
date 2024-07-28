import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Lien from "./Lien";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { LI } from "../data/produits";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 items-center w-full">
      <div className="flex items-center md:justify-around justify-between md:px-0 px-4 py-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="flex items-center justify-start text-center hover:scale-110 pointer"
        >
          <Text className="text-2xl font-lato uppercase text-primary-color2">
            <span className="bg-pink-950 px-2 py-2 text-white font-dancingScript rounded-full">
              GG
            </span>
            <span className="bg-pink-500 px-1 py-1 text-white font-dancingScript rounded-full">
              {" "}
              M
            </span>
            <span className="">icki</span>
          </Text>
        </motion.div>

        <div className="hidden gap-2 md:flex">
          <Lien setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </div>
        <div className="md:hidden">
          <Menu closeOnBlur={true} closeOnSelect={true}>
            <MenuButton
              onClick={toggleMobileMenu}
              as={IconButton}
              aria-label="Options"
              icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="outline"
              borderColor="secondary-color1"
              _hover="bg-primary-color1"
              className="hover:bg-white"
            />
            <MenuList className="">
              {LI.map((lien) => {
                return (
                  <MenuItem
                    key={lien.id}
                    _active={"pink"}
                    className={clsx(
                      "px-2 py-4 text-secondary-color1 hover:text-primary-color2",
                      {
                        "text-primary-color2 border-b-2 border-primary-color2":
                          lien.active === true,
                      },
                      {
                        "bg-pink-500 hover:bg-pink-700 hover:text-white text-white font-lato font-light py-1 px-2 rounded-2xl cursor-pointer":
                          lien.name === "Contact",
                      }
                    )}
                  >
                    <a
                      key={lien.id}
                      href={`#${lien.path}`}
                      onClick={(event) => handleScroll(event, lien.path)}
                    >
                      {lien.name}{" "}
                    </a>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
