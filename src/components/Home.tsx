import { Button } from "@chakra-ui/react";
import Section from "./Section";

export default function Home() {
  return (
    <Section
      id="home"
      className="flex items-center bg-opacity-25 pl-4 md:pl-0 justify-start md:justify-center bg-Home bg-no-repeat bg-right bg-cover"
    >
      <div className="flex initials flex-col justify-start items-start md:justify-center md:items-center">
        <h1 className="text-3xl hidden md:block md:text-5xl text-bold font-pacifico">
          Le plaisir avec grace
        </h1>
        <h1 className="text-3xl block md:hidden md:text-5xl text-bold font-pacifico">
          Le plaisir <br /> avec grace
        </h1>
        <p className="mx-0 mt-4 mb-8 text-base md:text-xl">
          Des gateaux qui font sourire
        </p>
        <Button variant="solid" colorScheme="pink">
          Voir le menu
        </Button>
      </div>
    </Section>
  );
}
