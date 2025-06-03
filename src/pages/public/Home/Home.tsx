import React from "react";
import Header from "../../../components/Header/Header";
import * as Styled from "./styles";
import InstagramSvg from "../../../icons/instagram";
import { useMediaQuery } from "react-responsive";

const Container: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 960 });
  return isMobile ? (
    <Styled.ContainerMobile>{props.children}</Styled.ContainerMobile>
  ) : (
    <Styled.Container>{props.children}</Styled.Container>
  );
};

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 960 });
  return (
    <Container>
      <Header />
      <div className="main">
        {isMobile ? <Styled.GiftImageMobile /> : <Styled.GiftImage />}
        <p>
          “Presentear pra mim não é algo supérfluo ou uma questão de poder
          aquisitivo. Presentear pra mim significa lembrar com carinho, é
          demonstrar, mesmo que através de uma singela lembrança, que aquela
          pessoa é importante na sua vida e será sempre lembrada.”
          <br /> - Tuca Neves
        </p>
      </div>
      <div className="footer">
        <div className="line" />
        <a style={{display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", color: "inherit", paddingBottom: "20px"}} href="https://www.instagram.com/leneloubetpresentes/">
          <p style={{ fontSize: "30px", marginBottom: "0px" }}>ฅ^•ﻌ•^ฅ</p>
          <InstagramSvg fill={isMobile ? '#FF3991' : '#ffffff'} style={{ cursor: "pointer" }} />
        </a>
      </div>
    </Container>
  );
};

export default Home;
