import styled from 'styled-components';
// import { colors } from '../../styles/vars';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colorText};
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colorText};
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.colorTextContacts};
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
