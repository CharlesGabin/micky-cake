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

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          {/* <Text className="text-2xl font-pacifico text-primary-color2 ">
            Les Gracieux Gourmets de Micki
          </Text> */}
          <Text className="text-2xl font-lato uppercase text-primary-color2">
            GGM
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
            <MenuList className="hover:bg-white">
              <MenuItem className="hover:bg-white">
                <Lien setIsMobileMenuOpen={setIsMobileMenuOpen} />
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
