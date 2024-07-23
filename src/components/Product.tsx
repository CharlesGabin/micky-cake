import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Section from "./Section";
import { products } from "../data/produits";

export default function Product() {
  return (
    <Section
      id="products"
      className="bg-pink-50 w-full flex flex-col items-center"
    >
      <div className="py-20 px-4 w-[90%]">
        <h1 className="font-pacifico md:text-4xl text-3xl text-primary-color2 pb-4">
          Nos Produits
        </h1>
        <div className="w-full h-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4">
          {products.map((product, index) => {
            return (
              <Card maxW="auto" height={500} key={index}>
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
                    <Heading size="md">{product.name}</Heading>
                    <Text className="text-md">{product.description}</Text>
                    <Text fontSize="2xl" color="pink.600">
                      {product.price} FCFA
                    </Text>
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
