import React from "react";
import * as S from "./styles";

interface CharacterFiltersProps {
  onFilterChange: (filter: string, value: string) => void;
}

const CharacterFilters: React.FC<CharacterFiltersProps> = ({
  onFilterChange,
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <S.Container>
      <S.ImageLogo src="./img/logo.png" />
      <S.StyledSelect id="gender" name="gender" onChange={handleFilterChange}>
        <option value="">Sexo</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="genderless">Sem gênero</option>
        <option value="unknown">Desconhecido</option>
      </S.StyledSelect>
      <S.StyledSelect id="species" name="species" onChange={handleFilterChange}>
        <option value="">Raça</option>
        <option value="human">Humano</option>
        <option value="alien">Alienígena</option>
        <option value="humanoid">Humanóide</option>
        <option value="robot">Robô</option>
        <option value="unknown">Desconhecido</option>
      </S.StyledSelect>
      <S.StyledSelect id="status" name="status" onChange={handleFilterChange}>
        <option value="">Status</option>
        <option value="alive">Vivo</option>
        <option value="dead">Morto</option>
        <option value="unknown">Desconhecido</option>
      </S.StyledSelect>
    </S.Container>
  );
};

export default CharacterFilters;
