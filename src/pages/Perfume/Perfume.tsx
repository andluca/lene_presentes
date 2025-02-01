import React from "react";
import Header from "../../components/Header/Header";
import * as Styled from "./styles";
import Card from "../../components/Card/Card";
import perfumesMock from "../../mocks/mock_perfumes";

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
              />
            ))}
          </Styled.PerfumesGrid>
        </Styled.MainContainer>
      </main>
    </>
  );
};

export default Perfume;
