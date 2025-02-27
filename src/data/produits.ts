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

export const services = [
  {
    id: 1,
    icon_url: "https://img.icons8.com/fluency/48/000000/restaurant-table.png",
    service_name: "Restauration",
    description:
      "Services de restauration complets pour les mariages, les événements d'entreprise et les fêtes privées.",
  },
  {
    id: 2,
    icon_url: "https://img.icons8.com/fluency/48/000000/bakery.png",
    service_name: "Pâtisserie",
    description:
      "Du pain, des pâtisseries et des gâteaux fraîchement sortis du four et préparés chaque jour avec des ingrédients de haute qualité.",
  },
  {
    id: 3,
    icon_url: "https://img.icons8.com/fluency/48/000000/birthday-cake.png",
    service_name: "Gâteaux personnalisés",
    description:
      "Gâteaux conçus sur mesure pour les anniversaires, les mariages et les occasions spéciales.",
  },
  {
    id: 4,
    icon_url: "https://img.icons8.com/fluency/48/000000/delivery-scooter.png",
    service_name: "Livraison",
    description:
      "Service de livraison pratique de nos produits de boulangerie et de restauration directement à votre porte.",
  },
  {
    id: 5,
    icon_url: "https://img.icons8.com/fluency/48/000000/dining-room.png",
    service_name: "Restauration privée",
    description:
      "Des expériences exclusives de restauration privée avec des menus personnalisés et un service exceptionnel.",
  },
  {
    id: 6,
    icon_url: "https://img.icons8.com/fluency/48/000000/dessert.png",
    service_name: "Table à dessert",
    description:
      "Des tables de desserts joliment disposées avec une variété de douceurs pour vos événements.",
  },
  {
    id: 7,
    icon_url: "https://img.icons8.com/fluency/48/000000/wedding-cake.png",
    service_name: "Services de mariage",
    description:
      "Services complets pour les mariages, y compris les gâteaux, la restauration et la coordination de l'événement.",
  },
];

export const LI = [
  {
    id: 1,
    path: "home",
    name: "Accueil",
    active: false,
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
    name: "A propos",
    active: false,
  },
  {
    id: 6,
    path: "contact",
    name: "Contact",
    active: false,
  },
];
