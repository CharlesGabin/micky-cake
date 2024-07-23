import ChocoCake from "../assets/images/chocoCake.jpg";
import TarteFraises from "../assets/images/tarte-fraise.jpg";
import PouletYassa from "../assets/images/yassa-poulet.jpg";
import BoeufMafe from "../assets/images/mafe-boeuf.jpg";
import RedVelvet from "../assets/images/red-velvet.jpg";
import Alloco from "../assets/images/alloco.jpg";
import Thieboudienne from "../assets/images/Thieboudienne.jpg";
import NoixCake from "../assets/images/cake-noix.jpg";

export const products = [
  {
    name: "Gâteau au Chocolat",
    image: `${ChocoCake}`,
    description: "Délicieux gâteau au chocolat avec une garniture fondante.",
    price: 15.0 * 656,
  },
  {
    name: "Tarte aux Fraises",
    image: `${TarteFraises}`,
    description: "Tarte sucrée garnie de fraises fraîches et de crème.",
    price: 12.0 * 656,
  },
  {
    name: "Poulet Yassa",
    image: `${PouletYassa}`,
    description:
      "Poulet mariné avec des oignons, des poivrons et des épices africaines.",
    price: 18.0 * 656,
  },
  {
    name: "Boeuf Mafé",
    image: `${BoeufMafe}`,
    description: "Ragoût de boeuf en sauce d'arachide avec des légumes.",
    price: 20.0 * 656,
  },
  {
    name: "Gâteau Red Velvet",
    image: `${RedVelvet}`,
    description:
      "Gâteau moelleux avec une texture veloutée et un glaçage crémeux.",
    price: 16.0 * 656,
  },
  {
    name: "Alloco",
    image: `${Alloco}`,
    description: "Bananes plantains frites servies avec une sauce pimentée.",
    price: 8.0 * 656,
  },
  {
    name: "Thiéboudienne",
    image: `${Thieboudienne}`,
    description:
      "Plat traditionnel sénégalais à base de poisson, riz et légumes.",
    price: 22.0 * 656,
  },
  {
    name: "Gâteau à la Noix de Coco",
    image: `${NoixCake}`,
    description:
      "Gâteau moelleux à la noix de coco avec une touche de vanille.",
    price: 14.0 * 656,
  },
];
