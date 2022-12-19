import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import "../../Assets/Fonts/index.css";

export default function Footer() {
  return (
    <Box

      bg="gray.300"
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading>
          <span className="font-enenen">TopKala</span>
        </Heading>

        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>صفحه اصلی</Link>
          <Link href={"#"}>درباره ما</Link>
          <Link href={"#"}>بلاگ</Link>
          <Link href={"#"}>تماس با ما</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            استفاده از مطالب و تصاویر فروشگاه اینترنتی تاپ کالا پیگرد قانونی
            دارد . کلیه حقوق این سایت متعلق به تاپ کالا می‌باشد
          </Text>
          <Stack direction={"row"} spacing={6}>
            <Button label={"Twitter"} href={"#"}>
              <FaTwitter />
            </Button>
            <Button label={"YouTube"} href={"#"}>
              <FaYoutube />
            </Button>
            <Button label={"Instagram"} href={"#"}>
              <FaInstagram />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
