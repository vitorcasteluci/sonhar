import styled from "styled-components"

export const SimpleContainerStyled = styled.div`
  display: flex;
  justify-content: ${(props) => props.position};
`;