import { useParams } from "react-router-dom";
import { ADD_CART } from "store/type/BasketType";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import { useDispatch } from "react-redux";
import "swiper/css/effect-cards";

import styles from "./styles.module.css";

// import required modules
import { EffectCards } from "swiper";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

import { useState, useEffect } from "react";
import { GetProducts } from "apis/ApiProduct";
import { addTOBasket } from "store/action/setCategory";
export function ProductPage() {
  const [hoverImgProduct, setHoverImgProduct] = useState(1);
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  const handelMouseOver = () => {
    hoverImgProduct === 0 && setHoverImgProduct(1);
  };
  const handelMouseOut = () => {
    hoverImgProduct !== 0 && setHoverImgProduct(0);
  };
  const { productId } = useParams();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await GetProducts().then((res) => {
        const test = res.data.filter((item) => item.id == productId);
        setProductData(test);
      });
    };
    fetchData();
    console.log(productData);
  }, []);
  return (
    <Box overflowX={"hidden"} color="#2c2c2c">
      {productData ? (
        <Container maxW={"5xl"}>
          <Flex
            flexDirection={{base:"column",md:'row'}}
            py={{ base: 24, md: 24 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Box mx="50px">
                <Swiper
                  dir="ltr"
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className={styles.swiper}
                >
                  {productData[0].images.map((item) => (
                    <SwiperSlide  style={{width: "220px",height:'320px'}} className={styles.swiperSlide}>
                      <div
                        style={{
                          backgroundImage: `url(http://localhost:3001/files/${item})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: " contain, cover",
                          backgroundPosition: "center",
                          transform: "rotate(-45deg)",
                        }}
                      ></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Flex>
            <Box style={{marginTop:'100px'}}>
              <Stack spacing={{ base: 2 }}>
                <Box as={"header"}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  >
                    {productData[0]["product-name-fa"]}
                  </Heading>
                  <Text fontWeight={700} fontSize={"2xl"} marginTop="15px">
                    قیمت: {formatter.format(productData[0]["price"])} ریال
                  </Text>
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 4 }}
                  direction={"column"}
                  divider={<StackDivider />}
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text fontSize={"lg"}>
                      {productData[0]["description"].fa}
                    </Text>
                  </VStack>
                  <Stack
                    spacing={{ base: 1, sm: 1 }}
                    direction={"column"}
                    divider={<StackDivider />}
                  >
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "24px" }}
                        fontWeight={"800"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        سایز های موجود
                      </Text>
                      {productData[0].checkSize.map((sizeShoe) => (
                        <Box
                          fontSize={{ base: "16px", lg: "18px" }}
                          fontWeight={"400"}
                          textTransform={"uppercase"}
                          mb={"4"}
                          p={"5px"}
                          display="inline"
                          bg="gray.100"
                          color="gray.700"
                        >
                          {sizeShoe}
                        </Box>
                      ))}
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "24px" }}
                        fontWeight={"800"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        موجودی
                      </Text>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        fontWeight={"400"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        {productData[0]["count"]} عدد
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "24px" }}
                        fontWeight={"800"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        توضیحات
                      </Text>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        fontWeight={"400"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        {productData[0]["description"]}
                      </Text>
                    </Box>
                    {/* 
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
                  </List> */}
                  </Stack>
                </Stack>

                {hoverImgProduct !== 0 ? (
                  <Box display="flex" justifyContent="center">
                    <Popover isLazy>
                      <PopoverTrigger>
                        <Button
                          leftIcon={<FaPlus fontSize="20px" />}
                          bg="white"
                          color="#666666"
                          variant="outline"
                          borderColor="#96969652"
                          filter="blur(0.4px)"
                        >
                          افزودن به سبد خرید
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent bg="gray.300" borderColor="gray.100">
                        <PopoverHeader
                          bg="gray.300"
                          color="gray.700"
                          mr="25px"
                          fontWeight="semibold"
                        >
                          انتخاب سایز کفش
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody bg="gray.200">
                          <ButtonGroup
                            flexWrap="wrap"
                            gap="10px"
                            size="sm"
                            isAttached
                            variant="outline"
                          >
                            {productData[0].checkSize.map((sizeShoes) => (
                              <Button
                                bg="white"
                                onClick={() =>
                                  dispatch(
                                    addTOBasket(productData[0].id, sizeShoes)
                                  )
                                }
                              >
                                {sizeShoes}
                              </Button>
                            ))}
                          </ButtonGroup>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                ) : null}
              </Stack>
            </Box>
          </Flex>
        </Container>
      ) : (
        "Loading"
      )}
    </Box>
  );
}
