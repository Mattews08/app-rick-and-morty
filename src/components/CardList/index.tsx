import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import { Character, CharacterListProps } from "@/types";
import * as S from "./styles";
import CartItem from "../CardItem";
import CharacterModal from "../Modal";

const CardList: React.FC<CharacterListProps> = ({
  characters,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  // const [favorites, setFavorites] = useState<Character[]>([]);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleModalClose = () => {
    setSelectedCharacter(null);
  };

  // useEffect(() => {
  //   const favoriteCharacters = localStorage.getItem("favoriteCharacters");
  //   const parsedFavorites = favoriteCharacters ? JSON.parse(favoriteCharacters) : [];
  //   setFavorites(parsedFavorites);
  // }, []);

  // const handleAddFavorite = (character: Character) => {
  //   const updatedFavorites = [...favorites, character];
  //   setFavorites(updatedFavorites);
  //   localStorage.setItem("favoriteCharacters", JSON.stringify(updatedFavorites));
  // };

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
            link={() => handleCharacterClick(character)}
            // isFavorite={favorites.some((c) => c.id === character.id)}
            // onAddFavorite={handleAddFavorite}
          />
        ))}
      </S.ContentList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleModalClose}
        />
      )}
    </S.Container>
  );
};

export default CardList;
