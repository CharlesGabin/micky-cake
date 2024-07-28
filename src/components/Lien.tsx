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
    if (active || !active) {
      active = !active;
    }
    console.log(active);
  };

  const tabLI = LI.map((lien) => {
    console.log(lien.active);

    return (
      <li key={lien.id}>
        <a
          href={`#${lien.path}`}
          onClick={(event) => handleScroll(event, lien.path, lien.active)}
          className={clsx(
            "px-2 py-4 text-pink-950 hover:text-primary-color2 font-lato",
            {
              "text-primary-color2 border-b-1 border-primary-color2":
                lien.active === true,
            }
            // {
            //   "bg-pink-500 hover:bg-pink-700 hover:text-white text-white my-4 font-lato py-1 px-2 rounded-2xl cursor-pointer":
            //     lien.name === "Contact",
            // }
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
