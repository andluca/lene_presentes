import React from "react";
import * as Styled from "./styles";
import { useLocation } from "react-router-dom";
import { deleteProductRequest } from "../../services/productService";
import { toast } from "react-toastify";
import TrashIcon from "../../icons/TrashIcon";
export interface CardProps {
  productId: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  promotion?: boolean;
  fetchProducts?: () => void;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  price,
  promotion,
  fetchProducts,
  setLoading,
  isAuthenticated,
  productId,
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

  const deleteProduct = async (id: string) => {
    try{
      const response = await deleteProductRequest(id);
      fetchProducts && fetchProducts();
      setLoading && setLoading(true);
      toast.success(response.message  || "Produto deletado com sucesso");
    }catch (error) {
      toast.error("Erro ao deletar produto");
      console.error(error);
    }finally{
      setLoading && setLoading(false);
    }
  }

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      await deleteProduct(id);
    }
  };

  return (
    <Styled.CardContainer>
      {isAuthenticated && (
        <Styled.DeleteButton
          type="button"
          title="Deletar produto"
          onClick={async () => await handleDelete(productId)}
        >
          <TrashIcon />
        </Styled.DeleteButton>
      )}
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
