import React, { useState } from "react";
import { Drawer } from "../Drawer/Drawer";
import MenuIcon from "../../icons/menu_icon";
import { useLocation } from "react-router-dom";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
      <button
        style={{ background: "transparent", border: "none" }}
        onClick={handleOpen}
      >
        <MenuIcon />
      </button>
      <Drawer isOpen={open} onClose={handleClose}>
        <nav style={{ padding: "1rem" }}>
          <img
            style={{
              minWidth: "280px",
              width: "30vw",
              height: "auto",
              objectFit: "contain",
              paddingBottom: "10px",
            }}
            src={"/logo.png"}
            alt="logo"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                borderBottom: currentPath === "/" ? "2px solid #fff" : undefined,
                fontSize: "24px",
                lineHeight: "50px",
                fontWeight: "500",
                width:'100px',
                
              }}
              href="/"
            >
              Início
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                borderBottom: currentPath === "/perfume" ? "2px solid #fff" : undefined,
                fontSize: "24px",
                lineHeight: "50px",
                fontWeight: "500",
                width:'100px',
              }}
              href="/perfume"
            >
              Perfumes
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                borderBottom: currentPath === "/lotion" ? "2px solid #fff" : undefined,
                fontSize: "24px",
                lineHeight: "50px",
                fontWeight: "500",
                width:'100px',
              }}
              href="/hidratante"
            >
              Hidratantes
            </a>
          </div>
        </nav>
      </Drawer>
    </div>
  );
}
