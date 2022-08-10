import imgLogo from "../../Assets/Images/logoLognin.png";
import { Formik, Form, Field } from "formik";
import { Link,useNavigate } from "react-router-dom";
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spacer,
} from "@chakra-ui/react";
import { LoginValidtion } from "Validations/LoginValidtion";
import React from "react";
import { FaEye, FaEyeSlash, FaUserAlt, FaLock } from "react-icons/fa";

export function LoginPage() {
  const userLoginValidation = LoginValidtion();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate =useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      backdropFilter="auto"
      backdropBlur="8px"
      bg="#E5ECF4"
    >
      <Box
        display="flex"
        width="60%"
        height="80%"
        bg="#4E7E95"
        boxShadow="dark-lg"
        p="6"
        rounded="2xl"
      >
        {/* logo image     */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="40%"
        >
          <Image src={imgLogo} alt="Logo" />
        </Box>
        {/* login */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center "
          width="60%"
          height="100%"
        >
          <Flex
            height="70%"
            justifyContent="center"
            alignItems="center"
            boxShadow="inner"
            p="6"
            rounded="md"
          >
            <FormControl
              px={5}
              gap="6"
              display="flex"
              flexDirection="column"
              alignItems="center"
              color="#E5ECF4"
            >
              <Heading color="#E5ECF4">ورود کاربر</Heading>
              {/* Use Name */}
              <Box>
                <InputGroup width="300px">
                  <Input
                    _placeholder={{ color: "#a0c9dd" }}
                    textAlign="right"
                    variant="flushed"
                    placeholder="نام کاربری"
                    size="lg"
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<FaUserAlt color="#ff934d" />}
                  />
                </InputGroup>
              </Box>
              <Spacer />
              {/* password */}
              <Box>
                <InputGroup width="300px">
                  <InputRightElement
                    pointerEvents="none"
                    children={<FaLock color="#ff934d" />}
                  />
                  <Input
                    _placeholder={{ color: "#a0c9dd" }}
                    textAlign="right"
                    type={show ? "text" : "password"}
                    variant="flushed"
                    placeholder="رمز عبور"
                    size="lg"
                  />
                  <InputLeftElement>
                    <Box onClick={handleClick}>
                      {show ? (
                        <FaEye color="#ff934d" />
                      ) : (
                        <FaEyeSlash color="#ff934d" />
                      )}
                    </Box>
                  </InputLeftElement>
                </InputGroup>
              </Box>

                <Button
                  py="4"
                  fontSize="22px"
                  textAlign="center"
                 width="70%"
                  bg="#FF834D"
                  color="#4E7E95"
                  variant="solid"
                  onClick={()=>{
                    navigate('/admin/product')
                  }}
                >
                  ورود
                </Button>

            </FormControl>
          </Flex>
          {/* <form onSubmit={userLoginValidation.handleSubmit}>
          <label htmlFor="name">User Name</label>
          <input
            type="name"
            id="userName"
            name="userName"values
            onChange={userLoginValidation.handleChange}
            // value={userLoginValidation.values.userName}
          />
          <label htmlFor="password">User Name</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={userLoginValidation.handleChange}
            // value={userLoginValidation.values.userName}
          />
        <button type="submit">Submit</button>
        </form> */}
        </Box>
      </Box>
    </Box>
  );
}
