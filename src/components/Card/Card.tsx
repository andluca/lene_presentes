import React from "react";
import * as Styled from "./styles";
export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}



const Card: React.FC<CardProps> = ({ imageUrl, title, description, price }) => {
  return (
    <Styled.CardContainer>
      <Styled.CardImagePlaceholder src={imageUrl} />
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDescription>{description}</Styled.CardDescription>
      <Styled.CardButton>Adquira-o (R${price.toFixed(2)})</Styled.CardButton>
    </Styled.CardContainer>
  );
};

export default Card;
