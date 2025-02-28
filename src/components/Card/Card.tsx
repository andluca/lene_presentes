import React from "react";
import * as Styled from "./styles";
import { useLocation } from "react-router-dom";
export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  promotion?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  promotion,
}) => {
  const telefone = "5517992298165";
  const urlParfum = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1,%20gostaria%20de%20comprar%20o%20${encodeURIComponent(
    title
  )}`;
  const urlLotion = `https://api.whatsapp.com/send?phone=${telefone}&text=Ol%C3%A1,%20gostaria%20de%20comprar%20a%20loção%20do%20${encodeURIComponent(
    title
  )}`;

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Styled.CardContainer>
      {promotion && (
        <Styled.PromotionalBand>
          <span>Promoção</span>
        </Styled.PromotionalBand>
      )}
      <Styled.CardImage loading="lazy" alt={title} src={imageUrl} />

      <Styled.PriceContainer>
        <span>R${price.toFixed(2)}</span>
      </Styled.PriceContainer>
      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.CardDescription>{description}</Styled.CardDescription>
      <Styled.LinkWrapper
        href={currentPath === "/perfume" ? urlParfum : urlLotion}
        target="_blank"
      >
        <Styled.CardButton>Comprar</Styled.CardButton>
      </Styled.LinkWrapper>
    </Styled.CardContainer>
  );
};

export default Card;
