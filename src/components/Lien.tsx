import clsx from "clsx";

export default function Lien() {
  const LI = [
    {
      id: 1,
      path: "#home",
      name: "Accueil",
      active: true,
    },
    {
      id: 2,
      path: "#products",
      name: "Produits",
      active: false,
    },
    {
      id: 3,
      path: "#service",
      name: "Services",
      active: false,
    },
    {
      id: 5,
      path: "#contact",
      name: "Contact",
      active: false,
    },
    {
      id: 6,
      path: "#about",
      name: "About us",
      active: false,
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
              lien.active === true,
          }
        )}
      >
        <a href={lien.path}>{lien.name} </a>
      </li>
    );
  });

  return <ul className="flex flex-col md:flex-row">{tabLI}</ul>;
}
