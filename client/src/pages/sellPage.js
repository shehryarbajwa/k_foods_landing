import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import FormSellHelper from "../components/Forms/FormSellHelper";

const SellPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <FormSellHelper />
      </>
    );
  };

export default SellPage;
