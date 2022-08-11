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
  Link
} from "@chakra-ui/react";

import {FaEdit,FaRegEdit,FaRegTrashAlt} from "react-icons/fa";
export const TableAdminPage = (props) => {
  return (
    <>
      <TableContainer maxWidth="100%" whiteSpace="normal">
        <Table variant="striped" >
          <TableCaption>pagintion</TableCaption>
          <Thead>
            <Tr>
              <Th>تصویر</Th>
              <Th>نام کالا</Th>
              <Th>دسته بندی</Th>
              <Th>ویرایش</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.listProduc.map((item) => (
              <Tr bg="#A0C9DD" key={item.id}>
                <Td>{item["id"]}</Td>
                <Td>{item["product-name-fa"]}</Td>
                <Td>{props.listCategory[item["category-id"]]["name-en"]}</Td>
                <Td>
                  <Box display="flex" gap={6}>
                    <Link display="flex" gap={2}   >
                      ویرایش <FaRegEdit mx="2px" />
                    </Link>
                    <Link display="flex" gap={2}  >
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
