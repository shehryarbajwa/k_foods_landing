import React, { useRef } from "react";
import useForm from "./UseForm";
import validateSellInfo from "./validateSellInfo";
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
} from "./FormElements";

const FormSell = ({ submitSellForm }) => {
  const { handleChange, handleSubmit, values, errors, sellErrors } = useForm(
    submitSellForm,
    validateSellInfo
  );

  return (
    <>
      <FormListContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <FormHeading>منڈی پر فروخت</FormHeading>
          <FormListWrapper>
            <FormLabel> نام </FormLabel>
            <FormInput
              type="text"
              name="name"
              placeholder="اپنا نام درج کریں"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorMessage>
              {sellErrors.name && <p>{sellErrors.name}</p>}
            </ErrorMessage>
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
              {sellErrors.contact_number && <p>{sellErrors.contact_number}</p>}
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
              {sellErrors.address && <p>{sellErrors.address}</p>}
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
              {sellErrors.province && <p>{sellErrors.province}</p>}
            </ErrorMessage>
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel> اپنی زمین کا سائز درج کریں</FormLabel>
            <FormInput
              type="size"
              name="landsize"
              placeholder="اپنی زمین کا سائز درج کریں"
              value={values.landsize}
              onChange={handleChange}
            />
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

export default FormSell;
