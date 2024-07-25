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
    <Section id="contact" className="w-full flex flex-col items-center">
      <Title title="Contactez-Nous !" />
      <div className="w-[90%} flex flex-col ">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel></FormLabel>
              <Input />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </VStack>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
