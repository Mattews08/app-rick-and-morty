import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.h2`
  font-weight: bold;
  color: #111827;
  margin-bottom: 1rem;
`;

export const Icon = styled.h2`
  font-weight: bold;
  color: red;
  margin-bottom: 0.7rem;
  cursor: pointer;
`;

export const HeaderInfor = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ContentInfor = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  gap: 0.7rem;
`;

export const TypeSpecies = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  color: #64748b;
`;

export const ImageProfile = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 50%;
  border: 2px solid #e3e6e6;
`;

export const StatusAlive = styled.button`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 10px;
  width: 105px;
  border: none;
  align-items: center;
  color: #111827;
  background-color: #1edff7;
  cursor: pointer;
`;

export const StatusDead = styled.button`
  padding: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 10px;
  width: 105px;
  border: none;
  align-items: center;
  color: #111827;
  background-color: red;
  cursor: pointer;
`;

export const InforTitle = styled.p`
  font-weight: bold;
  font-size: 0.8rem;
  color: #111827;
`;
