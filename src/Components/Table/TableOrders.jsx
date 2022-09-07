import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Button,
  Heading,
  Link,
  Tabs,
  TabList,
  Tab,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Alert,
  AlertIcon,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";
import { PostOrders } from "apis/ApiOrders";
import { useEffect, useState } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import { useDispatch, useSelector } from "react-redux";

import { FaEdit, FaRegEdit, FaUserClock } from "react-icons/fa";
import { GET_DATA } from "store/type/BasketType";
import { GET_PRODUCTS } from "Configs/url";
import { GetProducts } from "apis/ApiProduct";
export const TableOrdersPage = (props) => {
  const [dataProducts, setDataProduct] = useState();
  const [pagination, setPagination] = useState(10);
  const [statusOrdersData, setStatusOrdersData] = useState("posted");
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  useEffect(() => {
    GetProducts().then((res) => {
      setDataProduct(res.data);
    });
  }, []);
  useEffect(() => {
    props.statusOrders === 0
      ? setStatusOrdersData("posted")
      : setStatusOrdersData("pending");
  }, [props.statusOrders]);

  const avgCountProduct = Math.ceil(props.listOrders.length / 10);
  const paginationNumbers = Array.from(Array(avgCountProduct).keys());

  const handelPagination = (item) => {
    setPagination(item * 10);
  };

  return (
    <>
      <TableContainer maxWidth="100%" whiteSpace="normal">
        {/* <>{dataProducts&& dataProducts[0]["price"]}</> */}
        <Table variant="striped">
          <TableCaption>
            <Tabs variant="enclosed" display="flex" justifyContent="center">
              <TabList>
                {paginationNumbers.map((itme,index) => (
                  <Tab key={index} onClick={() => handelPagination(itme + 1)}>
                    {itme + 1}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>نامم کاربر</Th>
              <Th>مجموع مبلغ</Th>
              <Th>زمان ثبت سفارش</Th>
              <Th>وضعیت</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.listOrders.slice(pagination - 10, pagination).map(
              (item) =>
                item["status"] === statusOrdersData && (
                  <Tr bg="#A0C9DD" key={item.id}>
                    <Td>
                      {item.name} {item.family}
                    </Td>
                    <Td>
                      {formatter.format(item["totalPrice"])}{" "}
                      <span style={{ fontSize: "8px" }}>ريال</span>
                    </Td>
                    <Td>{handelDateOrder(item["date"])}</Td>
                    <Td>
                      <Box display="flex" gap={6}>
                        <ManualClose item={item} allProduct={dataProducts} />
                      </Box>
                    </Td>
                  </Tr>
                )
            )}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>نام کاربر</Th>
              <Th>مجموع مبلغ</Th>
              <Th>زمان ثبت سفارش</Th>
              <Th>وضعیت</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

const ManualClose = ({ item = [], allProduct = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataProduct, setDataProduct] = useState();
  const formatter = new Intl.NumberFormat("fa-IR", {
    currency: "IRR",
  });
  const toast = useToast();
  const handelStatusOrders = () => {
    item.status = "posted";
    item.date = new DateObject().set("date").unix
    PostOrders(item,item.id).then((res) => {
      toast({
        status: "success",
        duration: 3000,
        position: "bottom",
        isClosable: true,
        render: () => (
          <Box>
            <Alert
              display="flex"
              justifyContent="flex-end"
              status="success"
              variant="solid"
            >
             سفارش تحویل داد شد
              <AlertIcon ml="8px" />
            </Alert>
          </Box>
        ),
      });
      onClose();
    });
  };
  const handeOrderDetails = () => {
    let newData = [];
    allProduct?.map((itemProduct) => {
      item["orderProduct"].map((itemCart) => {
        if (itemProduct.id == itemCart.productId) newData.push(itemProduct);
      });
    });
    newData = [...new Set(newData)];
    setDataProduct(newData);
    onOpen();
  };
  return (
    <>
      <Button onClick={handeOrderDetails}>بررسی سفارش</Button>

      <Modal size={'xl'} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent dir="rtl">
          <ModalHeader as="b">اطلاعات سفارشات کاربر</ModalHeader>
          <ModalBody mx="20px" pb={6}>
            <FormLabel>
              نام مشتری: {item.name} {item.family}
            </FormLabel>
            <FormLabel>آدرس: {item.address}</FormLabel>
            {/* <FormLabel>آدرس: {dataProduct[0]?.id}</FormLabel> */}
            <FormLabel>تلفن: {item.phoneNumber}</FormLabel>
            <FormLabel>زمان تحویل: {handelDateOrder(item.date)}</FormLabel>
            <FormLabel>زمان سفارش: {handelDateOrder(item.createdAt)}</FormLabel>
            <TableContainer>
              <ModalHeader>سفارشات کاربر</ModalHeader>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>نام کالا</Th>
                    <Th>قیمت</Th>
                    <Th>تعداد</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataProduct&&
                   item.orderProduct.map((itemOrder,index) => (
                     // if(itemOrder.productId===itemProduct.id) return itemOrder.sizeShoes+","
                     <Tr key={index}>
                        <Td>
                        {
                              dataProduct.map(itemProduct=>(
                                itemOrder.productId===itemProduct.id&&
                                    `${itemProduct['product-name-fa']} (سایز ${itemOrder['sizeShoes']})`
                              ))
                        }
                        </Td>
                        <Td>
                        {formatter.format(item["totalPrice"])}{" "}
                      <span style={{ fontSize: "8px" }}>ريال</span>
                    </Td>
                        <Td>{itemOrder['quantity']}</Td>
                      </Tr>
                     ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
          {
              item.status==="pending"?
              <Box>
              <Button
                onClick={() => handelStatusOrders()}
                mx="15px"
                colorScheme="blue"
                mr={3}
              >
                تحویل شد
              </Button>
              <Button onClick={onClose}>انصراف</Button>
              </Box>:
              <>
              <Heading   mx="15px" size={"md"}>
                زمان تحویل: {handelDateOrder(item.date)}
              </Heading>
              <Button onClick={onClose}>خروج</Button>
              </>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
const handelDateOrder = (dateOrder) => {
  const newDate = new DateObject({
    date: dateOrder * 1000,
    calendar: persian,
  });
  return newDate.format();
};
