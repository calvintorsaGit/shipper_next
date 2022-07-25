import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`

export const PaginationLeftButton = styled.button`
  padding: 12px;
  display: flex;
  flex-direction: row;
  color: black;
`

export const PaginationRightButton = styled(PaginationLeftButton)`
  margin-left: 24px;
`
