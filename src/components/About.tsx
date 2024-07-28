// import React from "react";
import image from "../assets/images/about-image.png";

import { Image } from "@chakra-ui/react";
import Section from "./Section";
import Title from "./Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about" className="w-full flex flex-col items-center pb-12">
      <Title title="À Propos De Nous ! " />
      <div className="w-full px-4 flex-grow flex flex-col items-center justify-center">
        <div className="w-[90%] flex md:flex-row flex-col gap-4 items-center justify-center">
          <motion.div
            className="flex flex-1 w-full md:rounded-none md:h-96 h-56 rounded-lg md:shadow-none shadow-xl md:bg-pink-50 bg-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <Image src={image} alt="about" className="w-full object-contain" />
          </motion.div>
          <motion.div
            className="flex flex-col flex-1  md:gap-8 gap-4 w-full rounded-lg bg-purple-100 p-4 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <span className="font-pacifico md:text-3xl text-2xl text-secondary-color2">
              Les Gracieux Gourmets de Micki
            </span>
            <p className="font-lato font-light text-md">
              est une entreprise de pâtisserie qui se distingue par ses produits
              raffinés et personalisés; son service attentionné et son
              engagement envers la qualité. Si vous recherchez des desserts
              délicieux et uniques pour votre prochain évènement, n'hésitez pas
              à nous contacter !
            </p>
            <span className="font-pacifico font-light md:text-2xl text-xl text-secondary-color2">
              Service disponible du :
            </span>
            <div className="flex justify-between md:w-[50%] w-full font-lato">
              <p>Dimanche - Vendredi :</p>
              <p className="text-primary-color2">10:00 AM - 6:00 PM</p>
            </div>
            <div className="flex justify-around gap-4"></div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
