import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import Card from "../../../components/Card/Card";
import { ProductResponse } from "../../../models/Product";
import { listProducts } from "../../../services/productService";
import { useAuth } from "../../../hooks/useAuth";

const Perfume: React.FC = () => {
  const [lotions, setLotions] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const {isAuthenticated} = useAuth();

  const fetchLotions = async () => {
      try {
        const data = await listProducts("lotion");
        setLotions(data);
      } catch (error) {
        setLotions([]);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchLotions();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Styled.MainContainer>
          <Styled.LotionGrid>
            {loading ? (
                <Styled.LoadingSpinner />
            ) : lotions.length === 0 ? (
              <Styled.NoProductsMessage>
                Nenhum produto cadastrado.
              </Styled.NoProductsMessage>
            ) : (
              lotions.map((item, index) => (
                <Card
                  key={index}
                  productId={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.image_url}
                  setLoading={isAuthenticated ? setLoading : undefined}
                  fetchProducts={isAuthenticated ? fetchLotions : undefined}
                  isAuthenticated={isAuthenticated}
                />
              ))
            )}
          </Styled.LotionGrid>
          <Styled.EndLine></Styled.EndLine>
          <p className="disclaimer">
            Não encontrou o que procurava? Entre em contato e faça sua encomenda
            ฅ^•ﻌ•^ฅ
          </p>
        </Styled.MainContainer>
      </main>
    </>
  );
};

export default Perfume;
