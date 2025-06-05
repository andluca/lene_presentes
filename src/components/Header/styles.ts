import styled, { css } from "styled-components";

interface ContainerProps {
  rotaAtual: string;
}

export const Container = styled.header.withConfig({
  shouldForwardProp: (prop) => !["rotaAtual"].includes(prop),
})<ContainerProps>`
  ${({ rotaAtual }) => css`
    background-color: ${rotaAtual === "/" ? "#FF3991" : "#ffffff"};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;

    && img {
      min-width: 150px;
      width: 15vw;
      object-fit: contain;
    }

    .secundary {
      padding-left: 5vw;
      width: 76.5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      text-decoration: none;
    }
  `}
`;

export const ContactCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !["rotaAtual"].includes(prop),
})<ContainerProps>`
  ${({ rotaAtual }) => css`
    padding: 16px;
    border-radius: 16px;
    background-color: ${rotaAtual === "/" ? "#ffffff" : "#FF3991"};
    color: ${rotaAtual === "/" ? "#FF3991" : "#ffffff"};
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ContainerMobile = styled.header`
  background-color: #ff3991;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  z-index: 9999;

  && img {
    min-width: 270px;
    width: 30vw;
    height: auto;
    object-fit: contain;
  }
  && .inner_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
`;
