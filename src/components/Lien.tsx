import clsx from "clsx";
import { LI } from "../data/produits";

const Lien: React.FC<{
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsMobileMenuOpen }) => {
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
    setIsMobileMenuOpen(false);
    if (active) {
      active = !active;
    }
  };

  const tabLI = LI.map((lien) => {
    return (
      <li>
        <a
          key={lien.id}
          href={`#${lien.path}`}
          onClick={(event) => handleScroll(event, lien.path, lien.active)}
          className={clsx(
            "px-2 py-4 text-secondary-color1 hover:text-primary-color2",
            {
              "text-primary-color2 border-b-2 border-primary-color2":
                lien.active === true,
            }
          )}
        >
          {lien.name}{" "}
        </a>
      </li>
    );
  });

  return <ul className="flex flex-col md:flex-row">{tabLI}</ul>;
};

export default Lien;
