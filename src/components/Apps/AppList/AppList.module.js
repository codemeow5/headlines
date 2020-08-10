import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, minmax(120px, 1fr));
  max-width: 800px;
  width: 100%;
  margin-bottom: 5rem;
`;
