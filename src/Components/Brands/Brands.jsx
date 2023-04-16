import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import brand1 from "../../Assets/Images/brand/brand-1.png";
import brand2 from "../../Assets/Images/brand/brand-2.png";
import brand3 from "../../Assets/Images/brand/brand-3.png";
import brand4 from "../../Assets/Images/brand/brand-4.png";
import brand5 from "../../Assets/Images/brand/brand-5.png";

import "react-multi-carousel/lib/styles.css";

export default function Brands() {
  const [transition, setTransition] = useState({
    transform: "",
  });
  const initialValues = [
    {
      id: 1,
      imgName: brand1,
      styleTransform: "scale(1.0)",
    },
    {
      id: 2,
      imgName: brand2,
      styleTransform: "scale(1.0)",
    },
    {
      id: 3,
      imgName: brand3,
      styleTransform: "scale(1.0)",
    },
    {
      id: 4,
      imgName: brand4,
      styleTransform: "scale(1.0)",
    },
    {
      id: 5,
      imgName: brand5,
      styleTransform: "scale(1.0)",
    }
  ];
  const [listCart, setListCart] = useState(initialValues);

  const CustomRight = ({ onClick }) => (
    <Button
      py="25px"
      px="10px"
      position="absolute"
      left="-5px"

      color="gray"
      bg="transparent"
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
      bg="transparent"
      color="gray"
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
          infinite={true}
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
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 600,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 600,
              },
              items: 4,
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
              width="160px"
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
                alt="Brand"
              ></Image>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
