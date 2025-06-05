import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 4px 32px rgba(0,0,0,0.15);
  position: relative;
  overflow-y: auto;
  z-index: 1001;
`;
