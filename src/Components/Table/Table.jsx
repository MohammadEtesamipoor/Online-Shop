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
} from "@chakra-ui/react";

export const TableAdminPage = (props) => {
  return (
    <>

      <TableContainer>
        <Table variant="striped"  colorScheme='gray' >
          <TableCaption>pagintion</TableCaption>
          <Thead>
            <Tr >
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.listProduc.map((item) => (
              <Tr  key={item.id}>
                <Td>{item['images']}</Td>
                <Td>{item['product-name-fa']}</Td>
                <Td>{item['product-name-fa']}</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
