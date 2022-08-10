import styles from "Assets/Styles/Components/Header/index.module.scss";
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
  const [activePage,setActivePage] = useState("product");
  return (
    <Box
      w="100%"
      h="160px"
      display="flex"
      flexDirection="column"
      position="fixed"
    >
      <Flex
        alignItems="center"
        flexDirection="row-reverse"
        w="100%"
        h="80px"
        display="flex"
        bg="#4E7E95"
        color="#E5ECf4"
        justifyContent="space-between"
        px={8}
      >
        <Flex flexDirection="row-reverse" gap="8" alignItems="center">
          <Link to="/admin/product">
            <Flex flexDirection="row-reverse" gap="4" alignItems="center">
              <Heading>پنل مدیریت فروشگاه</Heading>
            </Flex>
          </Link>
        </Flex>
        <Stack direction="row-reverse" spacing={4} align="center">
          <Button
         
            variant="ghost"
            bg={activePage==="product" && "#E5ECF4"}
            color={activePage==="product" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/product");
              setActivePage(
                "product"
              )
            }}
          >
            کالاها
          </Button>
          <Button
            variant="ghost"
            bg={activePage==="order" && "#E5ECF4"}
            color={activePage==="order" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/order");
              setActivePage(
                "order"
              )
            }}
          >
            موجودی وقیمت ها
          </Button>
          <Button
            variant="ghost"
            bg={activePage==="quantity" && "#E5ECF4"}
            color={activePage==="quantity" && "#4E7E95"}
            onClick={() => {
              navigate("/admin/quantity");
              setActivePage(
                "quantity"
              )
            }}
            
          >
            سفارش ها
          </Button>
        </Stack>
        <Flex flexDirection="row-reverse" gap="6" alignItems="center">
          <Link to="/">
            <Text fontSize="md">بازگشت به سایت</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
const Example = () => {
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
  );
  const [tabIndex, setTabIndex] = React.useState(0);
  const bg = colors[tabIndex];
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
      <TabList>
        <Tab>Red</Tab>
        <Tab>Teal</Tab>
        <Tab>Blue</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>The Primary Colors</TabPanel>
        <TabPanel>Are 1, 2, 3</TabPanel>
        <TabPanel>Red, yellow and blue.</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
