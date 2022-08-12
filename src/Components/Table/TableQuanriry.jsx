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
  export const TableQuanriry = (props) => {
    const [pagination, setPagination] = useState(10);
    const avgCountProduct = Math.ceil(props.listProduct.length / 10);
    const paginationNumbers = Array.from(Array(avgCountProduct).keys());
    const handelPriceFormat=(item)=>{
            let arr=[];
             item.split("").forEach((element,index) => {
               arr.push(element)
               if((index+1)%3===0){
                 arr.push(',')
                }
            });
            return arr.join("")+"ریال";
    }
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
                <Th>نام کالا</Th>
                <Th>قیمت</Th>
                <Th>موجودی</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.listProduct
                .slice(pagination - 10, pagination)
                .map((item) => (
                  <Tr bg="#A0C9DD" key={item.id}>
                    <Td>{item["product-name-fa"]}</Td>
                    <Td >
                   {handelPriceFormat(item["price"]["amount"])}
                    </Td>
                    <Td>{item["count"]}</Td>
            
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                 <Th>نام کالا</Th>
                <Th>قیمت</Th>
                <Th>موجودی</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
    );
  };
  