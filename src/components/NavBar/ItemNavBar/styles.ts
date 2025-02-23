import styled, { css } from "styled-components";

interface ContainerProps {
  ativo: boolean;
  rotaAtual: string;
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !["ativo", "rotaAtual"].includes(prop),
})<ContainerProps>`
  ${({ rotaAtual, ativo }) => css`
    padding: 0px 0.5vw 0px 0.5vw;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: ${rotaAtual === "/"
      ? ativo
        ? "2px solid #ffffff"
        : "2px solid transparent"
      : ativo
      ? "2px solid #FF3991"
      : "2px solid transparent"};
  `}
`;

export const LinkContainer = styled.a.withConfig({
  shouldForwardProp: (prop) => !["ativo", "rotaAtual"].includes(prop),
})<ContainerProps>`
  ${({ rotaAtual }) => css`
    font-size: 18px;
    line-height: 23px;
    text-decoration: none;
    font-weight: 300;
    color: ${rotaAtual === "/" ? "#ffffff" : "#FF3991"};
  `}
`;
