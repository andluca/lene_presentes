import styled from "styled-components";

export const DrawerContainer = styled.div`
  .drawer-overlay {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    transition: opacity 0.3s ease-in-out;

    opacity: 0;
    pointer-events: none;

  }

  .drawer-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .drawer-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 350px;
    height: 100%;
    background-color: #FF3991;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);

    transition: transform 0.3s ease-in-out;

    transform: translateX(-100%);
  }

  .drawer-overlay.open .drawer-content {
    transform: translateX(0);
  }
`;
