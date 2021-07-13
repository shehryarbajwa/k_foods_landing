import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import FormBuyHelper from "../components/Forms/FormBuyHelper";

const BuyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <FormBuyHelper />
    </>
  );
};

export default BuyPage;
