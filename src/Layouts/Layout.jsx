import styles from "Assets/Styles/Components/Layout/index.module.scss";
const { default: Footer } = require("./Footer/Footer");
const { default: Header } = require("./Header/Header");

const Layout = ({ main }) => {
  return (
    <div className={styles.DivLayout}>
      <Header />
      <main className={styles.main}>
        {main}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
