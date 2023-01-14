import styles from "Assets/Styles/Components/Header/index.module.scss";
// import { Button } from "Components/Button/Button";
import { useSelector } from "react-redux";
import ColorHeaderContext, { useColorHeaderContext } from "Context/headerColor";
import {
  Button,
  ButtonGroup,
  Image,
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Show,
  Hide,
  InputGroup,
  Link as LinkC,
  Input,
  InputRightElement,
  InputLeftElement,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import imgLogo from "../../Assets/Images/logo.png";
import {
  FaShoppingBag,
  FaSearch,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaCaretDown,
  FaHome,
  FaShopify,
} from "react-icons/fa";
import "../../Assets/Fonts/index.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBar from "Components/SearchBar/SearchBar";
import MenuHeader from "../../Components/Menu/Menu";
import { GET_CATEGORIES, GET_PRODUCTS } from "Configs/url";
import { PAGE } from "Configs/route";
const Header = () => {
  const [searchBarVisable, setSearchBarVisable] = useState();
  const [dataCategory, setDataCategory] = useState();
  const [stateCategory, setStateCategory] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const navigate = useNavigate();

  const { color, setColor } = React.useContext(ColorHeaderContext);
  const cartListID = useSelector((state) => state.basket.cartListID);
  const dataCat = useSelector((state) => state.category.dataCategory);
  useEffect(() => {
    const mn = dataCat;

    setDataCategory(mn);
  }, [dataCat]);
  const getSearchBarVisable = (status) => {
    setSearchBarVisable(status);
  };
  return (
    <Flex
      style={{
        zIndex: "1200",
        // clipPath: path(
        //   "M161 188.375C170 193.5 177.919 193.854 186 188.375C197.919 180.294 197.919 159.581 186 151.5C177.919 146.021 169.081 146.021 161 151.5C149.081 159.581 152 183.25 161 188.375ZM141.5 59.5C131.26 59.5 117.936 45.0628 100.5 52C81.6499 59.5 86.0351 73.5325 78.5 85.5C70 99 57.9171 96.3659 49.5 115C40.4659 135 58.5 138 58.5 154C58.5 170 41 166.5 46.5 185.5C52 204.5 72.5 196 81.6499 209C94.5 218.5 81.6499 233.418 100.5 241.5C122.657 251 121.5 232 141.5 237C154.5 237 154.5 257 180.5 251C203.99 245.579 193.5 230 211 222.5C226.5 212.5 236.5 226 255 206C272.51 187.07 247.5 177 249 154C253 132.5 273.5 120 258.5 94C245.5 77 235 78.5 211 75.5C190.5 68 200 53 177.5 49.5C153.5 43.5 161 59.5 141.5 59.5ZM138 129C129.877 116.815 108.623 116.815 100.5 129C95.0844 137.123 95.0844 145.877 100.5 154C108.623 166.185 129.877 166.185 138 154C143.416 145.877 143.416 137.123 138 129Z"
        // ),
      }}
      w="100%"
      display="flex"
      position="fixed"
      boxShadow="sm"
      direction="column"
      bg={color.bgClr}
      color={color.clr}
      // fontWeight={700}
      justifyContent="space-between"
      px={8}
    >
      <Show below="sm">
        <Link to="/">
          <Flex gap="4" justifyContent="space-between" alignItems="center">
            <>
              <FaBars onClick={onOpen} />
              <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader dir="rtl" align="right" borderBottomWidth="1px">
                    <span className="font-enenen">تاپ کالا</span>
                  </DrawerHeader>
                  <Divider />
                  <DrawerBody
                    display="flex"
                    flexDirection="column"
                    gap="20px"
                    textAlign="right"
                  >
                    <Accordion
                      dir="rtl"
                      align="right"
                      defaultIndex={[0]}
                      allowMultiple
                    >
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box textAlign="right" as="span">
                              <LinkC
                                style={{ textDecoration: "none" }}
                                display="flex"
                                gap="2"
                                isExternal
                              >
                                <FaBars />
                                دسته بندی کالاها
                                <FaCaretDown />
                              </LinkC>
                            </Box>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          display="flex"
                          flexDirection="column"
                          gap="1"
                          pb={4}
                        >
                          {dataCategory &&
                            dataCategory.map((cat) => (
                              <LinkC
                                onClick={() => {
                                  onClose()
                                  navigate(PAGE.Products + "/" + cat.id);
                                }}
                                style={{ textDecoration: "none" }}
                                _hover={{
                                  borderBottom: "1px solid #c9c9c9",
                                  color: "gray",
                                }}
                              >
                                {cat["name-fa"]}
                              </LinkC>
                            ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    <Box dir="rtl" textAlign="right">
                      <LinkC
                        textAlign="right"
                        style={{ textDecoration: "none" }}
                        display="flex"
                        gap="2"
                        onClick={() => {
                          onClose()
                          navigate(PAGE.Home);
                        }}
                        isExternal
                      >
                        <FaHome /> صفحه اصلی
                      </LinkC>
                    </Box>
                    <Box dir="rtl" textAlign="right">
                      <LinkC
                        style={{ textDecoration: "none" }}
                        display="flex"
                        gap="2"
                        onClick={() => {
                          onClose()
                          navigate(PAGE.Basket);
                        }}
                        isExternal
                      >
                        <FaShopify /> سبد خرید
                      </LinkC>
                    </Box>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
            <Heading>
              <span className="font-enenen">TopKala</span>
            </Heading>
            <>
              <LinkC
                onClick={() => {
                  color.theme === "light"
                    ? setColor({
                        theme: "dark",
                        clr: "#F3F3F3",
                        // clr:"#313238",
                        bgClr: "#313238",
                        // bgClr:"#9394a5"
                      })
                    : setColor({
                        theme: "light",
                        clr: "#313238",
                        // clr:"#313238",
                        bgClr: "#F9F9F9",
                        // bgClr:"#9394a5"
                      });
                }}
              >
                {color.theme === "light" ? (
                  <FaMoon fontSize="1.5rem" />
                ) : (
                  <FaSun fontSize="1.5rem" />
                )}
              </LinkC>
            </>
          </Flex>
        </Link>
      </Show>
      <Flex
        style={{
          zIndex: "1000",
          // clipPath: path(
          //   "M161 188.375C170 193.5 177.919 193.854 186 188.375C197.919 180.294 197.919 159.581 186 151.5C177.919 146.021 169.081 146.021 161 151.5C149.081 159.581 152 183.25 161 188.375ZM141.5 59.5C131.26 59.5 117.936 45.0628 100.5 52C81.6499 59.5 86.0351 73.5325 78.5 85.5C70 99 57.9171 96.3659 49.5 115C40.4659 135 58.5 138 58.5 154C58.5 170 41 166.5 46.5 185.5C52 204.5 72.5 196 81.6499 209C94.5 218.5 81.6499 233.418 100.5 241.5C122.657 251 121.5 232 141.5 237C154.5 237 154.5 257 180.5 251C203.99 245.579 193.5 230 211 222.5C226.5 212.5 236.5 226 255 206C272.51 187.07 247.5 177 249 154C253 132.5 273.5 120 258.5 94C245.5 77 235 78.5 211 75.5C190.5 68 200 53 177.5 49.5C153.5 43.5 161 59.5 141.5 59.5ZM138 129C129.877 116.815 108.623 116.815 100.5 129C95.0844 137.123 95.0844 145.877 100.5 154C108.623 166.185 129.877 166.185 138 154C143.416 145.877 143.416 137.123 138 129Z"
          // ),
        }}
        alignItems="center"
        w="100%"
        h="80px"
        fontsize="sm"
        display="flex"
        // fontWeight={700}
        justifyContent="space-between"
        // zIndex="100"
      >
        <Flex gap="8" alignItems="center">
          <Hide below="sm">
            <Link to="/">
              <Flex gap="4" alignItems="center">
                <Image boxSize="80px" src={imgLogo} alt="Logo" />
                <Heading>Beta</Heading>
              </Flex>
            </Link>
          </Hide>

          <InputGroup
            size="md"
            mb="10px"
            width={{ base: "200px", sm: "300px", md: "350px", lg: "450px" }}
          >
            <Input
              pr="40px"
              variant="flushed"
              placeholder="جستجو"
              color={color.clr}
              textAlign="right"
              borderColor={color.theme === "dark" ? "#a9aaaf4a" : "#3132384b"}
              focusBorderColor="#E5ECF4"
              _placeholder={{ color: color.clr, fontSize: "sm", opacity: 0.5 }}
              onClick={() => {
                setSearchBarVisable === "onOpen"
                  ? setSearchBarVisable("isOpen")
                  : setSearchBarVisable("onOpen");
              }}
            />

            <InputRightElement children={<FaSearch color="green.500" />} />
          </InputGroup>
        </Flex>

        <Flex gap="6" alignItems="center">
          <Link to="/login">
            <Hide below="sm">
              <Text>ورود</Text>
            </Hide>
            <Show below="sm">
              <FaUserCircle size={20} />
            </Show>
          </Link>
          <Link to="/basket">
            <Flex gap="2" alignItems="center">
              <AvatarGroup>
                <Avatar
                  boxSize="2em"
                  color="gray.100"
                  icon={<FaShoppingBag fontSize="1.5rem" />}
                >
                  <AvatarBadge
                    fontSize="md"
                    color="gray.700"
                    boxSize="1em"
                    bg="gray.100"
                  >
                    {cartListID.length !== 0 && cartListID.length}
                  </AvatarBadge>
                </Avatar>
              </AvatarGroup>
            </Flex>
          </Link>
          <Hide below="sm">
            <LinkC
              onClick={() => {
                color.theme === "light"
                  ? setColor({
                      theme: "dark",
                      clr: "#F3F3F3",
                      // clr:"#313238",
                      bgClr: "#313238",
                      // bgClr:"#9394a5"
                    })
                  : setColor({
                      theme: "light",
                      clr: "#313238",
                      // clr:"#313238",
                      bgClr: "#F9F9F9",
                      // bgClr:"#9394a5"
                    });
              }}
            >
              {color.theme === "light" ? (
                <FaMoon fontSize="1.5rem" />
              ) : (
                <FaSun fontSize="1.5rem" />
              )}
            </LinkC>
          </Hide>
        </Flex>
        {searchBarVisable ? (
          <SearchBar
            searchBarVisable={searchBarVisable}
            sendSearchBarVisable={getSearchBarVisable}
          />
        ) : null}
      </Flex>
      <Hide below="sm">
        <Flex my="10px" width="900px" display="flex" gap="5">
          <Box
            position="relative"
            onMouseEnter={() => setStateCategory(true)}
            onMouseLeave={() => setStateCategory(false)}
            _hover={{
              borderBottom: "1px solid gray",
            }}
          >
            <LinkC
              style={{ textDecoration: "none" }}
              display="flex"
              gap="2"
              isExternal
            >
              <FaBars />
              دسته بندی کالاها
              <FaCaretDown />
            </LinkC>
            {stateCategory && (
              <Box
                // boxShadow="2xl"
                borderTop="1px"
                borderBottom="1px"
                borderColor="gray.400"
                p="4"
                rounded="sm"
                bg={color.bgClr}
                width="94vw"
                position="absolute"
                display="flex"
                gap="3"
                maxH={"50px"}
              >
                {dataCategory &&
                  dataCategory.map((cat) => (
                    <LinkC
                      onClick={() => {
                        navigate(PAGE.Products + "/" + cat.id);
                      }}
                      style={{ textDecoration: "none" }}
                      _hover={{
                        borderBottom: "1px solid #c9c9c9",
                        color: "gray",
                      }}
                    >
                      {cat["name-fa"]}
                    </LinkC>
                  ))}
              </Box>
            )}
          </Box>
          <Box
            _hover={{
              borderBottom: "1px solid gray",
            }}
          >
            <LinkC
              style={{ textDecoration: "none" }}
              display="flex"
              gap="2"
              onClick={() => {
                navigate(PAGE.Home);
              }}
              isExternal
            >
              <FaHome /> صفحه اصلی
            </LinkC>
          </Box>
          <Box
            _hover={{
              borderBottom: "1px solid gray",
            }}
          >
            <LinkC
              style={{ textDecoration: "none" }}
              display="flex"
              gap="2"
              onClick={() => {
                navigate(PAGE.Basket);
              }}
              isExternal
            >
              <FaShopify /> سبد خرید
            </LinkC>
          </Box>
        </Flex>
      </Hide>
    </Flex>
  );
};

export default Header;
