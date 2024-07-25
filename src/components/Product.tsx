import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
} from "@chakra-ui/react";
import Section from "./Section";
import { products } from "../data/produits";
import Title from "./Title";

export default function Product() {
  return (
    <Section id="products" className=" w-full flex flex-col items-center">
      <Title title="Nos Produits" />
      <div className="pt-4 px-4 w-[90%] pb-8">
        <div className="w-full h-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4">
          {products.map((product, index) => {
            return (
              <Card maxW="auto" height={500} key={index} className="shadow-3xl">
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
                    <p className="font-lato font-light">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold" color="pink.600">
                      {product.price} FCFA
                    </p>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="pink">
                      Buy Now
                    </Button>
                    <Button variant="ghost" colorScheme="pink">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
