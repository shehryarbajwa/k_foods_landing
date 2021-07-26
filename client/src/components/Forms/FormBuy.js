import React, { useState, useRef } from "react";
import useForm from "./UseForm";
import validate from "./validateInfo";
import AppleImage from "../../images/apple.svg";
import BananaImage from "../../images/banana.svg";
import {
  FormListContainer,
  FormHeading,
  FormWrapper,
  FormLabel,
  FormListWrapper,
  FormInput,
  FormButton,
  TextArea,
  ErrorMessage,
  RadioButton,
  RadioButtonWrapper,
  CustomRadioLabel,
  RadioButtonSelectIcon,
  ProductIcon,
  ProductImage,
  ProductDescription,
} from "./FormElements";

const FormBuy = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const RadioInput = useRef(null);

  const checked = {
    display: "none"
  };

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
            <ErrorMessage>{errors.name && <p>{errors.name}</p>}</ErrorMessage>
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
            <ErrorMessage>
              {errors.contact_number && <p>{errors.contact_number}</p>}
            </ErrorMessage>
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
            <ErrorMessage>
              {errors.address && <p>{errors.address}</p>}
            </ErrorMessage>
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
            <ErrorMessage>
              {errors.province && <p>{errors.province}</p>}
            </ErrorMessage>
          </FormListWrapper>
          <FormListWrapper>
            <RadioButtonWrapper>
              <CustomRadioLabel>
                <FormInput 
                type="radio" 
                name="radio" 
                checked="true"
                value={values.product}
                onChange={handleChange}
                onClick={(e) => (console.log(e))}
                />
                <RadioButton >
                  <RadioButtonSelectIcon ></RadioButtonSelectIcon>
                  <ProductIcon>
                    <ProductImage
                      src={AppleImage}
                      alt="logo"
                    />
                    <ProductDescription>شامل</ProductDescription>
                  </ProductIcon>
                </RadioButton>
              </CustomRadioLabel>
              <CustomRadioLabel>
                <FormInput type="radio" name="radio" checked="true"/>
                <RadioButton>
                <RadioButtonSelectIcon ></RadioButtonSelectIcon>
                  <ProductIcon>
                    <ProductImage
                      src={AppleImage}
                      alt="logo"
                    />
                    <ProductDescription>شامل</ProductDescription>
                  </ProductIcon>
                </RadioButton>
              </CustomRadioLabel>
              
              </RadioButtonWrapper>
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا آپ کچھ اور شامل کرنا پسند کریں گے؟</FormLabel>
            <TextArea
              type="text"
              name="textarea"
              placeholder="اپنی تجاویز درج کریں"
              value={values.textarea}
              onChange={handleChange}
            ></TextArea>
          </FormListWrapper>
          <FormButton type="submit">Submit</FormButton>
        </FormWrapper>
      </FormListContainer>
    </>
  );
};

export default FormBuy;
