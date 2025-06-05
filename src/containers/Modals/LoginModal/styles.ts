import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 24px;
  color: #ff3991;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #333;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ff3991;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #d81b60;
  }
`;

export const Error = styled.span`
  color: #ff3991;
  font-size: 0.9rem;
  margin-top: 2px;
`;

export const SubmitButton = styled.button`
  background: #ff3991;
  color: #fff;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;

  &:disabled {
    background: #f7b3d1;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #d81b60;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #ff3991;
  padding: 2px 6px;

  &:hover {
    color: #d81b60;
  }
`;

export const Button = styled.button`
  background: #ff3991;
  color: #fff;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 18px;
  width: 100%;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #d81b60;
  }

  &:disabled {
    background: #f7b3d1;
    cursor: not-allowed;
  }
`;