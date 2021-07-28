import styled, { keyframes, css } from "styled-components";

export const FormContainer = styled.div`
  margin: 120px auto;
  width: 1200px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 1250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FormListContainer = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: #e3fcec;
`;

export const FormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSellWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormListWrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormHeading = styled.h3`
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
    width: 80%;
  }

  @media screen and (max-width: 375px) {
    height: 50px;
    width: 70%;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 6px;
  color: black;
  margin-right: 12px;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    height: 50px;
    width: 50%;
    margin-right: 220px;
  }

  @media screen and (max-width: 411px) {
    height: 50px;
    width: 60%;
    margin-right: 220px;
    font-size: 20px;
  }

  @media screen and (max-width: 375px) {
    height: 50px;
    width: 50%;
    margin-right: 220px;
  }

  @media screen and (max-width: 360px) {
    height: 50px;
    width: 50%;
    margin-right: 260px;
  }

  @media screen and (max-width: 320px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
  }

  @media screen and (max-width: 280px) {
    height: 50px;
    width: 30%;
    margin-right: 300px;
    font-size: 18px;
  }
`;

export const FormInput = styled.input`
  display: ${({ checked }) => (checked ? "block" : "block")};
  padding-left: ${({ checked }) => (checked ? "5px" : "10px")};
  outline: none;
  border-radius: 2px;
  height: ${({ checked }) => (checked ? "20px" : "50px")};
  width: 100%;
  border: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    height: 50px;
    width: 65%;
  }

  @media screen and (max-width: 375px) {
    height: 50px;
    width: 55%;
  }

  @media screen and (max-width: 320px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
    font-size: 22px;
  }

  @media screen and (max-width: 280px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
  }
`;

export const FormButton = styled.button`
  width: 70%;
  height: 50px;
  margin-top: 10px;
  margin-right: 120px;
  margin-left: 50px;

  border-radius: 2px;
  background: rgb(116, 203, 160);
  background: linear-gradient(
    90deg,
    rgba(116, 203, 160, 1) 0%,
    rgba(61, 181, 112, 1) 21%,
    rgba(60, 218, 120, 1) 42%,
    rgba(58, 139, 99, 1) 79%
  );

  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: #203826;
    transition: all 0.4s ease-out;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    height: 50px;
    width: 50%;
    margin-right: 220px;
  }

  @media screen and (max-width: 411px) {
    height: 50px;
    width: 60%;
    margin-right: 220px;
  }

  @media screen and (max-width: 375px) {
    height: 50px;
    width: 50%;
    margin-right: 220px;
  }

  @media screen and (max-width: 360px) {
    height: 50px;
    width: 50%;
    margin-right: 260px;
  }

  @media screen and (max-width: 320px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
  }

  @media screen and (max-width: 280px) {
    height: 50px;
    width: 30%;
    margin-right: 300px;
  }
`;

export const FormContentLeft = styled.div`
  background: #e3fcec;
  border-radius: 15px 0px 0 15px;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`;

export const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`;

export const FormSuccessful = styled.p`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: #203826;
  background: #e3fcec;
  max-width: 300px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const FormImage2 = styled.img`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormComponentContainer = styled.div`
  box-sizing: border-box;
  background: #e3fcec;
  margin: 0;
  padding: 0;
  font-family: "Noto Nastaliq Urdu", sans-serif;
`;

export const TextArea = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 100px;
  width: 100%;
  border: none;

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 50px;
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    height: 50px;
    width: 65%;
  }

  @media screen and (max-width: 375px) {
    height: 50px;
    width: 55%;
  }

  @media screen and (max-width: 320px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
    font-size: 20px;
  }

  @media screen and (max-width: 280px) {
    height: 50px;
    width: 40%;
    margin-right: 300px;
    font-size: 22px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
export const RadioWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  height: auto;
  padding: 5px 0px 0px 2px;
  box-sizing: border-box;
`;

export const RadioItem = styled.div`
  display: inline-block;
  align-items: center;
  height: 220px;
  width: 190px;
  position: relative;
  border: 1px solid #e3fcec;
  background-color: #e3fcec;
  box-shadow: 5px 5px 20px green;
  border-radius: 30px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    display: inline-block;
    height: 180px;
    width: 42%;
  }

  @media screen and (max-width: 480px) {
    height: 220px;
    width: 50%;
  }

  @media screen and (max-width: 414px) {
    height: 220px;
    width: 50%;
  }

  @media screen and (max-width: 375px) {
    height: 220px;
    width: 50%;
  }

  @media screen and (max-width: 320px) {
    height: 220px;
    width: 50%;
  }

  @media screen and (max-width: 280px) {
    height: 220px;
    width: 50%;
  }
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 2.5%;
  left: 10%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 2px solid #ccc;
`;

export const RadioImage = styled.img`
  overflow:hidden;
  height: 100px;
  width: 200px;

  @media screen and (max-width: 768px) {
    height: 100px;
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    height: 100px;
    width: 70%;
  }

  @media screen and (max-width: 375px) {
    height: 100px;
    width: 70%;
  }

  @media screen and (max-width: 320px) {
    height: 100px;
    width: 70%;
  }

  @media screen and (max-width: 280px) {
    height: 100px;
    width: 70%;
  }
`

export const RadioText = styled.p`
  font-size: 24px;
  text-align: center;
`

export const RadioButton = styled.input`
  position: relative;
  left: 19px;
  height: 24px;
  width: 25px;
  margin-bottom: 2px;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  margin-right: 20px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "✓";
      font-family: "FontAwesome";
      display: block;
      color: black;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${RadioItem} {
    background: blue;
    border: 2px solid white;
  }
  &:checked + ${RadioButtonLabel} {
    background: yellowgreen;
    border: 1px solid yellowgreen;
    &::after {
      content: "✓";
      font-family: "FontAwesome";
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
