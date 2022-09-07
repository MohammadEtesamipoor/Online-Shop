import { DeleteButtonProduct } from "Components/Button/DeleteButtonProduct";
// import {} from "../../upload/index";
import { ProductModal } from "Components/ProductModal/ProductModal";

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
  CloseButton,
  Link,
  Tabs,
  TabList,
  Tab,
  Image,
  useToast,
  ModalOverlay,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteProducts } from "apis/ApiProduct";
import { FaEdit, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
export const TableAdminPage = (props) => {
  const [statusModal, setStatusModal] = useState();
  const [ProductModalEdit, setProductModalEdit] = useState();
  const [pagination, setPagination] = useState(10);
  const [dataProduct, setDataProduct] = useState(props.listProduct);
  const [test, setTest] = useState();
  const avgCountProduct = Math.ceil(props.listProduct.length / 10);
  const paginationNumbers = Array.from(Array(avgCountProduct).keys());

  const getStatusDeleteProduct = (item) => {
    const dataFilter = dataProduct.filter((element) => element.id !== item);
    setDataProduct(dataFilter);

    // delte product from db
    DeleteProducts(item);
  };

  const handelPagination = (item) => {
    setPagination(item * 10);
  };
  return (
    <>
      {statusModal ? <ProductModal product={ProductModalEdit}  statusModal={statusModal} /> : null}
      <TableContainer maxWidth="100%" whiteSpace="normal">
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
              <Th>تصویر</Th>
              <Th>نام کالا</Th>
              <Th>دسته بندی</Th>
              <Th>ویرایش</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataProduct.slice(pagination - 10, pagination).map((item) => (
              <Tr bg="#A0C9DD" key={item.id}>
                <Td>
                  <div
                    style={{
                      backgroundImage: `url(http://localhost:3001/files/${item.images[0]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: " contain, cover",
                      backgroundPosition: "bottom",
                      width: "120px",
                      height: "50px",
                    }}
                  ></div>
                </Td>

                <Td>{item["product-name-fa"]}</Td>
                <Td>
                  {props.listCategory.map((itemCategory) =>
                    itemCategory["id"] == item["category-id"]
                      ? itemCategory["name-fa"]
                      : null
                  )}
                </Td>
                <Td>
                  <Box display="flex" gap={6}>
                    <Link
                      display="flex"
                      gap={2}
                      onClick={() => {
                        statusModal == "onOpen"
                          ? setStatusModal("isOpen")
                          : setStatusModal("onOpen");
                          setProductModalEdit(item)
                      }}
                    >
                      ویرایش <FaRegEdit mx="2px" />
                    </Link>
                    <DeleteButtonProduct
                      getStatusDeleteProduct={getStatusDeleteProduct}
                      idProduct={item.id}
                      nameProduct={item["product-name-fa"]}
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>تصویر</Th>
              <Th>نام کالا</Th>
              <Th>دسته بندی</Th>
              <Th>ویرایش</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
