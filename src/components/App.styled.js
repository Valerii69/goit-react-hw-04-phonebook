import styled from 'styled-components';
// import { colors } from '../styles/vars';

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-size: 30px;
  padding: 0;
`;
export const Section = styled.section`
  /* width: 400px; */
  margin: 10px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  /* align-items: flex-start; */
  /* padding: 30px; */
`;
export const Container = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
  padding: 30px;
`;
