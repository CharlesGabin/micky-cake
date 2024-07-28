// import React from 'react'
import { LI } from "../data/produits";
import clsx from "clsx";
import { LocationSharp } from "react-ionicons";

const Footer = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
    active: boolean
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    console.log(active);
  };
  return (
    <div
      id="contact"
      className="flex md:flex-row flex-grow md:justify-between flex-col md:gap-4 gap-8  h-auto items-center bg-white-100 text-pink-950 px-4 py-4"
    >
      <div>
        <span className="font-pacifico ms:text-md text-lg">
          Les Gracieux Gourmets de Micki
        </span>
      </div>
      <div className="flex md:flex-row flex-col md:gap-8 gap-8">
        <div className="font-lato flex md:flex-row flex-col items-center gap-4">
          <div>
            <h3>Menu</h3>
          </div>
          <div className="flex gap-4 md:border-l-4 md:border-t-0 border-t-4 border-pink-950 pl-4">
            {LI.map((lien) => {
              console.log(lien.active);
              return (
                <li key={lien.id}>
                  <a
                    href={`#${lien.path}`}
                    onClick={(event) =>
                      handleScroll(event, lien.path, lien.active)
                    }
                    className={clsx(
                      " py-4 text-pink-950 font-lato font-light hover:text-primary-color2",
                      {
                        "text-primary-color2 border-b-1 border-primary-color2":
                          lien.active === true,
                      }
                    )}
                  >
                    {lien.name}{" "}
                  </a>
                </li>
              );
            })}
          </div>
        </div>
        <div className="font-lato flex md:flex-row flex-col items-center gap-4">
          <div>
            <h3>Contact</h3>
          </div>
          <div className="flex flex-col md:border-l-4 md:border-t-0 border-t-4 border-pink-950 pl-4">
            <span className="font-lato font-light">
              +237 690507469 | +237 653058622
            </span>
            <span className="font-lato font-light">
              michaelgabrielle14@gmail.com
            </span>
          </div>
        </div>
        <div className="font-lato flex md:flex-row flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <LocationSharp
              color={"#470000"}
              title=""
              height="15px"
              width="15px"
            />
            <h3>Adresse</h3>
          </div>
          <div className="flex flex-col md:border-l-4 md:border-t-0 border-t-4 border-pink-950 pl-4">
            <span className="font-lato font-light">
              Yaounde, Center Region, Cameroon
            </span>
          </div>
        </div>
        {/* <div>Reseaux Sociaux</div>   */}
      </div>
    </div>
  );
};

export default Footer;
