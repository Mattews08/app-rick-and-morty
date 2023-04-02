import { CharacterListProps } from "@/types";
import * as S from "./styles";
import CartItem from "../CardItem";
import Pagination from "../Pagination";

const CardList: React.FC<CharacterListProps> = ({
  characters,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pagesToShow = 5;

  const lastPage = Math.min(
    totalPages,
    currentPage + Math.floor(pagesToShow / 2)
  );
  const firstPage = Math.max(1, lastPage - pagesToShow + 1);
  return (
    <S.Container>
      <S.ContentList>
        {characters.map((character) => (
          <CartItem
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
          />
        ))}
      </S.ContentList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </S.Container>
  );
};

export default CardList;
