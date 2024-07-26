import clsx from "clsx";

const Lien: React.FC<{
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsMobileMenuOpen }) => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const LI = [
    {
      id: 1,
      path: "home",
      name: "Accueil",
      active: true,
    },
    {
      id: 2,
      path: "products",
      name: "Produits",
      active: false,
    },
    {
      id: 3,
      path: "service",
      name: "Services",
      active: false,
    },
    {
      id: 5,
      path: "about",
      name: "About us",
      active: false,
    },
    {
      id: 6,
      path: "contact",
      name: "Contact",
      active: false,
    },
  ];

  const tabLI = LI.map((lien) => {
    return (
      <li
        className={clsx(
          "px-2 py-4 text-secondary-color1 hover:text-primary-color2",
          {
            "text-primary-color2 border-b-2 border-primary-color2":
              lien.active === true,
          }
        )}
      >
        <a
          key={lien.id}
          href={`#${lien.path}`}
          onClick={(event) => handleScroll(event, lien.path)}
        >
          {lien.name}{" "}
        </a>
      </li>
    );
  });

  return <ul className="flex flex-col md:flex-row">{tabLI}</ul>;
};

export default Lien;
