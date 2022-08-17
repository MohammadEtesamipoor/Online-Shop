import styles from "Assets/Styles/Components/Layout/index.module.scss";
const { default: Footer } = require("./Footer/Footer");
const { default: Header } = require("./Header/Header");
const { default: AdminHeader } = require("./AdminHeader/AdminHeader");

const Layout = ({ main, isAdmin }) => {
  return (
    <div className={styles.DivLayout}>
      {isAdmin ? <AdminHeader /> : <Header />}
      <main className={styles.main}>{main}</main>
       {/* {!isAdmin &&<Footer />} */}
    </div>
  );
};

export default Layout;
