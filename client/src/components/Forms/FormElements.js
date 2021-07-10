import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 120px auto;
  width: 1200px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 1000px;
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

export const FormListWrapper = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormHeading = styled.h3`
    
`;

export const InputWrapper = styled.input``;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 6px;
  color: black;
  margin-right: 12px;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 50px;
  width: 100%;
  border: none;
`;

export const FormButton = styled.button`
width: 80%;
  height: 50px;
  margin-top: 10px;
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
  
  &:hover{
    cursor: pointer;
    background: #e3fcec;
    transition: all 0.4s ease-out;
}
`;

export const FormContentLeft = styled.div`
  background: white;
  border-radius: 15px 0px 0 15px;
  position: relative;
`

export const CloseButton = styled.span`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`

export const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`

export const FormSuccessful = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: black;
  background: #e3fcec;
`

export const FormImage2 = styled.img`
    width: 60%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const FormImage = styled.img`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FormComponentContainer = styled.div`
  box-sizing: border-box;
  background: #e3fcec;
  margin: 0;
  padding: 0;
  font-family: 'Noto Nastaliq Urdu',
  sans-serif;
`