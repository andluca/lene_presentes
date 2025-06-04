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

export const LotionGrid = styled.div`
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


export const NoProductsMessage = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #ff3991;
  margin-top: 20px;
  width: fit-content;
`;

export const LoadingSpinner = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  border: 4px solid rgba(255, 57, 145, 0.1);
  border-left-color: #ff3991;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 20px;
  margin: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
