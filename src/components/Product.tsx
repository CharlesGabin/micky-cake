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
import { motion } from "framer-motion";

export default function Product() {
  return (
    <Section
      id="products"
      className="bg-white-200 w-full mt-18 flex flex-col items-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="font-pacifico text-4xl text-primary-color2 p-8">
          Nos Produits
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4">
          <Card maxW="auto">
            <CardBody>
              <div className="overflow-hidden">
                <Image
                  className="hover:scale-125 transition-all "
                  src="./hero-bg.jpg"
                  alt="image"
                  borderRadius="lg"
                />
              </div>
              <Stack mt="6" spacing="3">
                <Heading size="md">Pink Cake</Heading>
                <Text className="text-md">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam quibusdam soluta tempora est inventore tenetur.
                </Text>
                <Text fontSize="2xl" color="pink.600">
                  20000XAF
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
          <Card maxW="auto" flex="1 0 1">
            <CardBody>
              <Image src="./hero-bg.jpg" alt="image" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Pink Cake</Heading>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam quibusdam soluta tempora est inventore tenetur.
                </Text>
                <Text color="pink.600" fontSize="2xl">
                  20000XAF
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
          <Card maxW="auto" flex="1 0 1">
            <CardBody>
              <Image src="./hero-bg.jpg" alt="image" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Pink Cake</Heading>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam quibusdam soluta tempora est inventore tenetur.
                </Text>
                <Text color="pink.600" fontSize="2xl">
                  20000XAF
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
          <Card maxW="auto" flex="1 0 1">
            <CardBody>
              <Image src="./hero-bg.jpg" alt="image" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Pink Cake</Heading>
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam quibusdam soluta tempora est inventore tenetur.
                </Text>
                <Text color="pink.600" fontSize="2xl">
                  20000XAF
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
        </div>
      </motion.div>
    </Section>
  );
}
