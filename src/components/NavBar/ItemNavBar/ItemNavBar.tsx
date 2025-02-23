import React from "react";
import * as Styled from "./styles";

interface Props {
  item: string;
  rotaAtual: string;
  rota: string;
}

const ItemNavBar: React.FC<Props> = ({ item, rotaAtual, rota }) => {
  const ativo: boolean = rotaAtual === rota;
  return (
    <Styled.LinkContainer href={rota} rotaAtual={rotaAtual} ativo={ativo}>
      <Styled.Container ativo={ativo} rotaAtual={rotaAtual}>
        {item}
      </Styled.Container>
    </Styled.LinkContainer>
  );
};

export default ItemNavBar;
