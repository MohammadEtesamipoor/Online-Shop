import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { useEffect, useState } from "react";
import {ProductCard} from 'Components'
import {
  Box,
  Skeleton,
  SkeletonText,
  Heading,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Tooltip,
} from "@chakra-ui/react";
export function HomePage() {
  const [categoryData, setCategoryData] = useState();
  const [productData, setProductData] = useState();
  const [imageZoom, setImageZoom] = useState();
  useEffect(() => {
    GetProductsCategory().then((res) => {
      setCategoryData(res.data);
    });
    GetProducts().then((res) => {
      setProductData(res.data);
    });
  }, []);
  return (
    <Box mx="32px" my="32px">
      {productData ? (
        <Box display="flex" flexDirection="column" gap="40px">
          {categoryData.map((itemCategory) => (
            // Box list category box
            <Box>
              <Heading>{itemCategory["name-fa"]}</Heading>
              {/* Box list product card */}
              <Box display="flex" gap="10px" my="20px" mx="30px">
                {/*Box card product */}
                {productData.map(
                  (itemProduct) =>
                    itemProduct["category-id"] == itemCategory["id"] && (
                      <ProductCard itemProduct={itemProduct} itemCategory={itemCategory} />
                    )
                )}
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box padding="6" boxShadow="lg" bg="white">
          <Skeleton width="15%" height="20px" />
          <SkeletonText mt="10" noOfLines={4} spacing="10" />
        </Box>
      )}
    </Box>
  );
}
