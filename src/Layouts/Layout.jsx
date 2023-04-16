import { Box } from "@chakra-ui/react";
import styles from "Assets/Styles/Components/Layout/index.module.scss";
import ColorHeaderContext from "Context/headerColor";
import React, { useEffect } from "react";
const { default: Footer } = require("./Footer/Footer");
const { default: Header } = require("./Header/Header");
const { default: AdminHeader } = require("./AdminHeader/AdminHeader");

const Layout = ({ main, isAdmin }) => {
  const { color, setColor } = React.useContext(ColorHeaderContext);
  useEffect(()=>{
    if(localStorage.getItem("THEME")===null) localStorage.setItem("THEME","light");

    setColor({
      selected:localStorage.getItem("THEME"),
      "dark":{
        clr: "#F3F3F3",
        // clr:"#313238",
        bgClr: "#313238",
        // bgClr:"#9394a5"
      },
      "light":{
        clr: "#313238",
        // clr:"#313238",
        bgClr: "#F9F9F9",
        // bgClr:"#9394a5"
      },
    })
  },[])

  return (
    <Box

    bg={color[color.selected].bgClr}
    className={styles.DivLayout}>

      {isAdmin ? <AdminHeader /> : <Header />}
      <Box
          // px={{base:"40px",lg:"60px"}}
      >
      <main className={styles.main}>{main}</main>

      </Box>
       {!isAdmin &&<Footer />}
    </Box>
  );
};

export default Layout;
