import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import new1 from "../../Assets/Images/Latest News/1.jpg";
import new2 from "../../Assets/Images/Latest News/2.jpg";
import new3 from "../../Assets/Images/Latest News/3.jpg";
import new4 from "../../Assets/Images/Latest News/4.jpg";
import new5 from "../../Assets/Images/Latest News/5.jpg";
import new6 from "../../Assets/Images/Latest News/6.jpg";
import new7 from "../../Assets/Images/Latest News/7.jpg";
import new8 from "../../Assets/Images/Latest News/8.jpg";

import "react-multi-carousel/lib/styles.css";

export default function LatestNews() {
  const [transition, setTransition] = useState({
    transform: "",
  });
  const initialValues = [
    {
      id: 1,
      imgName: new1,
      imgTitle: "کفش نایک اصل",
      modeShow: "Nike Paisley",
      styleTransform: "scale(1.0)",
    },
    {
      id: 2,
      imgName: new2,
      imgTitle: "کتونی نایک",
      modeShow: "Nike Dunk",
      styleTransform: "scale(1.0)",
    },
    {
      id: 3,
      imgName: new3,
      imgTitle: "کفش ریبوک",
      modeShow: "Reebok Nano X2",
      styleTransform: "scale(1.0)",
    },
    {
      id: 4,
      imgName: new4,
      imgTitle: "کفش پوما بسکتبالی",
      modeShow: "PUMA Supernova",
      styleTransform: "scale(1.0)",
    },
    {
      id: 5,
      imgName: new5,
      imgTitle: "کفش جدید ریبوک",
      modeShow: "Smiley Instapump",
      styleTransform: "scale(1.0)",
    },
    {
      id: 6,
      imgName: new6,
      imgTitle: "کفش اسیکس ژل کایانو",
      modeShow: "ASICS GEL Kayano",
      styleTransform: "scale(1.0)",
    },
    {
      id: 7,
      imgName: new7,
      imgTitle: "کفش ایر جردن اصل",
      modeShow: "Nike Jordan",
      styleTransform: "scale(1.0)",
    },
    {
      id: 8,
      imgName: new8,
      imgTitle: "کتونی نایک اورجینال",
      modeShow: "Nike Dunk Low",
      styleTransform: "scale(1.0)",
    },
  ];
  const [listCart, setListCart] = useState(initialValues);

  const CustomRight = ({ onClick }) => (
    <Button
      py="25px"
      px="10px"
      position="absolute"
      left="-5px"
      bg="white"
      color="gray"
      border="2px"
      borderColor="gray"
      colorScheme="gray"
      variant="outline"
      onClick={onClick}
    >
      <FaChevronLeft style={{ fontSize: "30px" }} />
    </Button>
  );
  const CustomLeft = ({ onClick }) => (
    <Button
      py="25px"
      px="10px"
      position="absolute"
      right="-5px"
      bg="white"
      color="gray"
      border="2px"
      borderColor="gray"
      colorScheme="gray"
      variant="outline"
      onClick={onClick}
    >
      <FaChevronRight style={{ fontSize: "30px" }} />
    </Button>
  );
  const handelMouseEnter = (id) => {
    setListCart((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, styleTransform: "scale(1.05)" };
        }
        return obj;
      })
    );
  };
  const handelMouseOut = (id) => {
    setListCart((current) =>
      current.map((obj) => {
        if (obj.id === id) {
          return { ...obj, styleTransform: "scale(1.0)" };
        }
        return obj;
      })
    );
  };
  return (
    <Box
      my="32px"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}

    >
        <Heading mb="35px" textAlign="center">آخرین اخبار</Heading>
      <Box>
        <Carousel
          additionalTransfrom={0}
          arrows
            autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          itemClass=""
          customRightArrow={<CustomRight />}
          customLeftArrow={<CustomLeft />}
          draggable
          focusOnSelect={false}
          infinite={false}
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
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 600,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 600,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind
          rewindWithAnimation={false}
          rtl={true}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {listCart.map((item, index) => (
            <Box
              key={item.id}
              style={{
                overflow: "hidden",
              }}
              onMouseEnter={() => {
                handelMouseEnter(item.id);
              }}
              onMouseLeave={() => {
                handelMouseOut(item.id);
              }}
              px="20px"
              //  onMouseLeave={handelMouseOut}
              width="100%"
              height="480px"
              position="relative"
              display={"flex"}
              flexDirection="column"
              gap="10px"
            >
              <Image
                width="100%"
                height="100%"
                style={{
                  transition: "transform .5s, filter 1.5s ease-in-out",
                  transform: item.styleTransform,
                  display: "inline-block",
                  verticalAlign: "middle",
                  objectFit: "cover",
                }}
                src={item.imgName}
                alt="آخرین اخبار"
              ></Image>

              <Text color="gray">{item.modeShow}</Text>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: "gray",
                }}
                width="100%"
                fontSize="20px"
                fontWeight={"600"}
              >
                <Text>{item.imgTitle}</Text>
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
