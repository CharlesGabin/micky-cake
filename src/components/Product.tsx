import {
  Button,
  // ButtonGroup,
  Card,
  CardBody,
  // CardFooter,
  // Divider,
  Image,
  Stack,
} from "@chakra-ui/react";
import Section from "./Section";
import { products } from "../data/produits";
import Title from "./Title";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <Section id="products" className=" w-full flex flex-col items-center">
      <Title title="Nos Produits" />
      <motion.div
        className="pt-4 px-4 w-[90%] pb-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="w-full h-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4">
          {products.map((product, index) => {
            return (
              <Card
                // maxW="auto"
                // height={400}
                key={index}
                className="shadow-3xl"
              >
                <CardBody>
                  <div className="overflow-hidden max-w-sm rounded shadow-lg">
                    <Image
                      className="hover:scale-125 transition-all w-full h-52 object-cover"
                      src={product.image}
                      alt="image"
                      borderRadius="lg"
                    />
                  </div>
                  <Stack mt="6" spacing="3">
                    <span className="text-2xl font-lato font-bold">
                      {product.name}
                    </span>
                    <p className="font-lato font-light text-pink-950">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold" color="pink.600">
                      {product.price} FCFA
                    </p>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: false }}
          className="font-lato font-ligth text-lg mt-4 flex flex-col items-center justify-center gap-4"
        >
          Voulez-vous en savoir plus ?
          <Button variant="solid" colorScheme="pink">
            <a href="#contact" className="font-lato font-light">
              Nous Contacter
            </a>
          </Button>{" "}
        </motion.p>
      </motion.div>
    </Section>
  );
}
