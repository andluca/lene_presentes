import styled from 'styled-components';

export const Container = styled.div`
    
    .main{
        display: flex;
        justify-content: space-around;
        padding: 100px 0px 100px 0px;
        background-color: #FF3991;
    }

    .main > p{
        width: 49vw;
        line-height: 50px;
        font-size: 27px;
        color: #ffffff;
    }
    
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #FF3991;
    }

    .footer > .title{
        font-size: 37px;
        line-height: 10px;
    }

    .footer > .description{
        font-size: 26px;
        padding: 0px;
        margin: 0px;
        width: 55vw;
        text-align: center;
    }

    .footer > .line{
        margin: 30px 0px 25px 0px;
        width:93vw;
        height: 2px;
        background-color: #FF3991;
    }

`;