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

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <FormComponentContainer>
        <FormContainer>
          <CloseButton>×</CloseButton>
          <FormContentLeft>
            <FormImage src={Market} alt="market" />
          </FormContentLeft>
          {!isSubmitted ? (
            <FormSell submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </FormContainer>
      </FormComponentContainer>
    </>
  );
};

export default Form;
