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
      width: 75vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;
