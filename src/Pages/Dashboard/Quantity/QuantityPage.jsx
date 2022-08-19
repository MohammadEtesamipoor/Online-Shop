import { GetProducts } from "apis/ApiProduct";
import { UpdateProducts } from "apis/ApiProduct";
import { useEffect } from "react";
import { useState } from "react";
import TableQuanriry from "Components/Table/TableQuanriry";
import { FaEye, FaEyeSlash, FaUserAlt, FaRegSave } from "react-icons/fa";
import {
  Box,
  Button,
  Heading,
  ButtonGroup,
  IconButton,
  useToast,
} from "@chakra-ui/react";

export function AdminQuantityPage() {
  const [productData, setproductData] = useState([]);
  const [listProductFromTable, setListProductFromTable] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const toast = useToast();

  const [CategoryProductData, setCategoryProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await GetProducts().then((res) => {
        setproductData(res.data);
      });
    };
    fetchData();
  }, []);
  const buttonStatusSave = (status) => {
    // console.log(status);
    setButtonStatus(status);
  };

  useEffect(() => {
  
  },[listProductFromTable])

  const getListProduct = (item) => {
    if(item){
      setListProductFromTable(item);
    }
  };
  const changeEditTable = () => {
     const tst= listProductFromTable
     tst.map((item,index)=>{
      if(item.statusBtn==="false"){
        item.statusBtn=""
        UpdateProducts(item.id,item)
        toastUpdate(item['product-name-fa'])
        setButtonStatus(true);
      }
    })
  };
  const toastUpdate=(name)=>{
    toast({
      title: 'تغییرات انجام شد',
      description: `${name} تغییر کرد`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    // {/* productData.length > 0 ? productData[0].count : "loadiing" */}
    <Box h="100%">
      <Box mt="20px" display="flex" justifyContent="space-between" px="4">
        <Heading color="#525261">مدیریت موجودی و قیمت ها</Heading>
        <Button
          disabled={buttonStatus}
          rightIcon={<FaRegSave />}
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            changeEditTable();
          }}
        >
          ذخیره
        </Button>
      </Box>
      {productData.length > 0 ? (
        <TableQuanriry
          listProduct={productData}
          buttonStatusSave={buttonStatusSave}
          getListProduct={getListProduct}
        />
      ) : (
        "loadiing"
      )}
    </Box>
  );
}
