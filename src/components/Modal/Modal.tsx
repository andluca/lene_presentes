import React from "react";
import * as Styled from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Styled.ModalOverlay onClick={onClose}>
      <Styled.ModalContent onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        {children}
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};

export default Modal;