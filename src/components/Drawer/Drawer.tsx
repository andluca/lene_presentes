import React from "react";
import * as Styled from "./styles";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Styled.DrawerContainer>
    <div
      className={`drawer-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div className="drawer-content" onClick={stopPropagation}>
        {children}
      </div>
    </div>
    </Styled.DrawerContainer>
  );
}
