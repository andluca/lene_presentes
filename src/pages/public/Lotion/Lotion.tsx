import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import Card from "../../../components/Card/Card";
import { ProductResponse } from "../../../models/Product";
import { listProducts } from "../../../services/productService";

const Perfume: React.FC = () => {
  const [lotions, setLotions] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
    fetchLotions();
  }, []);

  console.log(lotions);
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
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.image_url}
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
