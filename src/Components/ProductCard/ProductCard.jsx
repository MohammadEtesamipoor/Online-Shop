import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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
  } from "@chakra-ui/react";
export function ProductCard({itemProduct,itemCategory}) {
    return ( 
        <Box
        _hover={{
          transform: "translateY(-10px)",
          boxShadow: "3xl",
         
        }}
        role={"group"}
        p={6}
        maxW={"30%"}
        w={"full"}
        boxShadow={"xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        bg="#e4daf383 "
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
            backgroundImage: `url(${require(`upload/${itemProduct.images[0]}`)})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Box
  
          >
            <div
              style={{
                backgroundImage: `url(${require(`upload/${itemProduct.images[0]}`)})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: " contain, cover",
                backgroundPosition: "bottom",
                width: "282px",
                height: "230px",
              }}
            ></div>
          </Box>
        </Box>
        <Stack pt={10} align={"center"}>
          <Text
            color={"gray.500"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            {itemCategory["name-en"]}
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {itemProduct["product-name-fa"]}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Link
            to={`product/${itemProduct.id}`}
            >
            
            <Box
              _hover={{
                transform: "translateY(10px)",
                color: "#6a64c4",
              }}
            >
              <FaShoppingCart
              fontSize="50px" />
            </Box>
            </Link>
            <Text fontWeight={800} fontSize={"xl"}>
              {itemProduct["price"]}
            </Text>
            <Text
              textDecoration={"line-through"}
              color={"gray.600"}
            >
              {itemProduct["price"] * 1.2}
            </Text>
          </Stack>
        </Stack>
      </Box>
     );
}
