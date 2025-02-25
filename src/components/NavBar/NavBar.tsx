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
          <ItemNavBar item='Hidratantes' rotaAtual={rotaAtual} rota='/lotion'/>
      </Styled.Container>
    );
};

export default NavBar;
