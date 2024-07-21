import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export default function Lien() {
  const location = useLocation();
  const LI = [
    {
      id: 1,
      path: "/",
      name: "Accueil",
    },
    {
      id: 2,
      path: "/products",
      name: "Produits",
    },
    {
      id: 3,
      path: "/#service",
      name: "Services",
    },
    {
      id: 4,
      path: "/#autres",
      name: "Autres",
    },
    {
      id: 5,
      path: "/#contact",
      name: "Contact",
    },
    {
      id: 6,
      path: "/#about",
      name: "About us",
    },
  ];

  const tabLI = LI.map((lien) => {
    return (
      <li
        key={lien.id}
        className={clsx(
          "px-2 py-4 text-secondary-color1 hover:text-primary-color2",
          {
            "text-primary-color2 border-b-2 border-primary-color2":
              location.pathname === `${lien.path}`,
          }
        )}
      >
        <Link to={lien.path}>{lien.name}</Link>
      </li>
    );
  });

  return <ul className="flex flex-col md:flex-row">{tabLI}</ul>;
}
