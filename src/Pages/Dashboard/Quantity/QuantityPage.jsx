
import { GetProducts } from "apis/ApiProduct";
import { useEffect } from "react";
import { useState } from "react";
import { TableQuanriry } from "Components";
import { FaEye, FaEyeSlash, FaUserAlt, FaRegSave } from "react-icons/fa";
import {
  Box,
  Button,
  Heading,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

export function AdminQuantityPage() {
  const [productData, setproductData] = useState([]);

  const [CategoryProductData, setCategoryProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await GetProducts().then((res) => {
        setproductData(res.data);
      });
    };
    fetchData();
  }, []);
  return (
    // {/* productData.length > 0 ? productData[0].count : "loadiing" */}
    <Box h="100%">
      <Box mt="20px" display="flex" justifyContent="space-between" px="4">
        <Heading color="#525261">مدیریت موجودی و قیمت ها</Heading>
        <Button rightIcon={<FaRegSave />} colorScheme="teal" variant="outline">
         ذخیره
        </Button>
      </Box>
      {productData.length > 0 ? (
        <TableQuanriry
          listProduct={productData}
        />
      ) : (
        "loadiing"
      )}
    </Box>
  );
}
