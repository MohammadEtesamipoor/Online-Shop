import { Link } from "react-router-dom";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
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
} from "@chakra-ui/react";
import { useState } from "react";
export function ProductCard({ itemProduct, itemCategory }) {
  console.log("test")
  const [hoverImgProduct, setHoverImgProduct] = useState(0);
  const handelMouseOver = () => {
    hoverImgProduct === 0 && setHoverImgProduct(1);
  };
  const handelMouseOut = () => {
    hoverImgProduct !== 0 && setHoverImgProduct(0);
  };
  const handelHoverImg=(index)=>{
    index&&setHoverImgProduct(index)
  }
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
                  hoverImgProduct === 0 ? "rotate(-40deg)" : "rotate(0deg)",
              }}
            ></div>
          </Link>
          {hoverImgProduct !== 0 ? (
            <Box display="flex" justifyContent="center">
              <Button
                leftIcon={<FaPlus fontSize="20px" />}
                bg="white"
                color="#666666"
                variant="outline"
                borderColor="#96969652"
                filter="blur(0.4px)"
              >
                اضافه کردن به سبد خرید
              </Button>
            </Box>
          ) : null}
        </Box>
      </Box>
      {hoverImgProduct === 0 ? (
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {itemCategory["name-en"]}
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
            <Text fontWeight={800} fontSize={"xl"}>
              {itemProduct["price"]}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {itemProduct["price"] * 1.2}
            </Text>
          </Stack>
        </Stack>
      ) : (
        <Stack display="flex" justifyContent="center" flexDirection="row" gap="8px" pt={20} align={"center"}>
         {
          itemProduct.images.map((img,index)=>(
         <Box
         onClick={()=>handelHoverImg(index)}
         width="50px" height="50px" border="1px" borderColor="gray.200">
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
          ))
         } 
        </Stack>
      )}
    </Box>
  );
}
