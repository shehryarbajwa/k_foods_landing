import React, { useState } from "react";
import FormSellHelper from "../components/Forms/FormSellHelper";

const SellPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <FormSellHelper />
      </>
    );
  };

export default SellPage;
