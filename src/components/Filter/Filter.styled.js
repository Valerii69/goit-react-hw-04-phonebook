import styled from 'styled-components';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colorTextContacts};
  font-size: 16px;
  font-weight: 500;
  align-items: flex-start;
`;
export const Input = styled.input`
  width: 250px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.colorTextContacts};
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${({ theme }) => theme.colorTextContacts};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
