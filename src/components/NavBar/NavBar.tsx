import React from "react";
import * as Styled from "./styles";
import ItemNavBar from "./ItemNavBar/ItemNavBar";
import { useAuth } from "../../hooks/useAuth";

interface Props {
    rotaAtual: string;
}

const NavBar: React.FC<Props> = ({rotaAtual}) => {
    const { isAuthenticated } = useAuth();
    return (
      <Styled.Container>
          <ItemNavBar item='Início' rotaAtual={rotaAtual} rota='/'/>
          <ItemNavBar item='Perfumes' rotaAtual={rotaAtual} rota='/perfume'/>
          <ItemNavBar item='Hidratantes' rotaAtual={rotaAtual} rota='/hidratante'/>
          {isAuthenticated && <ItemNavBar item="Produtos+" rotaAtual={rotaAtual} rota='/produtos/novo'/>}
      </Styled.Container>
    );
};

export default NavBar;
