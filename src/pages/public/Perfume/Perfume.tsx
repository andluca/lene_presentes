import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import Card from "../../../components/Card/Card";
import { ProductResponse } from "../../../models/Product";
import { listProducts } from "../../../services/productService";
import { useAuth } from "../../../hooks/useAuth";

const Perfume: React.FC = () => {
  const [parfums, setParfums] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useAuth();

  const fetchParfums = async () => {
    try {
      const data = await listProducts("parfum");
      setParfums(data);
    } catch (error) {
      setParfums([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParfums();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Styled.MainContainer>
          <Styled.PerfumesGrid>
            {loading ? (
              <Styled.LoadingSpinner />
            ) : parfums.length === 0 ? (
              <Styled.NoProductsMessage>
                Nenhum produto cadastrado.
              </Styled.NoProductsMessage>
            ) : (
              parfums.map((item, index) => (
                <Card
                  key={index}
                  productId={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.image_url}
                  setLoading={isAuthenticated ? setLoading : undefined}
                  fetchProducts={isAuthenticated ? fetchParfums : undefined}
                  isAuthenticated={isAuthenticated}
                />
              ))
            )}
          </Styled.PerfumesGrid>
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