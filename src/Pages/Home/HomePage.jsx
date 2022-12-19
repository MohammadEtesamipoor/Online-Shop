import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import React, { useEffect, useState } from "react";
import { ProductCard } from "Components";
import styles from "Assets/Styles/Components/Header/index.module.scss";
import menLogo from "Assets/Images/menLogo.png";

import { PAGE } from "Configs/route";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Box,
  Link,
  Skeleton,
  SkeletonText,
  Heading,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import MyCarousel from "Components/Carousel/Carousel";
import ColorHeaderContext from "Context/headerColor";
import CarouselCat from "Components/Carousel/CarouselCat";
import {
  FaArrowLeft,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function HomePage() {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState({});
  const [imageZoom, setImageZoom] = useState();
  const { color, setColor } = React.useContext(ColorHeaderContext);
  useEffect(() => {
    const ar = [];
    const fetchData = async () => {
      await GetProductsCategory().then((res) => {
        setCategoryData(res.data);
        res.data.map(async (cat) => {
          await GetProducts(cat.id + `&_limit=7`).then((response) => {
            ar.push({
              nameCategory: cat["name-fa"],
              icon: cat["icon"],
              id: cat["id"],
              data: response.data,
            });
          });
          setProductData(ar);
        });
      });
    };
    fetchData();
  }, []);

  // const getDataByCategory = (itemCategory) => {
  //   const tr=  GetProducts(itemCategory.id).then((res) =>
  //     res.data
  //   );
  //   console.log(tr[0]['product-name-fa']);
  //   return <h1>{itemCategory.id}</h1>
  //   // return await GetProducts(itemCategory.id).then((res) => {
  //   //   return res.data.map((item) => {
  //   //     return <ProductCard itemProduct={item} itemCategory={itemCategory} />;
  //   //   });
  //   // });
  // };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Box
      color={color.clr}
      bg={color.theme === "dark" ? "#444444" : "#ebebeb90"}
      mx="0px"
      my="0px"
    >
      <CarouselCat />

      <Box

        mx="32px"
        my="32px"
      >
        {productData.length > 2 ? (
          <Box display="flex" flexDirection="column" gap="40px">
            {productData.map((itemProduct) => (
              <Flex
                key={itemProduct.data.id}
                bg="red.400"
                borderRadius="xl"
                p="6"
                maxH="300px"
                gap="4"
                justifyContent="center"
                alignItems="center"
                // display="flex"
              >
                {/* <Box bg="red.400" borderRadius="xl" p="10" display="flex" > */}
                <Box
                  alignItems="center"
                  display="flex"
                  flexDirection="column"
                  width={{base:"30%",sm:'20%'}}
                >
                  <Heading
                    align="center"
                    fontSize="24px"
                    color="white"
                    className="font-enenen"
                  >
                    {itemProduct["nameCategory"]}
                  </Heading>
                  <div
                    style={{
                      backgroundImage: `url(http://localhost:3001/files/${itemProduct.icon})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: " contain, cover",
                      backgroundPosition: "center",
                      width: "130px",
                      height: "130px",
                    }}
                  ></div>

                  <Link
                    align="center"
                    fontSize="16px"
                    color="white"
                    display="flex"
                    gap="2"
                    className="font-enenen"
                    onClick={() => {
                      navigate(`/products/${itemProduct.id}`);
                    }}
                  >
                    مشاهده همه <FaArrowLeft />
                  </Link>
                </Box>
                <Box width={{base:"70%",sm:'80%'}}>
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable

                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1248,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 928,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                      },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={true}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                  >
                    {itemProduct.data.map((item) => (
                      <ProductCard
                        key={item.id}
                        itemProduct={item}
                        nameCategory={itemProduct["nameCategory"]}
                      />
                    ))}
                  </Carousel>
                </Box>
                {/* </Box> */}
              </Flex>
            ))}
          </Box>
        ) : (
          <Box padding="6" boxShadow="lg" bg="white">
            <Skeleton width="15%" height="20px" />
            <SkeletonText mt="10" noOfLines={4} spacing="10" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
