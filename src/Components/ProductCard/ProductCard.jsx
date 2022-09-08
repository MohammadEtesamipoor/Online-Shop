import { Link } from "react-router-dom";
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
  ButtonGroup
} from "@chakra-ui/react";
import { useState } from "react";
export function ProductCard({ itemProduct, itemCategory }) {
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
        transform: "translateY(-10px)",
        boxShadow: "3xl",
      }}
      role={"group"}
      p={6}
      maxW={"30%"}
      w={"full"}
      boxShadow="xs"
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      bg="#c1c6d421 "
      color="#2c2c2c"
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(http://localhost:3001/files/${itemProduct.images[hoverImgProduct]})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Box>
          <Link to={`product/${itemProduct.id}`}>
            <div
              style={{
                backgroundImage: `url(http://localhost:3001/files/${itemProduct.images[hoverImgProduct]})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: " contain, cover",
                backgroundPosition: "bottom",
                width: "282px",
                height: "230px",
                transform:
                  hoverImgProduct === 0 ? "rotate(0deg)" : "rotate(0deg)",
              }}
            ></div>
          </Link>
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
                    <ButtonGroup flexWrap="wrap" gap="10px" size="sm" isAttached variant="outline">
                      {
                        itemProduct.checkSize.map(sizeShoes=>(
                         <Button
                         onClick={() =>
                          dispatch({
                            type: ADD_CART,
                            paylad: {
                              id: itemProduct.id,
                              sizeShoes:sizeShoes
                            },
                          })
                        }
                         >{sizeShoes}</Button>
                        ))
                      }
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
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {itemCategory["name-fa"]}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {itemProduct["product-name-fa"]}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Box
              shop
              _hover={{
                transform: "translateY(10px)",
                color: "#6a64c4",
              }}
            >
              <FaShoppingCart fontSize="50px" />
            </Box>
            <Text as={'b'} color={"gray.800"}>
              {formatter.format(itemProduct["price"])}{" "}
                      <span style={{ fontSize: "8px" }}>ريال</span>
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
            {formatter.format(itemProduct["price"] * 1.1)}{" "}
            <span style={{ fontSize: "8px" }}>ريال</span>
            </Text>
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
                  backgroundImage: `url(http://localhost:3001/files/${img})`,
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
