import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

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
export function HomePage() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  const [imageZoom, setImageZoom] = useState();
  useEffect(() => {
    GetProductsCategory().then((res) => {
      setCategoryData(res.data);
    });
    GetProducts().then((res) => {
      setProductData(res.data);
    });
  }, []);
  return (
    <Box mx="32px" my="32px">
      {productData ? (
        <Box display="flex" flexDirection="column" gap="40px">
          {categoryData.map((itemCategory) => (
            // Box list category box
            <Box>
              <Heading>{itemCategory["name-fa"]}</Heading>
              {/* Box list product card */}
              <Box display="flex" gap="10px" my="20px" mx="30px">
                {/*Box card product */}
                {productData.map(
                  (itemProduct) =>
                    itemProduct["category-id"] == itemCategory["id"] && (
                      <Box
                        _hover={{
                          transform: "translateY(-10px)",
                          boxShadow: "3xl",
                         
                        }}
                        role={"group"}
                        p={6}
                        maxW={"330px"}
                        w={"full"}
                        boxShadow={"2xl"}
                        rounded={"lg"}
                        pos={"relative"}
                        zIndex={1}
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
                            to="/product"
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
                    )
                )}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box padding="6" boxShadow="lg" bg="white">
          <Skeleton width="15%" height="20px" />
          <SkeletonText mt="10" noOfLines={4} spacing="10" />
        </Box>
      )}
    </Box>
  );
}
