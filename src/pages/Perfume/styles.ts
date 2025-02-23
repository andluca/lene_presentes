import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 104px;

  .disclaimer{
        font-size: 26px;
        line-height: 40px;
        font-weight: 300;
        padding: 0px 0px 25px 0px;
        margin: 0px;
        text-align: center;
        color: #FF3991;
    }
`;

export const PerfumesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1520px;
  margin: 0 auto;
`;

export const EndLine = styled.div`
  margin: 30px 0px 25px 5%;
  width: 90%;
  height: 1px;
  background-color: #ff3991;
`;
