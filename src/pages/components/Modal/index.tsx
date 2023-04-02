import { CharacterModalProps } from "@/types";
import React from "react";
import * as S from "./styles";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  return (
    <S.Overlay>
      <S.ModalWrapper className="modal">
        <S.ModalContent className="modal-content">
          <span onClick={onClose} style={{cursor: 'pointer'}}>
            <AiOutlineCloseCircle color="#000" size={20} />
          </span>
          <S.ImageProfile src={character.image} alt={character.name} />
          <S.ContentInfor>
            <S.HeaderInfor>
              <S.Name>{character.name}</S.Name>
              <S.Icon>
                <AiOutlineHeart />
              </S.Icon>
            </S.HeaderInfor>

            <p>
              {character.status === "Alive" ? (
                <S.StatusAlive>😎 {character.status}</S.StatusAlive>
              ) : (
                <S.StatusDead>💀 {character.status}</S.StatusDead>
              )}
            </p>
            <S.InforTitle>Gender: {character.gender}</S.InforTitle>
            <S.TypeSpecies>Specie: {character.species}</S.TypeSpecies>
            <S.TypeSpecies>Type: {character.location?.name}</S.TypeSpecies>
            <S.TypeSpecies>Location: {character.location?.name}</S.TypeSpecies>
          </S.ContentInfor>
        </S.ModalContent>
      </S.ModalWrapper>
    </S.Overlay>
  );
};

export default CharacterModal;
