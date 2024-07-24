import { services } from "../data/produits";
import Section from "./Section";

const Services = () => {
  return (
    <Section
      id="service"
      className=" w-full flex flex-col items-center bg-purple-100"
    >
      <div className="pt-20 px-4 w-[90%]">
        <h1 className="font-pacifico md:text-4xl text-3xl underline text-primary-color2 pb-4">
          Nos Services
        </h1>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-4 md:gap-0 gap-8 items-center justify-between mt-[50px]">
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
      {/* <div className="flex flex-col md:flex-row flex-grow w-full">
        <div className="pt-5 px-4 w-full flex-grow bg-purple-100">
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/plasticine/100/pie.png"
            alt="pie"
          />
          <h1 className="font-pacifico md:text-3xl text-2xl underline text-primary-color2 pb-4">
            Patisserie
          </h1>
        </div>
        <div className="pt-5 px-4 w-full flex-grow bg-blue-100 ">
          <h1 className="font-pacifico md:text-3xl text-2xl underline text-primary-color2 pb-4">
            Restauration
          </h1>
        </div>
      </div> */}
    </Section>
  );
};

export default Services;
