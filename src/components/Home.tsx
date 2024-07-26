import { Button } from "@chakra-ui/react";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Section
      id="home"
      className="flex items-center bg-opacity-25 pl-4 md:pl-0 justify-start md:justify-center bg-Home bg-no-repeat bg-right bg-cover"
    >
      <motion.div
        className="flex flex-col justify-start items-start md:justify-center md:items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        <h1 className="text-3xl hidden md:block md:text-5xl text-bold font-pacifico">
          Les Gracieux Gourmets de Micki
        </h1>
        <h1 className="text-3xl block md:hidden md:text-5xl text-bold font-pacifico tracking-tight">
          Les Gracieux Gourmets <br /> de Micki
        </h1>
        <p className="mx-0 mt-4 mb-8 text-base md:text-xl">
          Le plaisir avec grace
        </p>
        <Button variant="solid" colorScheme="pink">
          En Savoir Plus
        </Button>
      </motion.div>
    </Section>
  );
}
