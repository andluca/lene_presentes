import React from "react";
import * as Styled from "./styles";
export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
  const telefone = "5517992298165";
  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1,%20gostaria%20de%20comprar%20os%20seguintes%20perfumes:%0D%0A-%20${encodeURIComponent(
    title
  )}`;

  return (
    <Styled.CardContainer>
      <Styled.CardImagePlaceholder src={imageUrl} />
      <Styled.PriceContainer>
        <span>R${price.toFixed(2)}</span>
      </Styled.PriceContainer>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDescription>{description}</Styled.CardDescription>
      <Styled.LinkWrapper href={url} target="_blank">
        <Styled.CardButton>Comprar</Styled.CardButton>
      </Styled.LinkWrapper>
    </Styled.CardContainer>
  );
};

export default Card;
