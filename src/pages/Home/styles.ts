import styled from 'styled-components';
import gift from "../../images/gift.png";

export const Container = styled.div`
    
    .main{
        display: flex;
        justify-content: space-around;
        padding: 110px 0px 100px 0px;
        background-color: #FF3991;
        overflow: hidden;
    }

    .main > p{
        width: 50vw;
        line-height: 50px;
        padding-top: 2.3vw;
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
        margin: 30px 0px -15px 0px;
        width:93vw;
        height: 2px;
        background-color: #FF3991;
    }
`;

export const ContainerMobile = styled.div`
    .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0px 10px 0px;
        background-color: #fafafa;
        overflow: hidden;
    }

    .main > p{
        width: 90%;
        line-height: 40px;
        text-align: center;
        font-size: 27px;
        color: #FF3991;
        order: 0;
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
        line-height: 40px;
        padding: 0px;
        margin: 0px;
        width: 90%;
        text-align: center;
    }

    .footer > .line{
        margin: 30px 0px -15px 0px;
        width: 90%;
        height: 2px;
        background-color: #FF3991;
    }
`;

export const GiftImage = styled.div`
    width: 40vw;
    height: 400px;
    background-size: cover;
    background-image: url(${gift});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 150px;
`;

export const GiftImageMobile = styled.div`
    width: 90%;
    height: 400px;
    background-size: cover;
    background-image: url(${gift});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50px;
    order: 1;
`;