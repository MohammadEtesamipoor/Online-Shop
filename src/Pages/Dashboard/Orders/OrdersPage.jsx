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
} from "@chakra-ui/react";

export function AdminOrdersPage() {
  const [OrdersData, setOrdersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await GetOrders().then((res) => {
        setOrdersData(res.data);
      });
    };
    fetchData();
  }, []);
  return (
    // {/* productData.length > 0 ? productData[0].count : "loadiing" */}
    <Box h="100%">
      <Box mt="20px" display="flex" justifyContent="space-between" px="4">
        <Heading color="#525261">مدیریت سفارش ها</Heading>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="1">
              سفارش های در انتظار ارسال
            </Radio>
            <Radio colorScheme="green" value="2">
              سفارش های تحویل شده
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {OrdersData.length > 0 ? (
        <TableOrdersPage listOrders={OrdersData} />
      ) : (
        "loadiing"
      )}
    </Box>
  );
}