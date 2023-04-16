const { Box, Heading, Text, Link } = require("@chakra-ui/react");
const e = require("react-date-object/calendars/persian");

const CartArticle = () => {
  return (
    <Box gap="5"  textAlign={{base:"center",md:"right"}} display="flex" flexDirection={{base:"column",md:"row"}} width="100%">
      <Box flex="0.3" display="flex" flexDirection="column" justifyContent="space-between">
        <Heading>به فروشگاه TopKala خوش آمدید</Heading>
        <Link>خواندن مقاله</Link>
      </Box>
      <Box flex="0.7">
        <Text px="4" textAlign="center" color="gray" lineHeight={{base:"1.6",md:"2.2"}}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </Text>
      </Box>
    </Box>
  );
};

export default CartArticle;