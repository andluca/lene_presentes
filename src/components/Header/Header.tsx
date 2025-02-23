import React from "react";
import * as Styled from "./styles";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuButton from "../MenuButton/MenuButton";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 960 });
  const location = useLocation();
  const currentPath = location.pathname;
  return isMobile ? (
    <Styled.ContainerMobile>
      <div className="inner_container">
        <img src={"/logo.png"} alt="logo" />
          <MenuButton />
      </div>
    </Styled.ContainerMobile>
  ) : (
    <Styled.Container rotaAtual={currentPath}>
      <img
        src={currentPath === "/" ? "/logo.png" : "/logorosa.png"}
        alt="logo"
      />
      <div className="secundary">
        <NavBar rotaAtual={currentPath} />
        <a href="https://wa.me/5517992298165?text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20amei%20os%20presentes%2C%20poderia%20me%20contar%20mais%3F">
          <Styled.ContactCard rotaAtual={currentPath}>
            <span>Entre em contato</span>
          </Styled.ContactCard>
        </a>
      </div>
    </Styled.Container>
  );
};

export default Header;
