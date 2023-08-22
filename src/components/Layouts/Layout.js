import React, { Fragment } from "react";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import Routers from "../../Routes/Routers";

const Layouts = () => {
  return (
    <Fragment>
      <Header />
      <Routers />
      <Footer />
    </Fragment>
  );
};

export default Layouts;
