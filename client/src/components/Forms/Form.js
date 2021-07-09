import React from "react";
import useForm from "./UseForm";
import eggImage from "../../images/egg.png";
import {
  FormListContainer,
  FormHeading,
  FormWrapper,
  FormLabel,
  FormListWrapper,
  FontInput,
  FormButton,
} from "./FormElements";

const Form = () => {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
      <p>Why not</p>
      <FormListContainer>
        <FormWrapper>
          <FormHeading>
            Get started with us today! Create your account by filling out the
            information below.
          </FormHeading>

          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your username"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>

          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your username"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your order"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your order"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your order"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>Username</FormLabel>
          
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your order"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormListWrapper>
            <FormLabel>Username</FormLabel>
            <FontInput
              type="text"
              name="username"
              placeholder="Enter your username"
              value=""
              // onChange={handleChange}
            />
          </FormListWrapper>
          <FormButton type="submit">Submit</FormButton>
          <label>
          <input type="radio" name="test" value="small" checked />
          <img src={eggImage} width="100px" height="100px" />
          </label>
        </FormWrapper>
      </FormListContainer>
    </>
  );
};

export default Form;
