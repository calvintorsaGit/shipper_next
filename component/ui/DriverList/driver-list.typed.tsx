import styled from 'styled-components';

export const DriverListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
`

export const DataListDriverStyled = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

  }
`