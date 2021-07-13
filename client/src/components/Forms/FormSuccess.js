import React from "react";
import { FormListContainer, FormSuccessful, FormImage2 } from "./FormElements";
import Handshake from "../../images/handshake.png";

const FormSuccess = () => {
  return (
    <FormListContainer>
      <FormSuccessful>
        ہمیں آپ کا آرڈر مل گیا ہے۔ ہمارا نمائندہ جلد ہی آپ سے رابطہ کرے گا
      </FormSuccessful>
      <FormImage2 src={Handshake} alt="thank-you" />
    </FormListContainer>
  );
};

export default FormSuccess;
