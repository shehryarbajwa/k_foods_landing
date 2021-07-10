import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Form from "../components/Forms/Form";

const BuyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Form />
    </>
  );
};

export default BuyPage;
