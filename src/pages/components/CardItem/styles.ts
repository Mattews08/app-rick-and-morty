import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.33% - 20px);
  background: #ffffff;
  border-radius: 2rem;
  margin-bottom: 5rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
`;

export const ImageProfile = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  border: 2px solid #e3e6e6;
  margin-top: -5rem;
`;

export const TypeSpecies = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  color: #6b7280;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #111827;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const View = styled.button`
  padding: 0.5rem;
  width: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 10px;
  border: none;
  align-items: center;
  color: #111827;
  background: #4ade80;
  cursor: pointer;
`;
