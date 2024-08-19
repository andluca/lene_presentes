import React from "react";
import Header from "../../components/Header/Header";
import * as Styled from "./styles";
import PrizeSvg from "../../assets/prize";
import VisualAssetSvg from "../../assets/visual_asset";
import InstagramSvg from "../../assets/instagram";

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header/>
      <div className="main">
        <PrizeSvg/>
        <p>“Presentear pra mim não é algo supérfluo ou uma questão de poder aquisitivo. Presentear pra mim significa lembrar com carinho, é demonstrar, mesmo que através de uma singela lembrança, que aquela pessoa é importante na sua vida e será sempre lembrada.” - Tuca Neves</p>
      </div>
      <VisualAssetSvg/>
      <div className="footer">
        <p className="title">LenePresentes</p>
        <p className="description">A Lene Presentes representa um sonho, o sonho de trazer alegria aos
seus entes queridos da melhor forma possível. Importando perfumes 
e usando a criatividade para fazer kits de presentes é a forma de tornar
este sonho cada vez mais real. </p>
        <div className="line"/>
        <a href="https://www.instagram.com/leneloubetpresentes/">
          <InstagramSvg style={{paddingBottom: '20px', cursor: 'pointer'}}/>
        </a>
      </div>
    </Styled.Container>
  );
};

export default Home;
