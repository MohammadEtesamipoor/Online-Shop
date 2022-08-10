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
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import imgLogo from "../../Assets/Images/logo.png";
import { FaShoppingBag, FaSearch,FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="row-reverse"
      w="100%"
      h="80px"
      display="flex"
      position="fixed"
      bg="#4E7E95"
      color="#E5ECf4"
      justifyContent="space-between"
      px={8}
    >
      <Flex flexDirection="row-reverse" gap="8" alignItems="center"  >
        <Link to="/">
          <Flex flexDirection="row-reverse" gap="4" alignItems="center">
            <Image boxSize="80px" src={imgLogo} alt="Logo" />
            <Hide below="sm">
              <Heading>تاپ کالا</Heading>
            </Hide>
          </Flex>
        </Link>

        <InputGroup size="md" width={{ base: "150px", sm:"250px", md: "350px",lg:"450px" }}>
          <Input
            pr="40px"
            variant="flushed"
            placeholder="جستجو"
            color="#E5ECF4"
            textAlign="right"
            borderColor='#E5ECF4'
            focusBorderColor='#E5ECF4'
            _placeholder={{ color: '#bdd8e4' }}
          />
          <InputRightElement children={<FaSearch color="green.500" />} />
        </InputGroup>
      </Flex>

      <Flex flexDirection="row-reverse" gap="6" alignItems="center">
        <Link to="/login">
          <Hide below="sm">
          <Text fontSize="md">ورود</Text>
           </Hide>
           <Show below="sm">
             <FaUserCircle size={20} />
           </Show>
        </Link>
        <Link to="/basket">
          <Flex flexDirection="row-reverse" gap="2" alignItems="center">
            <FaShoppingBag size={20} />
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
