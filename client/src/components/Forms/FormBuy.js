import React from "react";
import useForm from "./UseForm";
import {
  FormListContainer,
  FormHeading,
  FormWrapper,
  FormLabel,
  FormListWrapper,
  FormInput,
  FormButton,
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
          <FormHeading>
          کیا ہے منڈی
          </FormHeading>

          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>

          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>

            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>کیا ہے منڈی</FormLabel>
            <FormInput
              type="text"
              name="username"
              placeholder=" کیا ہے منڈی"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormButton type="submit">Submit</FormButton>
        </FormWrapper>
      </FormListContainer>
    </>
  );
};

export default FormBuy;
