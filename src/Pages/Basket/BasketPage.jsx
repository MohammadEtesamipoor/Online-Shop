import { FaRegTrashAlt } from "react-icons/fa";
import DatePicker from "react-multi-date-picker"
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  Box,
  Heading,
  Button,
  Text,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useNumberInput,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ModalFooter,
  useToast,
  Alert,
AlertIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { GetProduct } from "apis/ApiProduct";
import { useEffect, useRef, useState } from "react";
import { GET_PRODUCTS } from "Configs/url";
import { ADD_CART, DECREMENT_CART, REMOVE_CART } from "store/type/BasketType";
export function BasketPage() {
  const toast = useToast();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState(new Date());
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const listCart = useSelector((state) => state.cartListID);
  const dispatch = useDispatch();
  const [dataCart, setDataCart] = useState();
  const [totalCart, setTotalCart] = useState(0);
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });

  useEffect(() => {
    let configGetListCart = "?";
    const uniqueIds = [];

    const uniqueEmployees = listCart.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.productId);

      if (!isDuplicate) {
        uniqueIds.push(element.productId);

        return true;
      }

      return false;
    });

    uniqueEmployees.forEach((item) => {
      configGetListCart += `id=${item.productId}&`;
    });

    listCart.length >= 1 &&
      GetProduct(`${GET_PRODUCTS}/${configGetListCart}`).then((res) => {
        setDataCart(res.data);
      });
  }, []);

  useEffect(() => {
    setTotalCart(0);
    dataCart &&
      listCart?.map((itemCart) => {
        dataCart?.map((productCart) => {
          if (itemCart.productId === productCart.id)
            setTotalCart(
              (prev) => prev + productCart.price * itemCart.quantity
            );
        });
      });
  }, [dataCart, listCart]);
  return (
    <Box mx="32px" my="32px" display="flex" gap="200px">
      {/* list Cart */}
      <Box flex="0.7">
        <Box display="flex" flexDirection="column" gap="10px">
          <Heading mb="40px" display="block" as="h3" size="lg">
            سبد خرید
          </Heading>
          <Box display="flex" flexDirection="column" gap="40px">
            {dataCart &&
              listCart?.map((itemCart) =>
                dataCart?.map(
                  (productCart) =>
                    itemCart.productId === productCart.id && (
                      <>
                        <Box display="flex">
                          {/* {setTotalCart((productCart.price * itemCart.quantity))} */}
                          {/* image */}
                          <Box flex="0.2">
                            <div
                              style={{
                                backgroundImage: `url(http://localhost:3001/files/${productCart.images[0]})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: " contain, cover",
                                backgroundPosition: "bottom",
                                width: "100px",
                                height: "100px",
                              }}
                            ></div>
                          </Box>
                          {/* info product cart */}
                          <Box
                            flex="0.6"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                          >
                            <Box
                              display="flex"
                              flexDirection="column"
                              gap="10px"
                            >
                              <Heading color="gray.600" as="h5" size="md">
                                {productCart["product-name-fa"]}
                              </Heading>
                              <Heading color="gray.500" as="h6" size="sm">
                                سایز {itemCart["sizeShoes"]}
                              </Heading>
                            </Box>
                            <NumberInput
                              borderColor="gray.100"
                              //   pr="10px"
                              size="sm"
                              dir="ltr"
                              maxW={16}
                              focusBorderColor="purple.200"
                              value={itemCart["quantity"]}
                              min={1}
                              max={+productCart["count"]}
                            >
                              <NumberInputField focusBorderColor="red.200" />
                              <NumberInputStepper
                                pl="5px"
                                borderColor="gray.300"
                              >
                                <NumberIncrementStepper
                                  _active={{ bg: "green.200" }}
                                  children="+"
                                  onClick={() =>
                                    +itemCart.quantity <
                                      +productCart["count"] &&
                                    dispatch({
                                      type: ADD_CART,
                                      paylad: {
                                        id: productCart.id,
                                        sizeShoes: itemCart.sizeShoes,
                                      },
                                    })
                                  }
                                />
                                <NumberDecrementStepper
                                  _active={{ bg: "pink.200" }}
                                  children="-"
                                  onClick={() =>
                                    +itemCart.quantity > 1 &&
                                    dispatch({
                                      type: DECREMENT_CART,
                                      paylad: {
                                        id: productCart.id,
                                        sizeShoes: itemCart.sizeShoes,
                                      },
                                    })
                                  }
                                />
                              </NumberInputStepper>
                            </NumberInput>
                          </Box>
                          <Box
                            flex="0.2"
                            display="flex"
                            alignItems="flex-end"
                            flexDirection="column"
                            justifyContent="space-between"
                          >
                            <Button
                              onClick={() =>
                                dispatch({
                                  type: REMOVE_CART,
                                  paylad: {
                                    productId: itemCart.productId,
                                    sizeShoes: itemCart.sizeShoes,
                                  },
                                })
                              }
                              rightIcon={<FaRegTrashAlt color="#acabab" />}
                            ></Button>
                            <Heading color="gray.700" as="h6" size="sm">
                              {formatter.format(
                                productCart.price * itemCart.quantity
                              )}{" "}
                              <span style={{ fontSize: "8px" }}>ريال</span>
                            </Heading>
                          </Box>
                        </Box>
                        <Divider color="gray.300" />
                      </>
                    )
                )
              )}
          </Box>
        </Box>
      </Box>
      {/* list cheackout */}
      <Box display="flex" flexDirection="column" gap="40px">
        <Box display="flex" justifyContent="space-between" gap="40px">
          <Heading as="h4" size="lg">
            مبلغ پرداختی
          </Heading>
          <Heading as="h4" size="lg">
            {formatter.format(totalCart)}{" "}
            <span style={{ fontSize: "8px" }}>ريال</span>
          </Heading>
        </Box>
        <Button
          px="50px"
          w="100%"
          bg="#313238 "
          isDisabled={listCart.length >= 1 ? false : true}
          colorScheme="blue"
          size="lg"
          variant="solid"
          onClick={onOpen}
        >
          پرداخت
        </Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent dir="rtl">
            <ModalHeader>مشخصات</ModalHeader>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>نام</FormLabel>
                <Input ref={initialRef} placeholder="نام" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>نام خانودادگی</FormLabel>
                <Input placeholder="نام خانودادگی" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>تلفن همراه</FormLabel>
                <Input type="Number" placeholder="تلفن همراه" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>تاریخ تحویلی</FormLabel>
                <div style={{ direction: "rtl" }}>
                  <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                  />
                </div>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={()=>{
                onClose()
                toast({
                    status: "success",
                    duration: 3000,
                    position: "bottom",
                    isClosable: true,
                    render: () => (
                      <Box>
                        <Alert display="flex" justifyContent="flex-end" status="success" variant='solid'>
                          سفارش ثبت شد
                          <AlertIcon ml="8px"/>
                        </Alert>
                      </Box>
                    ),
                  });
                  dispatch({
                    type: "DEF",
                  })
              setDataCart()
              navigate("/home");
              }} colorScheme="blue" mr={3}>
                پرداخت
              </Button>
              <Button onClick={onClose}>انصراف</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
