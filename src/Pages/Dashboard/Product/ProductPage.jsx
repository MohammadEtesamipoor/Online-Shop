import { GetProducts } from "apis/ApiProduct";
import { GetProductsCategory } from "apis/ApiCategory";
import { useEffect } from "react";
import { useState } from "react";
import { TableAdminPage } from "Components";
import { FaEye, FaEyeSlash, FaUserAlt, FaPlus } from "react-icons/fa";
import {
  Box,
  Button,
  Heading,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

export function AdminProductPage() {
  const [productData, setproductData] = useState([]);

  const [CategoryProductData, setCategoryProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        await GetProductsCategory().then(res=>{
            setCategoryProductData(res.data);
        })
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
        <Heading color="#525261">مدیریت کالاها</Heading>
        <Button
          rightIcon={<FaPlus />}
          colorScheme="teal"
          variant="outline"
          
        >
         افزودن کالا
        </Button>
      </Box>
      {productData.length > 0 ? (
        <TableAdminPage listProduct={productData} listCategory={CategoryProductData}  />
      ) : (
        "loadiing"
      )}
    </Box>
  );
}
