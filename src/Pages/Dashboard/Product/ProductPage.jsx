import { GetProducts } from "apis/ApiProduct";
// import { GetProducts } from "apis/ApiProduct";
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
      await GetProducts().then((res) => {
        setproductData(res.data);
      });
    };
    fetchData();
    console.log(productData.slice(0, 20));
  }, []);
  return (
    // {/* productData.length > 0 ? productData[0].count : "loadiing" */}
    <>
    <h1>
        product page
    </h1>
    </>
  );
}
