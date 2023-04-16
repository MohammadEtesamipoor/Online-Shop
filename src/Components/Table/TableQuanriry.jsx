import PropTypes from "prop-types";
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
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FaEdit, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

function TableQuanriry({ listProduct, buttonStatusSave, getListProduct }) {
  const [pagination, setPagination] = useState(10);
  const [dataProduct, setDataProduct] = useState(listProduct);
  const [dataProductUpdate, setDataProductUpdate] = useState([...listProduct]);
  const [bgInput, setBgInput] = useState();
  const [listProductToTable, setListProductToTable] = useState("");
  const avgCountProduct = Math.ceil(listProduct.length / 10);
  const paginationNumbers = Array.from(Array(avgCountProduct).keys());
  const handelPriceFormat = (item) => {
    let arr = [];
    item.split("").forEach((element, index) => {
      arr.push(element);
      if ((index + 1) % 3 === 0) {
        arr.push(",");
      }
    });
    return arr.join("");
  };

  const handelPagination = (item) => {
    setPagination(item * 10);
  };

  useEffect(() => {
    if (listProductToTable) {
      listProductToTable.map((item) => {
        if (item.statusBtn === "false") {
          buttonStatusSave(false);
          setBgInput(item.id);
        }
      });
    }
    getListProduct(listProductToTable);
  }, [listProductToTable]);

  const handelCountCell = (e, id, items, priceOrCount) => {
    let dataProductFilter = "";
    let saveData = false;
    let cheackFiltered = true;
    dataProduct.map((item) => {
      if (item.id == id) {
        if (item[priceOrCount] != e.target.value) {
          buttonStatusSave(false);
          item.statusBtn = "false";
          setBgInput(item.id);
          saveData = true;
        } else {
          buttonStatusSave(true);
          item.statusBtn = "";
          setBgInput();
          // saveData=false;
        }
        if (listProductToTable) {
          listProductToTable.map((itemFiltered) => {
            if (itemFiltered[priceOrCount] != e.target.value) saveData = true;
            else saveData = false;
          });
        }
        if (saveData) {
          dataProductFilter = JSON.parse(JSON.stringify(item));
          dataProductFilter[priceOrCount] = e.target.value;
          const deleteDuplicateData =
            listProductToTable &&
            listProductToTable?.filter((item) => item.id !== id);

          if (priceOrCount == "price") {
            listProductToTable &&
              listProductToTable.map((item) => {
                if (item.id === id) {
                  dataProductFilter.count = item.count;
                  //  dataProductFilter.statusBtn = ""
                }
              });
          } else {
            listProductToTable &&
              listProductToTable.map((item) => {
                if (item.id === id) {
                  dataProductFilter.price = item.price;
                  // dataProductFilter.statusBtn = ""
                }
              });
          }

          setListProductToTable([...deleteDuplicateData, dataProductFilter]);
        } else {
          setListProductToTable(
            listProductToTable.filter((item) => item.id === id)
          );
        }
      }
    });
  };

  return (
    <>
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
              <Th>نام کالا</Th>
              <Th>قیمت</Th>
              <Th>موجودی</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataProduct.slice(pagination - 10, pagination).map((item) => (
              <Tr key={item["id"]} bg="#A0C9DD">
                <Td>{item["product-name-fa"]}</Td>
                <Td>
                  <Input
                    onChange={(e) => handelCountCell(e, item.id, item, "price")}
                    htmlSize={4}
                    width="auto"
                    variant="filled"
                    defaultValue={item["price"]}
                    color="#a73737"
                    // backgroundColor={item.id === bgInput &&"red"}
                  />
                </Td>
                <Td>
                  <Input
                    onChange={(e) => handelCountCell(e, item.id, item, "count")}
                    htmlSize={4}
                    width="auto"
                    variant="filled"
                    defaultValue={item["count"]}
                    color="#a73737"
                    backgroundColor={item.id === bgInput && "#db6060"}
                  />
                </Td>
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
}

export default TableQuanriry;
