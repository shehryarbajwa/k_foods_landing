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
  RadioWrapper,
  RadioItem,
  RadioButtonLabel,
  RadioButton,
  RadioImage,
  RadioText,
} from "./FormElements";

const FormBuy = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors, handleRadioChange } =
    useForm(submitForm, validate);

  const [select, setSelect] = useState("eggs");

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
    handleRadioChange(value);
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
              placeholder="صوبہ"
              value={values.province}
              onChange={handleChange}
            />
            <ErrorMessage>
              {errors.province && <p>{errors.province}</p>}
            </ErrorMessage>
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>آئٹم خریدیں</FormLabel>
            <RadioWrapper>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="produce"
                  value="eggs"
                  checked={select === "eggs"}
                  onChange={handleSelectChange}
                />
                <RadioButtonLabel />
                <RadioText>انڈے</RadioText>
                <RadioImage src={BananaImage} alt="Eggs" />
              </RadioItem>
              <RadioItem>
                <RadioButton
                  type="radio"
                  name="produce"
                  value="oranges"
                  checked={select === "oranges"}
                  onChange={handleSelectChange}
                />
                <RadioButtonLabel />
                <RadioText>کینو</RadioText>
                <RadioImage src={BananaImage} alt="Oranges" />
              </RadioItem>
            </RadioWrapper>
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
