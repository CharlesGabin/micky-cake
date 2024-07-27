import { motion } from "framer-motion";

const Title = (props: { title: string }) => {
  return (
    <motion.div
      className="pt-4 px-4 w-[90%]"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: false }}
    >
      <h1 className="font-pacifico md:text-4xl text-3xl underline text-primary-color2 pb-4">
        {props.title}
      </h1>
    </motion.div>
  );
};

export default Title;
