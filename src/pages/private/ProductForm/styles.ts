import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  padding: 150px 0;
  background: #fff;
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  padding: 48px;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h2`
  color: #ff3991;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: #333;
  gap: 4px;
`;

export const Input = styled.input`
  padding: 8px 0;
  border: 1px solid #ff3991;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  max-width: 600px;
  &:focus {
    border-color: #d81b60;
  }
`;

export const TextArea = styled.textarea`
  padding: 8px 0;
  border: 1px solid #ff3991;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  max-width: 600px;
  resize: vertical;

  &:focus {
    border-color: #d81b60;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ff3991;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  min-width: 600px;
  height: 40px;

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
  padding: 12px 0;
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

export const ImagePreview = styled.img`
  margin-top: 10px;
  max-width: 100%;
  max-height: 180px;
  border-radius: 6px;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  border: 1px solid #ff3991;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  height: 40px;

  &::file-selector-button {
    background: #ff3991;
    color: #fff;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 16px;
    cursor: pointer;
  }
  &::file-selector-button:hover {
    background: #d81b60;
  }
`;