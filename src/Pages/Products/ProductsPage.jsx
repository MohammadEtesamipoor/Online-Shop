import {
  Box,
  Heading,
  Skeleton,
  SkeletonText,
  Button,
  Text,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Accordion,
  Divider,
  Center,
  Select,
  Show,
  Hide,
} from "@chakra-ui/react";
import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProductCard } from "Components/ProductCard/ProductCard";
import { PAGE } from "Configs/route";
import { useSelector } from "react-redux";
import ColorHeaderContext from "Context/headerColor";
export function ProductsPage() {
  const [categoryData, setCategoryData] = useState();
  const [defaultIndx, setDefaultIndx] = useState(0);
  const [productData, setProductData] = useState();
  const [activeCategoryData, setActiveCategoryData] = useState();
  const { color, setColor } = React.useContext(ColorHeaderContext);

  const { categoryId } = useParams();
  const dataCat = useSelector((state) => state.category.dataCategory);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(categoryId);
    const fetchData = async () => {
      await GetProductsCategory().then((res) => {
        setCategoryData(res.data);
      });
      await GetProducts().then((res) => {
        setProductData(res.data);
        setActiveCategoryData(
          res.data.filter((item) => item["category-id"] == categoryId)
        );
      });
    };
    fetchData();

  }, []);
  return (
    <Box color={color[color.selected].clr} mt="-80px" display="flex">
      <Box>
        {productData ? (
          <Box  display="flex" flexDirection="column" gap="40px">
            {categoryData.map(
              (itemCategory) =>
                // Box list category box
                itemCategory.id == categoryId && (
                  <Box key={categoryId}>
                    <Box
                      top="0px"
                      width="100vw"
                      bg="#EBEBEB"
                      color={
                        color.selected === "dark"
                          ? color[color.selected].bgClr
                          : color[color.selected].clr
                      }
                      textAlign="center"
                      py="50px"
                    >
                      <Link to={`${PAGE.Products}/${itemCategory.id}`}>
                        <Heading as="h2" size="lg">
                          {itemCategory["name-fa"]}
                        </Heading>
                      </Link>
                    </Box>
                    {/* Box list product card */}
                    <Box display="flex" gap="30px" mx="62px">
                  <Hide below="lg" >
                  <Box my="42px" minW="17%">
                        <Text>دسته بندی محصولات</Text>
                        <Box>
                          
                          <Accordion defaultIndex={[1]} my="20px" allowToggle>
                            {dataCat &&
                              dataCat.map(
                                (cat,indx) =>
                               
                                  cat["childs"] === true && (

                                    <AccordionItem>
                          
                                       {/* {console.log(defaultIndx)} */}
                                      <h2>
                                        <AccordionButton>
                                          <Box
                                            as="span"
                                            flex="1"
                                            textAlign="right"
                                          >
                                            <Link
                                    
                                              onClick={() => {
                                                navigate(
                                                  PAGE.Products + "/" + cat.id
                                                );
                                              }}
                                              style={{ textDecoration: "none" }}
                                              _hover={{
                                                borderBottom:
                                                  "1px solid #c9c9c9",
                                                color: "gray",
                                              }}
                                            >
                                              {cat["name-fa"]}
                                            </Link>
                                          </Box>
                                          <AccordionIcon />
                                        </AccordionButton>
                                      </h2>
                                      <AccordionPanel
                                        display="flex"
                                        flexDirection={"column"}
                                        gap="10px"
                                        pb={4}
                                        px="30px"
                                      >
                                        {dataCat &&
                                          dataCat.map(
                                            (item) =>
                                              item["parentId"] ==
                                                cat["parentId"] && (
                                                <>
                                                  <Link>{item["name-fa"]}</Link>
                                                </>
                                              )
                                          )}
                                      </AccordionPanel>
                                    </AccordionItem>
                                  )
                              )}
                          </Accordion>
                        </Box>
                      </Box>
                      <Box>
                        <Divider orientation="vertical" />
                      </Box>
                  </Hide>
           
                      <Box my="42px" display="flex" flexWrap="wrap" gap="10px">
                        {/*Box card product */}
                        <Box
                          w="100%"
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Select
                            px="15px"
                            border="none"
                            placeholder="مرتب سازی پیش فرض"
                            size="md"
                          >
                            <option
                              value="option1"
                              style={{
                                color:
                                  color.selected == "dark" &&
                                  color[color.selected].bgClr,
                              }}
                            >
                              مرتب سازی بر اساس قیمت: کم به زیاد
                            </option>
                            <option
                              value="option1"
                              style={{
                                color:
                                  color.selected == "dark" &&
                                  color[color.selected].bgClr,
                              }}
                            >
                              مرتب سازی بر اساس قیمت: زیاد به کم
                            </option>
                            <option
                              value="option1"
                              style={{
                                color:
                                  color.selected == "dark" &&
                                  color[color.selected].bgClr,
                              }}
                            >
                              مرتب سازی بر اساس محبوبیت
                            </option>
                            <option
                              value="option1"
                              style={{
                                color:
                                  color.selected == "dark" &&
                                  color[color.selected].bgClr,
                              }}
                            >
                              مرتب سازی بر اساس رتبه بندی
                            </option>
                          </Select>
                        </Box>
                        {productData.map(
                          (itemProduct) =>
                            itemProduct["category-id"] ==
                              itemCategory["id"] && (
                              <ProductCard
                                itemProduct={itemProduct}
                                itemCategory={itemCategory}
                              />
                            )
                        )}
                      </Box>
                    </Box>
                    <Center>
                      <Divider mx="62px" orientation="horizontal" />
                    </Center>
                  </Box>
                )
            )}
          </Box>
        ) : (
          <Box padding="6" boxShadow="lg" bg="white">
            <Skeleton width="15%" height="20px" />
            <SkeletonText mt="10" noOfLines={4} spacing="10" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
