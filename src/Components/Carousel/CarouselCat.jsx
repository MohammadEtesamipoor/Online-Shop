import { Box, Button, Heading, Image as Img } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgg from "Assets/Images/slide3.png";
import img2 from "Assets/Images/slide2.png";
import women from "Assets/Images/slideWomen.png";
import slideBag from "Assets/Images/slideBag.png";
import slideMen from "Assets/Images/slideMen.png";
import img3 from "Assets/Images/slide1.png";
import { FaChevronLeft } from "react-icons/fa";
import React from "react";
import ColorHeaderContext from "Context/headerColor";

const CarouselCat = () => {
  const { color, setColor } = React.useContext(ColorHeaderContext);
  return (
    <Box pt="25px" mt="35px">
      <Carousel
        width="100%"
        height="40%"
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
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
              min: 24,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >

        <Box
          height={{ base: "100%", md: "400px" }}
          bg="#9e8992"
          display="flex"
          justifyContent="center"
        >
          <Box
            padding="50px"
            // borderRadius="15px"
            width={{ base: "100%", md: "40%" }}
          >
            <img
              style={{
                width: "24%",
                position: "absolute",
              }}
              // top="20px"
              // left="0"
              // // transform="rotate(-30deg)"
              // width="40%"
              // position="absolute"
              // objectFit="contain"
              src={slideBag}
              alt=""
            />
          </Box>
          <Box
            py="30px"
            pr="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Heading
                textAlign="right"
                as="b"
                size={{ base: "sm", md: "2xl" }}
                color={color.clr}
              >
                کیف و کوله پوشتی
              </Heading>
              <Heading
                marginY="15px"
                marginX="10px"
                as="h6"
                size="xs"
                color={color.clr}
                textAlign="right"
              >
                جدید ترین کیف و کوله پوشتی
              </Heading>
              <Button
                rightIcon={<FaChevronLeft size={20} />}
                borderColor="#f3f3f36c"
                color="#3a3a3a"
                backgroundColor="#cccccc"
                variant="outline"
                paddingX={{ base: "5px", md: "60px" }}
                _hover={{
                  backgroundColor: "#747474",
                  color: "#cccccc",
                }}
              >
                کیف و کوله پوشتی
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          height={{ base: "100%", md: "400px" }}
          bg="#7c8c87"
          display="flex"
          justifyContent="center"
        >
          <Box
            padding="50px"
            // borderRadius="15px"
            width={{ base: "100%", md: "40%" }}
          >
            <img
              style={{
                width: "28%",
                position: "absolute",
                transform: "rotate(-30deg)",
              }}
              // top="20px"
              // left="0"
              // // transform="rotate(-30deg)"
              // width="40%"
              // position="absolute"
              // objectFit="contain"
              src={women}
              alt=""
            />
          </Box>
          <Box
            py="30px"
            pr="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Heading
                textAlign="right"
                as="b"
                size={{ base: "sm", md: "2xl" }}
                color={color.clr}
              >
                کفش زنانه
              </Heading>
              <Heading
                marginY="15px"
                marginX="10px"
                as="h6"
                size="xs"
                color={color.clr}
                textAlign="right"
              >
                جدید ترین کفش های زنانه
              </Heading>
              <Button
                rightIcon={<FaChevronLeft size={20} />}
                borderColor="#f3f3f36c"
                color="#3a3a3a"
                backgroundColor="#cccccc"
                variant="outline"
                paddingX={{ base: "5px", md: "60px" }}
                _hover={{
                  backgroundColor: "#747474",
                  color: "#cccccc",
                }}
              >
                کفش زنانه
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          height={{ base: "100%", md: "400px" }}
          bg="#cfabab"
          display="flex"
          justifyContent="center"
        >
          <Box
            padding="50px"
            // borderRadius="15px"
            width={{ base: "100%", md: "40%" }}
          >
            <img
              style={{
                width: "28%",
                position: "absolute",
                transform: "rotate(-30deg)",
              }}
              // top="20px"
              // left="0"
              // // transform="rotate(-30deg)"
              // width="40%"
              // position="absolute"
              // objectFit="contain"
              src={slideMen}
              alt=""
            />
          </Box>
          <Box
            py="30px"
            pr="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Heading
                textAlign="right"
                as="b"
                size={{ base: "sm", md: "2xl" }}
                color={color.clr}
              >
                کفش مجلسی مردانه
              </Heading>
              <Heading
                marginY="15px"
                marginX="10px"
                as="h6"
                size="xs"
                color={color.clr}
                textAlign="right"
              >
                جدید ترین کفش های مجلسی مردانه
              </Heading>
              <Button
                rightIcon={<FaChevronLeft size={20} />}
                borderColor="#f3f3f36c"
                color="#3a3a3a"
                backgroundColor="#cccccc"
                variant="outline"
                paddingX={{ base: "5px", md: "60px" }}
                _hover={{
                  backgroundColor: "#747474",
                  color: "#cccccc",
                }}
              >
                کفش مجلسی مردانه
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          height={{ base: "100%", md: "400px" }}
          bg="#9e8992"
          display="flex"
          justifyContent="center"
        >
          <Box
            padding="50px"
            // borderRadius="15px"
            width={{ base: "100%", md: "40%" }}
          >
            <img
              style={{
                width: "28%",
                position: "absolute",
                transform: "rotate(-30deg)",
              }}
              // top="20px"
              // left="0"
              // // transform="rotate(-30deg)"
              // width="40%"
              // position="absolute"
              // objectFit="contain"
              src={imgg}
              alt=""
            />
          </Box>
          <Box
            py="30px"
            pr="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Heading
                textAlign="right"
                as="b"
                size={{ base: "sm", md: "2xl" }}
                color={color.clr}
              >
                کفش اسپرت
              </Heading>
              <Heading
                marginY="15px"
                marginX="10px"
                as="h6"
                size="xs"
                color={color.clr}
                textAlign="right"
              >
                جدید ترین کفش های اسپرت
              </Heading>
              <Button
                rightIcon={<FaChevronLeft size={20} />}
                borderColor="#f3f3f36c"
                color="#3a3a3a"
                backgroundColor="#cccccc"
                variant="outline"
                paddingX={{ base: "5px", md: "60px" }}
                _hover={{
                  backgroundColor: "#747474",
                  color: "#cccccc",
                }}
              >
                کفش اسپرت
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          height={{ base: "100%", md: "400px" }}
          bg="#7c8c87"
          display="flex"
          justifyContent="center"
        >
          <Box
            padding="50px"
            // borderRadius="15px"
            width={{ base: "100%", md: "40%" }}
          >
            <img
              style={{
                width: "28%",
                position: "absolute",
                transform: "rotate(-30deg)",
              }}
              // top="20px"
              // left="0"
              // // transform="rotate(-30deg)"
              // width="40%"
              // position="absolute"
              // objectFit="contain"
              src={img3}
              alt=""
            />
          </Box>
          <Box
            py="30px"
            pr="50px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" gap="20px">
              <Heading
                textAlign="right"
                as="b"
                size={{ base: "sm", md: "2xl" }}
                color={color.clr}
              >
                کفش مردانه
              </Heading>
              <Heading
                marginY="15px"
                marginX="10px"
                as="h6"
                size="xs"
                color={color.clr}
                textAlign="right"
              >
                جدید ترین کفش های مردانه
              </Heading>
              <Button
                rightIcon={<FaChevronLeft size={20} />}
                borderColor="#f3f3f36c"
                color="#3a3a3a"
                backgroundColor="#cccccc"
                variant="outline"
                paddingX={{ base: "5px", md: "60px" }}
                _hover={{
                  backgroundColor: "#747474",
                  color: "#cccccc",
                }}
              >
                کفش مردانه
              </Button>
            </Box>
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};

export default CarouselCat;
