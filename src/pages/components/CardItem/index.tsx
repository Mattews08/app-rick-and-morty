import { AiFillHeart } from "react-icons/ai";
import { Character } from "@/types";
import * as S from "./styles";

const CardItem = (props: Character) => {
  return (
    <S.CartContainer>
      <S.ImageProfile src={props.image} alt={`Imagem de ${props.name}`} />
      <S.TypeSpecies>{props.species}</S.TypeSpecies>
      <S.Name>{props.name}</S.Name>
      <S.ButtonContainer>
        <S.View onClick={props.link}>Detalhes</S.View>
        <S.View>
          <AiFillHeart data-testid="heart-icon" color="red" size={16} />
        </S.View>
      </S.ButtonContainer>
    </S.CartContainer>
  );
};

export default CardItem;
