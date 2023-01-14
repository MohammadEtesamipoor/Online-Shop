// dir="rtl"
// slidesPerView={2}
// centeredSlides={true}
// spaceBetween={100}
// pagination={{
//   clickable: true,
// }}
// autoplay={{
//   delay: 35500,
//   disableOnInteraction: false,
// }}
// modules={[Autoplay, Pagination, Navigation]}
// className="mySwiper"
import imgg from "Assets/Images/slide3.png";
import img2 from "Assets/Images/slide2.png";
import women from "Assets/Images/slideWomen.png";
import slideBag from "Assets/Images/slideBag.png";
import slideMen from "Assets/Images/slideMen.png";
import img3 from "Assets/Images/slide1.png";
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
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { FaShoppingBag, FaChevronLeft, FaUserCircle } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Car.css";

// import required modules
import {
  Pagination,
  Autoplay,
  Navigation,
  Scrollbar,
  EffectFade,
} from "swiper";
import ColorHeaderContext from "Context/headerColor";

export default function MyCarousel() {
  const [swiper, setSwiper] = useState(null);
  const { color,setColor } = React.useContext(ColorHeaderContext);
  const [theme,setTheme]=useState(localStorage.getItem("THEME"))

  const bgColorSilde = [
    "#bebebe",
    // "#7c8c87",
    // "#cfabab",
    "#313238",
  ];


  // useEffect(() => {
  //   const handleScroll = event => {
  //     if(window.scrollY>=600){
  //       setColor({
  //         theme:"other",
  //         clr:"#313238",
  //         // clr:"#313238",
  //         bgClr:'#ffffff'
  //         // bgClr:"#9394a5"
  //       })
  //     }
  //     else{
  //       setColor({
  //         theme:color.theme,
  //         clr:color[color.selected].clr,
  //         // clr:"#313238",
  //         bgClr:[theme]
  //         // bgClr:"#9394a5"
  //       })
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);

  // }, []);

  return (
    <>
      <Swiper
        dir="rtl"
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Scrollbar, Navigation, Pagination]}
        //className="mySwiper"
        // slidesPerView={2}
        // initialSlide={1}
        // centeredSlides={true}
        // parallax={true}
        // spaceBetween={20}
        scrollbar={{
          hide: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}

        // modules={[Autoplay, Pagination, Navigation, Scrollbar,EffectFade]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Box
              padding="50px"
              // borderRadius="15px"
              bg={[theme]}
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="xl" color={color[color.selected].clr}>
                  کیف و کوله پوشتی  
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color={color[color.selected].clr}
                  >
                    جدید ترین کیف ها
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#3a3a3a"
                    backgroundColor="#F3F3F3"
                    variant="outline"
                    paddingX="60px"
                    transform="translate(-50px, -80px)"
                  >
                    کیف و کوله پوشتی
                  </Button>
                </Box>
              </Box>
              <Image
                top="20px"
                left="0"
                // transform="rotate(-30deg)"
                width="40%"
                position="absolute"
                objectFit="contain"
                src={slideBag}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Box padding="50px" bg={[theme]} width="100%" height="100%">
              <Box display="felx" flexDirection="column">
                <Box>
                            کفش مردانه        <Heading as="b" size="2xl"  color={color[color.selected].clr}>
  
                  </Heading>
                  <Heading

                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                     color={color[color.selected].clr}
                  >
                    جدید ترین کفش های مردانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#3a3a3a"
                    variant="outline"
                    backgroundColor="#F3F3F3"
                    paddingX="60px"
                    transform="translate(-50px, -80px)"
                  >
                    کفش مردانه
                  </Button>
                </Box>
              </Box>
              <Image
                top="0px"
                left="0"
                transform="rotate(-30deg)"
                // width="50%"
                width="40%"
                position="absolute"
                objectFit="contain"
                src={img3}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Box padding="50px" bg={color[color.selected].bgClr} width="100%" height="100%">
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="2xl"  color={color[color.selected].clr}>
               کفش زنانه     
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                     color={color[color.selected].clr}
                  >
                    جدید ترین کفش های زنانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#3a3a3a"
                    backgroundColor="#F3F3F3"
                    variant="outline"
                    paddingX="60px"
                    transform="translate(-50px, -80px)"
                  >
                    کفش زنانه
                  </Button>
                </Box>
              </Box>
              <Image
                top="0px"
                left="0"
                transform="rotate(-30deg)"
                // width="50%"
                width="40%"
                position="absolute"
                objectFit="contain"
                src={women}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div slot="container-start">
            <Box
              padding="50px"
              // borderRadius="15px"
              bg={[theme]}
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="xl"  color={color[color.selected].clr}>
                    کفش مجلسی مردانه
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                     color={color[color.selected].clr}
                  >
                    جدید ترین کفش های مجلسی مردانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#3a3a3a"
                    backgroundColor="#F3F3F3"
                    variant="outline"
                    paddingX="60px"
                    transform="translate(-50px, -80px)"
                  >
                  کفش مجلسی مردانه  
                  </Button>
                </Box>
              </Box>
              <Image
                top="60px"
                left="-10px"
                transform="rotate(-30deg)"
                width="40%"
                position="absolute"
                objectFit="contain"
                src={slideMen}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Box
              padding="50px"
              // borderRadius="15px"
              bg={[theme]}
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="2xl"  color={color[color.selected].clr}>
                    کفش اسپرت
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                     color={color[color.selected].clr}
                  >
                    جدید ترین کفش اسپرت
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#3a3a3a"
                    backgroundColor="#F3F3F3"
                    variant="outline"
                    paddingX="60px"
                    transform="translate(-50px, -80px)"
                  >
                    کفش اسپرت
                  </Button>
                </Box>
              </Box>
              <Image
                top="0"
                left="0"
                transform="rotate(-30deg)"
                width="40%"
                position="absolute"
                objectFit="contain"
                src={imgg}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
