import React, { useState } from "react";
import useForm from "./UseForm";
import validate from "./validateInfo";
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
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <FormListContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <FormHeading>منڈی سے خریدیں</FormHeading>

          <FormListWrapper>
            <FormLabel> نام </FormLabel>
            <FormInput
              type="text"
              name="name"
              placeholder="اپنا نام درج کریں"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </FormListWrapper>

          <FormListWrapper>
            <FormLabel> اپنا ٹیلیفون نمبر درج کریں</FormLabel>
            <FormInput
              type="text"
              name="contact_number"
              placeholder="ٹیلیفون نمبر"
              value={values.contact_number}
              onChange={handleChange}
            />
            {errors.contact_number && <p>{errors.contact_number}</p>}
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> آپ کا پتہ </FormLabel>
            <FormInput
              type="text"
              name="address"
              placeholder="اپنا پتہ درج کریں
              "
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && <p>{errors.address}</p>}
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> آپ کا صوبہ کیا ہے؟</FormLabel>
            <FormInput
              type="text"
              name="province"
              placeholder=" صوبہ"
              value={values.province}
              onChange={handleChange}
            />
            {errors.province && <p>{errors.province}</p>}
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> آپ کیا خرید رہے ہو </FormLabel>
            <FormInput
              type="text"
              name="product"
              placeholder=""
              value={values.product}
              onChange={handleChange}
            />
            {errors.product && <p>{errors.product}</p>}
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا آپ کچھ اور شامل کرنا پسند کریں گے؟</FormLabel>
            <TextArea
              type="text"
              name="textarea"
              placeholder="اپنی تجاویز درج کریں
            "
              value={values.textarea}
            ></TextArea>
          </FormListWrapper>
          <FormButton type="submit">Submit</FormButton>
        </FormWrapper>
      </FormListContainer>
    </>
  );
};

export default FormBuy;
