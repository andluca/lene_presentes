import React from "react";
import * as Styled from "./styles";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import WhatsSvg from "../../assets/whats";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Styled.Container rotaAtual={currentPath}>
      <img src={currentPath === '/' ? "/logo.png" : "/logorosa.png"} alt="logo"/>
      <div className="secundary">
        <NavBar rotaAtual={currentPath}/>
        <WhatsSvg colorWhats={currentPath === '/' ? '#ffffff' : '#FF3991'}/>
      </div>
    </Styled.Container>
  );
};

export default Header;
