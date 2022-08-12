import { GetOrders } from "apis/ApiOrders";
// orders
import { useEffect } from "react";
import { useState } from "react";
import { TableOrdersPage } from "Components";
import { FaEye, FaEyeSlash, FaUserAlt, FaPlus } from "react-icons/fa";
import {
  Box,
  Button,
  Heading,
  ButtonGroup,
  IconButton,
  RadioGroup,
  Stack,
  Radio,
  Tabs,
TabList,
Tab
} from "@chakra-ui/react";

export function AdminOrdersPage() {
  const [OrdersData, setOrdersData] = useState([]);
  const [satusOrders, setSatusOrders]= useState("0")
  useEffect(() => {
    const fetchData = async () => {
      await GetOrders().then((res) => {
        setOrdersData(res.data);
      });
    };
    fetchData();
  }, []);

  const handelStatusOrders = (e) => {
    setSatusOrders(e);
  };
  return (
    // {/* productData.length > 0 ? productData[0].count : "loadiing" */}
    <Box h="100%">
      <Box mt="20px" display="flex" justifyContent="space-between" px="4">
        <Heading color="#525261">مدیریت سفارش ها</Heading>

        <Tabs variant="soft-rounded" colorScheme="red" onChange={(e)=>handelStatusOrders(e)}>
          <TabList>
            <Tab >سفارش های تحویل شده</Tab>
            <Tab >سفارش های در انتظار ارسال</Tab>
          </TabList>
        </Tabs>
      </Box>
      {OrdersData.length > 0 ? (
        <TableOrdersPage listOrders={OrdersData} statusOrders={satusOrders} />
      ) : (
        "loadiing"
      )}
    </Box>
  );
}
