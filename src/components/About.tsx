// import React from "react";
import image from "../assets/images/about-image.png";

import { Image } from "@chakra-ui/react";
import Section from "./Section";
import Title from "./Title";

const About = () => {
  return (
    <Section
      id="about"
      className="w-full flex flex-col items-center justify-center"
    >
      <Title title="À Propos De Nous ! " />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] flex md:flex-row flex-col gap-4 items-center justify-center">
          <div className="flex flex-1 w-full shadow-xl h-96 bg-white">
            <Image
              src={image}
              alt="about"
              className="w-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-1 h-96 gap-8 w-full rounded-lg bg-purple-100 p-4 shadow-xl">
            <span className="font-pacifico md:text-3xl text-2xl">
              Les Gracieux Gourmets de Micki
            </span>
            <p className="font-lato font-light text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              labore accusantium blanditiis eveniet, quibusdam voluptatum non
              voluptatibus iste veritatis voluptate commodi quam inventore
              suscipit quo laborum amet aliquid. Earum nesciunt ipsum corporis
              dolorem ullam iste fugit cumque omnis eos non deleniti similique
              quam, aperiam hic enim recusandae mollitia error. Voluptatibus!
            </p>
            <span className="font-pacifico font-light md:text-2xl text-xl">
              Opening Hours:
            </span>
            <div className="flex justify-between md:w-[50%] w-full font-lato">
              <p>Sunday - Friday:</p>
              <p className="text-primary-color2">10:00 AM - 6:00 PM</p>
            </div>
            <div className="flex justify-around gap-4"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
