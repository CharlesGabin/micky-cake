import Section from "./Section";
import Title from "./Title";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="w-full flex flex-col gap-8 items-center bg-purple-100 pb-12"
    >
      <Title title="Contactez-Nous !" />
      <motion.div
        className="w-[90%] px-4 items-start flex-grow justify-start flex flex-col rounded-lg"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
      ></motion.div>
    </Section>
  );
};

export default Contact;
