import React from "react";
import * as Styled from "./styles";

interface Props {
	item: string;
    rotaAtual: string;
    rota: string;
}

const ItemNavBar: React.FC<Props> = ({item, rotaAtual, rota}) => {
    const ativo: boolean = rotaAtual === rota ? true : false;
    return(
        <Styled.Container ativo={ativo} rotaAtual={rotaAtual}>
            <a href={rota}>{item}</a>
        </Styled.Container>
    )
}

export default ItemNavBar;