import { Box, Heading, Skeleton, SkeletonText,Button } from "@chakra-ui/react";
import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductCard } from "Components/ProductCard/ProductCard";
import { PAGE } from "Configs/route";
import { Navigate } from "react-router-dom";
export function ProductsPage() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  const [activeCategoryData, setActiveCategoryData] = useState();
  const { categoryId } = useParams();
  useEffect(() => {
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
    console.log(categoryData);
    console.log(productData);
  }, []);
  return (
    <Box mx="32px" my="60px" display="flex">
      <Box width="80%" >
        {productData ? (
          <Box display="flex" flexDirection="column" gap="40px">
            {categoryData.map(
              (itemCategory) =>
                // Box list category box
                itemCategory.id == categoryId && (
                  <Box>
                    <Link to={`${PAGE.Products}/${itemCategory.id}`}>
                      <Heading>{itemCategory["name-fa"]}</Heading>
                    </Link>
                    {/* Box list product card */}
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      gap="40px"
                      my="20px"
                      mx="30px"
                    >
                      {/*Box card product */}
                      {productData.map(
                        (itemProduct) =>
                          itemProduct["category-id"] == itemCategory["id"] && (
                            <ProductCard
                              itemProduct={itemProduct}
                              itemCategory={itemCategory}
                            />
                          )
                      )}
                    </Box>
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
