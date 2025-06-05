import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 12px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImage = styled.img`
  width: 160px;
  height: 200px;
  object-fit: contain;
  margin: 0 auto 12px auto;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
`;

export const CardButton = styled.button`
  background-color: #ff4b9f;
  color: #fff;
  border: none;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 20px;
  width: 100%;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background-color: #e64490;
  }
`;

export const PriceContainer = styled.div`
  background-color: #ff4b9f;
  border-radius: 8px;
  color: #fff;
  position: absolute;
  padding: 8px;
  top: 16px;
  right: 16px;
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
`;

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const PromotionalBand = styled.div`
  position: absolute;
  top: -100px;
  left: -105px;
  font-size: 20px;
  padding: 80px 56px;
  background-color: #FFC107 ;
  transform: rotate(-45deg);

  span{
    position: relative;
    display: flex;
    top: 62px;
    right:1.5px;
    color: #fff;
  }
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ffe3ef;
  }

  svg {
    width: 22px;
    height: 22px;
    color: #ff4b9f;
  }
`;
