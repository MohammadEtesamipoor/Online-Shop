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

import { FaEdit, FaRegEdit, FaUserClock } from "react-icons/fa";

export const TableOrdersPage = (props) => {
  const [pagination, setPagination] = useState(10);
  const avgCountProduct = Math.ceil(props.listOrders.length / 10);
  const paginationNumbers = Array.from(Array(avgCountProduct).keys());
  console.log(props.listOrders);
  const handelPagination = (item) => {
    setPagination(item * 10);
  };

  const handelPriceFormat = (item) => {
    let arr = [];
    item.split("").forEach((element, index) => {
      arr.push(element);
      if ((index + 1) % 3 === 0) {
        arr.push(",");
      }
    });
    return arr.join("") + "ریال";
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
              <Th>نام کاربر</Th>
              <Th>مجموع مبلغ</Th>
              <Th>زمان ثبت سفارش</Th>
              <Th>وضعیت</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.listOrders.slice(pagination - 10, pagination).map((item) => (
              <Tr bg="#A0C9DD" key={item.id}>
                <Td>
                  {item.name} {item.family}
                </Td>
                <Td>{handelPriceFormat(item["total-price"])}</Td>
                <Td>{item["createdAt"]}</Td>
                <Td>
                  <Box display="flex" gap={6}>
                    <Link display="flex" gap={2}>
                      بررسی سفارس <FaUserClock mx="2px" />
                    </Link>
                  </Box>
                </Td>
              </Tr>
            ))}
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
