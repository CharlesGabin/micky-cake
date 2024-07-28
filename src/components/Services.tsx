import { services } from "../data/produits";
import Section from "./Section";
import Title from "./Title";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Section
      id="service"
      className="w-full flex flex-col items-center gap-16 bg-purple-100"
    >
      <Title title="Nos Services" />
      <div className="justify-center">
        <motion.div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-8 items-center justify-between pt-4">
          {services.map((service) => {
            return (
              <motion.div
                key={service.id}
                className="flex flex-col items-center bg-purple-100 justify-center mb-8 h-48"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <img
                  height="100"
                  src={service.icon_url}
                  alt={service.service_name}
                />
                <span className="font-lato text-[28px] text-center  text-primary-color2 pb-4">
                  {service.service_name}
                </span>
                <p className="text-center text-secondary-color1 font-light font-lato max-w-[314px] ">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
