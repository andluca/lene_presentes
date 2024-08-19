import styled from 'styled-components';

interface ContainerProps {
    rotaAtual: string;
}

export const Container = styled.header<ContainerProps>`
    background-color: ${props => props.rotaAtual === '/' ? '#FF3991' : '#ffffff'};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    
    && img{
        min-width: 200px;
        width: 20vw;
        object-fit: cover;
    }

    .secundary{
        padding-left: 5vw;
        width: 75vw;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

`;