// import React from "react";
import { useFormik } from "formik";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import Section from "./Section";
import Title from "./Title";
import { motion } from "framer-motion";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Section
      id="contact"
      className="w-full flex flex-col gap-8 items-center bg-purple-100 pb-12"
    >
      <Title title="Contactez-Nous !" />
      <motion.div
        className="w-[90%] px-4 items-start  flex-grow justify-start flex flex-col border-2 border-purple-500 rounded-lg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col items-start "
        >
          <VStack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="nom">Nom</FormLabel>
              <Input name="nom" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="prenom">Prenom</FormLabel>
              <Input name="prenom" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="number">Numero de telephone</FormLabel>
              <Input type="tel" name="number" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </VStack>
        </form>
      </motion.div>
    </Section>
  );
};

export default Contact;
