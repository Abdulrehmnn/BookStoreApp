import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen dark:bg-slate-900  dark:border dark:text-white">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
