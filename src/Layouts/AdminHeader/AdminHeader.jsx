// import styles from "Assets/Styles/Components/Header/index.module.scss";
// import { Button } from "Components/Button/Button";

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
  Input,
  InputRightElement,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import imgLogo from "../../Assets/Images/logo.png";
import { FaShoppingBag, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("product");
  return (
    <Box mb="-80px">
      <Flex
        alignItems="center"
        w="100%"
        h="80px"
        display="flex"
        bg="#4E7E95"
        color="#E5ECf4"
        justifyContent="space-between"
        px={8}
      >
        <Flex gap="8" alignItems="center">
          <Link to="/admin/product">
            <Flex gap="4" alignItems="center">
              <Heading>پنل مدیریت فروشگاه</Heading>
            </Flex>
          </Link>
        </Flex>
        <Stack direction="row" spacing={4} align="center">
          <Button
            variant="ghost"
            bg={activePage === "product" && "#E5ECF4"}
            color={activePage === "product" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/product");
              setActivePage("product");
            }}
          >
            کالاها
          </Button>
          <Button
            variant="ghost"
            bg={activePage === "quantity" && "#E5ECF4"}
            color={activePage === "quantity" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/quantity");
              setActivePage("quantity");
            }}
          >
            موجودی وقیمت ها
          </Button>
          <Button
            variant="ghost"
            bg={activePage === "order" && "#E5ECF4"}
            color={activePage === "order" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/order");
              setActivePage("order");
            }}
          >
            سفارش ها
          </Button>
        </Stack>
        <Flex gap="6" alignItems="center">
          <Link to="/">
            <Text fontSize="md">بازگشت به سایت</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
