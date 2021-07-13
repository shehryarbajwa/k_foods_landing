import React, { useState } from "react";
import useForm from "./UseForm";
import {
  FormListContainer,
  FormHeading,
  FormWrapper,
  FormLabel,
  FormListWrapper,
  FormInput,
  FormButton,
  TextArea,
} from "./FormElements";

const FormBuy = ({ submitForm }) => {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
      <FormListContainer>
        <FormWrapper onSubmit={submitForm}>
          <FormHeading>منڈی پر فروخت</FormHeading>

          <FormListWrapper>
            <FormLabel> نام </FormLabel>
            <FormInput
              type="text"
              name="name"
              placeholder="اپنا نام درج کریں"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>

          <FormListWrapper>
            <FormLabel> اپنا ٹیلیفون نمبر درج کریں</FormLabel>
            <FormInput
              type="text"
              name="contact_number"
              placeholder="ٹیلیفون نمبر"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> آپ کا پتہ </FormLabel>
            <FormInput
              type="text"
              name="address"
              placeholder="اپنا پتہ درج کریں
              "
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> آپ کا صوبہ کیا ہے؟</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" صوبہ"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> اپنی زمین کا سائز درج کریں
 </FormLabel>
            <FormInput
              type="size"
              name="product"
              placeholder="اپنی زمین کا سائز درج کریں"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا آپ کچھ اور شامل کرنا پسند کریں گے؟</FormLabel>
            <TextArea
              type="text"
              placeholder="اپنی تجاویز درج کریں
            "
            ></TextArea>
          </FormListWrapper>
          <FormButton type="submit">Submit</FormButton>
        </FormWrapper>
      </FormListContainer>
    </>
  );
};

export default FormBuy;
