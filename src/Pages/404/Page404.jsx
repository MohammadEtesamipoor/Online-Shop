import { Image,Box } from "@chakra-ui/react";
import img404 from 'Assets/Images/404.png';
function Page404() {
    return ( 

        <Box w="100%" h="100%">
        <Image w="100%" h="100%" src={img404} />
        </Box>
     );
}

export default Page404;