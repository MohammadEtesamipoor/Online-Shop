import { useParams } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useState, useEffect } from "react";
import { GetProducts } from "apis/ApiProduct";
export function ProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await GetProducts().then((res) => {
        const test = res.data.filter((item) => item.id == productId);
        setProductData(test);
        console.log(productData[0].images);
      });
    };
    fetchData();
  }, []);
  return (
    <Box color="#2c2c2c">
      {productData ? (
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Box>
                <div
                  style={{
                    backgroundImage: `url(http://localhost:3001/files/${productData[0].images[0]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: " contain, cover",
                    backgroundPosition: "bottom",
                    width: "282px",
                    height: "230px",
                  }}
                ></div>
              </Box>
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {productData[0]["product-name-fa"]}
                </Heading>
                <Text fontWeight={700} fontSize={"3xl"} marginTop="10px">
                  {productData[0]["price"]} تومان
                </Text>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"}>
                    {productData[0]["description"].fa}
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    مشخصات فنی
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        کشور سازنده:
                      </Text>{" "}
                      {
                        productData[0]["technical-specifications"][
                          "manufacturer-country"
                        ]
                      }
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        سال (طراحی):
                      </Text>{" "}
                      {
                        productData[0]["technical-specifications"][
                          "year-design"
                        ]
                      }
                    </ListItem>
                  </List>
                </Box>
              </Stack>

              <Button
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg="#bfa9f3cf"
                color="white"
                boxShadow="2xl"
                p="6"
                rounded="md"
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "2xl",
                }}
              >
                <Box ml="10px" dir="ltr">
                  <NumberInput
                    size="xs"
                    maxW={16}
                    defaultValue={1}
                    min={1}
                    max={5}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
                افزودن به سبد خرید
              </Button>
            </Stack>
          </SimpleGrid>
        </Container>
      ) : (
        "Loading"
      )}
    </Box>
  );
}
