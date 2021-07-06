import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#faf9f5' : '#01bf71')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 34px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#0a0a0a' : '#0a0a0a')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#bff7b5' : '#e3fcec')};
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 10px 20px;
    margin-top: -20px;
  }
`;

export default Button;