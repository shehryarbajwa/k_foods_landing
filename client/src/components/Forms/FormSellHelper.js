import React, { useState } from "react";
import FormSell from "./FormSell";
import FormSuccess from "./FormSuccess";
import {
  FormContainer,
  CloseButton,
  FormContentLeft,
  FormImage,
  FormComponentContainer,
} from "./FormElements";
import Market from "../../images/markets.jpg";

const FormSellHelper = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <FormComponentContainer>
        <FormContainer>
          <CloseButton>×</CloseButton>
          <FormContentLeft>
            <FormImage src={Market} alt="market" />
          </FormContentLeft>
          {!showSuccess ? (
            <FormSell submitSellForm={() => setShowSuccess(true)}/>
          ) : (
            <FormSuccess />
          )}
        </FormContainer>
      </FormComponentContainer>
    </>
  );
};

export default FormSellHelper;