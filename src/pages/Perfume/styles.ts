import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 104px;
`;

export const PerfumesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1520px;
  margin: 0 auto;
`;
