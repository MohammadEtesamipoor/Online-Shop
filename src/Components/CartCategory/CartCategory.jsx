import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import cate1 from "../../Assets/Images/imgCate/Cat1.jpg";
import cate2 from "../../Assets/Images/imgCate/Cat2.jpg";
import cate3 from "../../Assets/Images/imgCate/Cat3.jpg";
import cate4 from "../../Assets/Images/imgCate/Cat4.jpg";
import cate5 from "../../Assets/Images/imgCate/Cat5.jpg";
import "react-multi-carousel/lib/styles.css";

export default function CartCategory() {

  const [transition, setTransition] = useState({
    transform: "",
  });
  const initialValues = [
    {
      id: 1,
      imgName: cate1,
      imgTitle: "کفش اسپرت زنانه",
      styleTransform: "scale(1.0)",
    },
    {
      id: 2,
      imgName: cate2,
      imgTitle: "کفش اسپرت مردانه",
      styleTransform: "scale(1.0)",
    },
    {
      id: 3,
      imgName: cate3,
      imgTitle: "کفش اسپرت",
      styleTransform: "scale(1.0)",
    },
    {
      id: 4,
      imgName: cate4,
      imgTitle: "کفش اسپرت مردانه",
      styleTransform: "scale(1.0)",
    },
    {
      id: 5,
      imgName: cate5,
      imgTitle: "کفش بوت",
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
              items: 3,
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
              width='100%'
              height="480px"
              position="relative"
            >
              <Image
                width="100%"
                height="100%"
                style={{
                  transition: "transform .5s, filter 1.5s ease-in-out",
                  transform: item.styleTransform,
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
                objectFit="cover"
                src={item.imgName}
                alt="Dan Abramov"
              ></Image>
              <Box
                _hover={{
                  color: "gray",
                }}
                width="100%"
                textAlign="center"
                position="absolute"
                fontSize="20px"
                fontWeight={"600"}
                py="20px"
                pl="40px"
                top={"0px"}
              >
                <Text>{item.imgTitle}</Text>
              </Box>
              <Box
                _hover={{
                  color: "gray",
                }}
                width="100%"
                textAlign="center"
                position="absolute"
                fontSize="20px"
                fontWeight={"600"}
                py="20px"
                pl="40px"
                bottom={"0px"}
              >
                <Text>مشاهده محصولات</Text>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
