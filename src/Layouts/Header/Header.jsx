import styles from "Assets/Styles/Components/Header/index.module.scss";
// import { Button } from "Components/Button/Button";
import { useSelector } from "react-redux";
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
  AvatarGroup,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import imgLogo from "../../Assets/Images/logo.png";
import { FaShoppingBag, FaSearch, FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
const Header = () => {
  const cartListID = useSelector((state) => state.cartListID);
  return (
    <Flex
      alignItems="center"
      w="100%"
      h="80px"
      display="flex"
      position="fixed"
      boxShadow="md"
      color="#383442b8"
      bg="#ffffff"
      fontWeight={700}
      justifyContent="space-between"
      px={8}
      zIndex="100"
    >
      <Flex gap="8" alignItems="center">
        <Link to="/">
          <Flex gap="4" alignItems="center">
            <Image boxSize="80px" src={imgLogo} alt="Logo" />
            <Hide below="sm">
              <Heading>تاپ کالا</Heading>
            </Hide>
          </Flex>
        </Link>

        <InputGroup
          size="md"
          width={{ base: "150px", sm: "250px", md: "350px", lg: "450px" }}
        >
          <Input
            pr="40px"
            variant="flushed"
            placeholder="جستجو"
            color="#383442b8"
            textAlign="right"
            borderColor="#E5ECF4"
            focusBorderColor="#E5ECF4"
            _placeholder={{ color: "#38344290" }}
          />
          <InputRightElement children={<FaSearch color="green.500" />} />
        </InputGroup>
      </Flex>

      <Flex gap="6" alignItems="center">
        <Link to="/login">
          <Hide below="sm">
            <Text fontSize="md">ورود</Text>
          </Hide>
          <Show below="sm">
            <FaUserCircle size={20} />
          </Show>
        </Link>
        <Link to="/basket">
          <Flex gap="2" alignItems="center">
            <AvatarGroup spacing="2rem">
              <Avatar
                boxSize="2.25em"
                color="gray.100"
                icon={<FaShoppingBag fontSize="1.5rem" />}
              >
                <AvatarBadge color="gray.700" boxSize="1.5em" bg="gray.100">
                  {cartListID.length !== 0 && cartListID.length}
                </AvatarBadge>
              </Avatar>
            </AvatarGroup>
            <Hide below="sm">
              <Text fontSize="md">سبد خرید</Text>
            </Hide>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
