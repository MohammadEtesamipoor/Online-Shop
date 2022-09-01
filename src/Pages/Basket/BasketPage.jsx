import { Box, Heading, Button, Text,Divider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { GetProduct } from "apis/ApiProduct";
import { useEffect, useState } from "react";
import { GET_PRODUCTS } from "Configs/url";
export function BasketPage() {
  const listCart = useSelector((state) => state.cartListID);
  const [dataCart, setDataCart] = useState();
  console.log(listCart);
  useEffect(() => {
    let configGetListCart = "?";
    const uniqueIds = [];

    const uniqueEmployees = listCart.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.productId);

      if (!isDuplicate) {
        uniqueIds.push(element.productId);

        return true;
      }

      return false;
    });
    console.log(uniqueEmployees);

    uniqueEmployees.forEach((item) => {
      configGetListCart += `id=${item.productId}&`;
    });

    console.log(configGetListCart);
    listCart.length >= 1 &&
      GetProduct(`${GET_PRODUCTS}/${configGetListCart}`).then((res) => {
        setDataCart(res.data);
      });
    console.log(dataCart);
  }, []);
  return (
    <Box mx="32px" my="32px" display="flex" gap="10px">
      {/* list Cart */}
      <Box flex="0.8">
        <Box display="flex" flexDirection="column" gap="10px">
        <Heading display="block" as="h3" size="lg" color="gray.600">
          سبد خرید
        </Heading>
        <Divider color="gray.100" mb="40px"/>
          {dataCart &&
             listCart?.map((itemCart) => (
                dataCart?.map(productCart=>(
                    itemCart.productId===productCart.id&&
                    <Box display="flex">
                    {/* image */}
                    <Box flex="0.3">
                      <div
                        style={{
                          backgroundImage: `url(http://localhost:3001/files/${productCart.images[0]})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: " contain, cover",
                          backgroundPosition: "bottom",
                          width: "100px",
                          height: "100px",
                        }}
                      ></div>
                    </Box>
                    {/* info product cart */}
                    <Box>
                      <Heading>{productCart["product-name-fa"]}</Heading>
                    </Box>
                  </Box>
                ))
            ))}
        </Box>
      </Box>
      {/* list cheackout */}
      <Box felx="0.2">مبلغ پرداختی</Box>
    </Box>
  );
}
