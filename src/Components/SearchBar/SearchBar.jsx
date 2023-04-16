import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  Lorem,
  Input,
  InputRightElement,
  InputGroup,
  SkeletonText,
  Skeleton,
  Box,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { ProductCard } from "Components";
import { Link, useNavigate } from "react-router-dom";
import { PAGE } from "Configs/route";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchBarVisable, sendSearchBarVisable }) {
    const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  const [productDataMain, setProductDataMain] = useState();
  const [valueSearch, setValueSearch] = useState();
  const textInput = useRef(null);
  const handelInputSearch=()=>{
    let arrayListSearch=[]
    textInput.current.focus();
    setValueSearch(textInput.current.value)
    productDataMain.filter(item=>{
       if(item['product-name-fa'].toUpperCase().search(valueSearch.toUpperCase())!==-1) 
       arrayListSearch.push(item)
    })
    setProductData(arrayListSearch);
    arrayListSearch=[];
  }
  useEffect(() => {
    GetProducts().then((res) => {
      setProductDataMain(res.data)
    });
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    searchBarVisable == "onOpen" ? onOpen() : onClose();
  }, [searchBarVisable]);

  const btnRef = React.useRef(null);
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  return (
    <>
      <Modal
        size={"xl"}
        width={{ base: "150px", sm: "250px", md: "350px", lg: "450px" }}
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        scrollBehavior={"inside"}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>
            <InputGroup size="sm" width="95%">
              <Input
                pr="40px"
                variant="flushed"
                placeholder="جستجو"
                color="#383442b8"
                
                textAlign="right"
                borderColor="#E5ECF4"
                focusBorderColor="#E5ECF4"
                ref={textInput} 
                onChange={handelInputSearch}
                fontSize="sm"
                _placeholder={{ color: "#38344290",fontSize:"sm" }}
              />

              <InputRightElement children={<FaSearch color="green.500" />} />
            </InputGroup>
          </ModalHeader>

          <ModalCloseButton
            mt="10px"
            onClick={() => {
              sendSearchBarVisable("onClose");
            }}
          />
          <ModalBody>
            
            {/* list product */}
            {productData &&
              productData.map((product) => (
                <div 
                onClick={()=>{
                navigate(`/product/${product.id}`, {replace: true})
                sendSearchBarVisable("onClose");
                onClose()
                }}
                >
                <Flex
                  p="5px"
                  m="10px"
                  dir="rtl"
                  border="1px"
                  borderColor="gray.200"
                >
                  <Box width="70%">
                    <Text as="b">{product["product-name-fa"]}</Text>
                    <Text>{product["price"]}</Text>
                    <Text>{product["description"].slice(0,70)+"..."}</Text>
                  </Box>
                  <Box >
                    
                      <div
                        style={{
                          backgroundImage: `url(http://localhost:3001/files/${product.images[0]})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: " contain, cover",
                          backgroundPosition: "bottom",
                          width: "150px",
                          height: "100px",
                        }}
                      ></div>
                  
                  </Box>
                </Flex>
                </div>
              ))}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                sendSearchBarVisable("onClose");
                onClose();
              }}
            >
              بستن
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
