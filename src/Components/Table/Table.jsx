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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaEdit, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
export const TableAdminPage = (props) => {
  const [pagination, setPagination] = useState(10);
  const avgCountProduct = Math.ceil(props.listProduct.length / 10);
  const paginationNumbers = Array.from(Array(avgCountProduct).keys());
  const handelPagination = (item) => {
    setPagination(item * 10);
  };
  return (
    <>
      <TableContainer maxWidth="100%" whiteSpace="normal">
        <Table variant="striped">
          <TableCaption>
            <Tabs variant="enclosed" display="flex" justifyContent="center">
              <TabList>
                {paginationNumbers.map((itme) => (
                  <Tab onClick={() => handelPagination(itme + 1)}>
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
            {props.listProduct
              .slice(pagination - 10, pagination)
              .map((item) => (
                <Tr bg="#A0C9DD" key={item.id}>
                  <Td>{item["id"]}</Td>
                  <Td>{item["product-name-fa"]}</Td>
                  <Td>{props.listCategory[item["category-id"]]["name-en"]}</Td>
                  <Td>
                    <Box display="flex" gap={6}>
                      <Link display="flex" gap={2}>
                        ویرایش <FaRegEdit mx="2px" />
                      </Link>
                      <Link display="flex" gap={2}>
                        حذف <FaRegTrashAlt mx="2px" />
                      </Link>
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
