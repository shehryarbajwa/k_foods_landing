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
import FarmImage from "../../images/farmland.svg";

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
            <FormImage src={FarmImage} alt="farmland" />
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
