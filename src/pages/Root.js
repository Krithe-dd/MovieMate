import React from "react";
import { Outlet,useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
const Root = () => {
  const nav = useNavigation();
  return (
    <>
    <ScrollToTop/>
    <div className="dark:bg-slate-800">
      <Header />
      <main >
        {nav.state === "loading" ? <Spinner /> :  <Outlet />}
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Root;
