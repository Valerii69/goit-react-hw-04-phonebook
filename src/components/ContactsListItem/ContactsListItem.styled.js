import styled from 'styled-components';
// import { colors } from '../../styles/vars';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.background};

  box-shadow: ${({ theme }) => theme.boxShadow};
  /* margin: 0.5em 1em; */
  padding: 0.25em 1em;
  cursor: pointer;
`;
export const ContactName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.background};
  text-transform: capitalize;
`;
export const ContactNumber = styled.span`
  margin-left: 10px;
  color: red;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: space-between;
  font-style: ${({ theme }) => theme.fonts};
`;
