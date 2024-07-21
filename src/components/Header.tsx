import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import Lien from "./Lien";
import { motion } from "framer-motion";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <nav className="bg-zinc-50 h-20 fixed top-0 left-0 right-0 z-50 items-center w-full">
      <div className="flex items-center justify-around px-4 py-3 bg-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="flex items-center justify-center text-center hover:scale-110 pointer"
        >
          <Image src="./logo.png" alt="logo" width={55} height={55} />
          <a
            href=""
            className="text-2xl font-pacifico text-secondary-color1 hover:text-primary-color2 "
          >
            Les gourmets de Micki
          </a>
        </motion.div>

        <div className="hidden gap-2 md:flex">
          <Lien />
        </div>
        <div className="md:hidden">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              _hover="bg-primary-color1"
              borderColor="secondary-color1"
            />
            <MenuList>
              <Lien />
            </MenuList>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
