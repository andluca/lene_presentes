import React from "react";
import * as Styled from "./styles";
import ItemNavBar from "./ItemNavBar/ItemNavBar";

interface Props {
    rotaAtual: string;
}

const NavBar: React.FC<Props> = ({rotaAtual}) => {
    return (
      <Styled.Container>
          <ItemNavBar item='Início' rotaAtual={rotaAtual} rota='/'/>
          <ItemNavBar item='Perfumes' rotaAtual={rotaAtual} rota='/perfume'/>
          <ItemNavBar item='Loções' rotaAtual={rotaAtual} rota='/lotion'/>
          <ItemNavBar item='Cestas' rotaAtual={rotaAtual} rota='/basket'/>
      </Styled.Container>
    );
};

export default NavBar;
