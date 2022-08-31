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
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Car.css";

// import required modules
import { Pagination, Autoplay, Navigation, Scrollbar,EffectFade } from "swiper";

export default function MyCarousel() {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={2}
        initialSlide={1}
        centeredSlides={true}
        parallax={true}
        spaceBetween={20}
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation, Scrollbar,EffectFade]}
        className="mySwiper"
      >
                <SwiperSlide>
          <div>
            <Box
              padding="50px"
              borderRadius="15px"
              bg="#9e8992be"
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="xl" color="#F3F3F3">
                    کیف و کوله پوشتی
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color="#F3F3F3"
                  >
                    جدید ترین کیف ها
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#F3F3F3"
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
                width="50%"
                position="absolute"
                objectFit="contain"
                src={slideBag}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide
        >
          <div>
            <Box
              padding="50px"
              borderRadius="15px"
              bg="#7C8C87be"
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="2xl" color="#F3F3F3">
                    کفش مردانه
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color="#F3F3F3"
                  >
                    جدید ترین کفش های مردانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#F3F3F3"
                    variant="outline"
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
                width="60%"
                position="absolute"
                objectFit="contain"
                src={img3}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>
        <SwiperSlide
        >
          <div>
            <Box
              padding="50px"
              borderRadius="15px"
              bg="#cec5c5c8"
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="2xl" color="#F3F3F3">
                    کفش زنانه
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color="#F3F3F3"
                  >
                    جدید ترین کفش های زنانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#F3F3F3"
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
                width="60%"
                position="absolute"
                objectFit="contain"
                src={women}
                alt=""
              />
            </Box>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div
          slot="container-start">
            <Box
              padding="50px"
              borderRadius="15px"
              bg="#313238be"
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="xl" color="#F3F3F3">
                    کفش مجلسی مردانه
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color="#F3F3F3"
                  >
                    جدید ترین کفش های  مجلسی مردانه
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#F3F3F3"
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
                width="60%"
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
              borderRadius="15px"
              bg="#18264Fbe"
              width="100%"
              height="100%"
            >
              <Box display="felx" flexDirection="column">
                <Box>
                  <Heading as="b" size="2xl" color="#F3F3F3">
                  کفش اسپرت 
                  </Heading>
                  <Heading
                    marginY="15px"
                    marginX="10px"
                    as="h6"
                    size="xs"
                    color="#F3F3F3"
                  >
                    جدید ترین کفش اسپرت
                  </Heading>
                </Box>
                <Box>
                  <Button
                    rightIcon={<FaChevronLeft size={20} />}
                    borderColor="#f3f3f36c"
                    color="#F3F3F3"
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
                width="60%"
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
