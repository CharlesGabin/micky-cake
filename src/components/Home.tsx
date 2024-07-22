// import Button from "./Button";
import { Button } from "@chakra-ui/react";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Section
      id="home"
      className="flex items-center pl-10 md:pl-0 justify-start md:justify-center bg-Home bg-no-repeat bg-right bg-cover"
    >
      <motion.div
        className="flex flex-col justify-start items-start md:justify-center md:items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
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
      >
        <h1 className="text-3xl md:text-5xl text-bold font-pacifico">
          Le plaisir avec grace
        </h1>
        <p className="mx-0 mt-4 mb-8 text-base md:text-xl">
          Des gateaux qui font sourire
        </p>
        <Button variant="solid" colorScheme="pink">
          Voir le menu
        </Button>
      </motion.div>
    </Section>
  );
}
