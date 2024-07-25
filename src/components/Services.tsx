import { services } from "../data/produits";
import Section from "./Section";
import Title from "./Title";

const Services = () => {
  return (
    <Section
      id="service"
      className="w-full flex flex-col items-center bg-purple-100"
    >
      <Title title="Nos Services" />
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-8 items-center justify-between pt-4">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col items-center bg-purple-100 justify-center mb-8 h-48"
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
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
