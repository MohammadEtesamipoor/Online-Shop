import OfferBannerImg from "Assets/Images/OfferBanner.jpg";
const { Box, Image, Text, Heading } = require("@chakra-ui/react");
const OfferBanner = () => {
  return (
    <Box width="100%" position="relative">
      <Image borderRadius="md" src={OfferBannerImg} />
      <Box
        maxW={{base:'80%',sm:"60%" }}
        height="100%"
   
        flexDirection="column"
        gap="20px"
        position="absolute"
        top="0px"
        left="0px"
      >
        <Box display="flex" flexDirection="column" gap={{base:'1px',sm:"15px"}}>
          <Heading size={{ base: "11px", sm: "md", md: "2xl" }} fontWeight={50} >
            کفش ورزشی
          </Heading>
          <Heading size={{ base: "11px", sm: "lg", md: "3xl" }} noOfLines={1}>
            تا 50% تخفیف
          </Heading>
        </Box>

        <Box fontSize={{ base: "10px", sm: "sm", md: "xl" }}>
        <p
        style={{
            display:"inline",
            backgroundColor:"#00000081",
            color:"#ffffff",
            

        }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferBanner;
