export interface Character {
  id?: number;
  name: string;
  image: string;
  species: string;
  status?: string;
}

export interface CharacterListProps {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export interface CharactersProps {
  characters: Character[];
  totalPages: number;
}

export interface PaginationNumberProps {
  current: boolean;
}