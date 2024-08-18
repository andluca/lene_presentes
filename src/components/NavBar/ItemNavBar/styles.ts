import styled from 'styled-components';

interface ContainerProps {
    ativo: boolean;
    rotaAtual: string;
}

export const Container = styled.div<ContainerProps>`
    padding: 0px 0.5vw 0px 0.5vw;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.rotaAtual === '/' ? (props.ativo ?  '#ffffff' : '#FF3991') : ( props.ativo ? '#FF3991' : '#ffffff')};
    a {
        font-size: 18px;
        line-height: 23px;
        text-decoration: none;
        font-weight: 300;
        color: ${props => props.rotaAtual === '/' ? (props.ativo ?  '#FF3991' : '#ffffff') : ( props.ativo ? '#ffffff' : '#FF3991')};
    }
`;