import React from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import perfumesMock from "../../mocks/mock_perfumes";
import Card from "../../../components/Card/Card";


const Perfume: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Styled.MainContainer>
          <Styled.PerfumesGrid>
            {perfumesMock.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  promotion={item.promotion}
                />
            ))}
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
