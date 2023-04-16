import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ADD_CART } from "store/type/BasketType";
import {
  Box,
  Skeleton,
  SkeletonText,
  Heading,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Tooltip,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { addTOBasket } from "store/action/setCategory";
import { BASE_URL } from "Configs/variable.config";
export function ProductCard({ itemProduct, nameCategory }) {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  const [hoverImgProduct, setHoverImgProduct] = useState(0);
  const handelMouseOver = () => {
    hoverImgProduct === 0 && setHoverImgProduct(1);
  };
  const handelMouseOut = () => {
    hoverImgProduct !== 0 && setHoverImgProduct(0);
  };
  const handelHoverImg = (index) => {
    index && setHoverImgProduct(index);
  };

  return (
    <Box
      onMouseEnter={handelMouseOver}
      onMouseLeave={handelMouseOut}
      _hover={{
        // transform: "translateY(+30px)",
        boxShadow: "3xl",
      }}
      role={"group"}
      p={8}
      maxH={"280px"}
      // maxW={{ base:"190px",sm:'240px'}}
      mx="10px"
      minH={"280px"}
      maxW={{md:"280px"}}
      minW={{md:"280px"}}

      // minW={{ base:"190px",sm:'240px'}}
      boxShadow="xs"
      rounded={"md"}
      pos={"relative"}
      zIndex={1}
      bg="#E4E4E4"
      color="#2c2c2c"
    >
      <Box
        rounded={"md"}
        mt={-12}
        pos={"relative"}
        maxH={"100px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 0,
          left: 0,
          backgroundImage: `url(${BASE_URL}/files/${itemProduct.images[hoverImgProduct]})`,
          filter: "blur(20px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Box>

            <Box
            onClick={()=>{
              navigate(`/product/${itemProduct.id}`, {replace: true})
            }
              //  redirect(`product/${itemProduct.id}`)
              }
            width="100%" display="flex" justifyContent="center">
              <div
                style={{
                  backgroundImage: `url(${BASE_URL}/files/${itemProduct.images[hoverImgProduct]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: " contain, cover",
                  backgroundPosition: "bottom",
                  width: "130px",
                  marginTop: "10px",
                  height: "130px",
                  transform:
                    hoverImgProduct === 0 ? "rotate(0deg)" : "rotate(0deg)",
                }}
              ></div>
            </Box>
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
                <PopoverContent borderColor="gray.100">
                  <PopoverHeader mr="25px" fontWeight="semibold">
                    انتخاب سایز کفش
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <ButtonGroup
                      flexWrap="wrap"
                      gap="10px"
                      size="sm"
                      isAttached
                      variant="outline"
                    >
                      {itemProduct.checkSize.map((sizeShoes) => (
                        <Button
                          onClick={() =>
                            dispatch(addTOBasket(itemProduct.id,sizeShoes))
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
        </Box>
      </Box>
      {hoverImgProduct === 0 ? (
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} display={{base:'none',sm:'inline'}} fontSize={"sm"} textTransform={"uppercase"}>
            {nameCategory}
          </Text>
          <Text textAlign="center"  as='b' fontSize={{base:"xs",sm:'md'}} fontFamily={"body"} fontWeight={900}>
            {itemProduct["product-name-fa"]}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Box
             
              _hover={{
                transform: "translateY(10px)",
                color: "#6a64c4",
              }}
            >
              {/* <FaShoppingCart fontSize="50px" /> */}
            </Box>
            <Flex flexDirection="column" gap="1">
            <Text textAlign="center"  fontSize={{base:"xs",sm:'md'}} textDecoration={"line-through"} color={"gray.600"}>
              {formatter.format(itemProduct["price"] * 1.1)}{" "}
              <span style={{ fontSize: "8px" }}>ريال</span>
            </Text>
            <Text textAlign="center"  fontSize={{base:"xs",sm:'md'}}  as={"b"} color={"gray.800"}>
              {formatter.format(itemProduct["price"])}{" "}
              <span style={{ fontSize: "8px" }}>ريال</span>
            </Text>

            </Flex>
          </Stack>
        </Stack>
      ) : (
        <Stack
          display="flex"
          justifyContent="center"
          flexDirection="row"
          gap="8px"
          pt={20}
          align={"center"}
        >
          {itemProduct.images.map((img, index) => (
            <Box
              onClick={() => handelHoverImg(index)}
              width="50px"
              height="50px"
              border="1px"
              borderColor="gray.200"
            >
              <div
                style={{
                  backgroundImage: `url(${BASE_URL}/files/${img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: " contain, cover",
                  backgroundPosition: "bottom",
                  width: "100%",
                  height: "100%",
                  transform:
                    hoverImgProduct === 0 ? "rotate(-40deg)" : "rotate(0deg)",
                }}
              ></div>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
}
