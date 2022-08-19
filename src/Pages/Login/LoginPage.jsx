import imgLogo from "../../Assets/Images/logo.png";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
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
  useColorMode,
  FormHelperText
} from "@chakra-ui/react";
// import { LoginValidtion } from "Validations/LoginValidtion";
import React from "react";
import { FaEye, FaEyeSlash, FaUserAlt, FaLock } from "react-icons/fa";
export function LoginPage() {
  const [show, setShow] = React.useState(false);
  const [input, setInput] = React.useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  return (
    <Box
      dir="ltr"
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
        bg="#bec6e3c9"
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
              gap="3"
              display="flex"
              flexDirection="column"
              alignItems="center"
              color="#2c2c2c"
            >
              <Heading color="#2c2c2c">ورود کاربر</Heading>
              {/* Use Name */}
              <Box>
              <FormControl isInvalid={isError}>
                <InputGroup width="300px">
                  <Input
                    _placeholder={{ color: "#a0c9dd" }}
                    textAlign="right"
                    variant="flushed"
                    placeholder="نام کاربری"
                    size="lg"
                    onChange={handleInputChange}
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<FaUserAlt color="#4e7e95" />}
                  />
                </InputGroup>
                {!isError ? (
                  <FormHelperText>
                    
                  </FormHelperText>
                ) : (
                  <FormErrorMessage dir="rtl" color="#944e4e">نام کاربری را وارد کنید</FormErrorMessage>
                )}
                </FormControl>
              </Box>
              <Spacer />
              {/* password */}
              <Box>
              <FormControl isInvalid={isError}>
                <InputGroup width="300px">
                  <InputRightElement
                    pointerEvents="none"
                    children={<FaLock color="#4e7e95" />}
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
                        <FaEye color="#4e7e95" />
                      ) : (
                        <FaEyeSlash color="#4e7e95 " />
                      )}
                    </Box>
                  </InputLeftElement>
                </InputGroup>

                {!isError ? (
                  <FormHelperText>
                    
                  </FormHelperText>
                ) : (
                  <FormErrorMessage dir="rtl" color="#944e4e">رمز عبور را وارد کنید</FormErrorMessage>
                )}
                </FormControl>
              </Box>

              <Button
                py="4"
                fontSize="22px"
                textAlign="center"
                width="70%"
                bg="#4e7e95"
                color="#E5ecf4"
                variant="solid"
                colorScheme='whiteAlpha'
                _hover={{
                  color:"#585858",
                    bg:"#e5ecf4"
                }}
                onClick={() => {
                  navigate("/admin/product");
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
