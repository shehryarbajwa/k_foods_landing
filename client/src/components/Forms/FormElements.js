import styled from "styled-components";

export const FormListContainer = styled.div`
  color: rgba(10, 133, 12, 0.6);
  background: #e3fcec;
  margin-top: 40px;
  padding: 15px 15px 15px 15px;
  border-radius: 0 10px 10px 0;
  position: relative;
`;

export const FormWrapper = styled.form`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 2%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormListWrapper = styled.div``;

export const FormHeading = styled.h1`
    
`;

export const InputWrapper = styled.input``;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 6px;
  margin-right: 20px;
  color: rgba(10, 133, 12, 0.6); ;
`;

export const FontInput = styled.input`
  margin-bottom: 0.5rem;
  width: 500px;
`;

export const FormButton = styled.button`
  width: 30%;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 2px;
  background: rgb(116, 203, 160);
  background: linear-gradient(
    90deg,
    rgba(116, 203, 160, 1) 0%,
    rgba(61, 181, 112, 1) 21%,
    rgba(60, 218, 120, 1) 42%,
    rgba(58, 139, 99, 1) 79%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
`;
