export interface Character {
  id?: number;
  name: string;
  image: string;
  species: string;
  status?: string;
  type?: string;
  gender?: string;
  
  link?: () => void;
  isDead?: boolean;
  location?: {
    name: string;
    url: string;
  };
  // isFavorite?: boolean;
  // onAddFavorite?: (character: any) => void;
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

export interface CharacterModalProps {
  character: Character;
  onClose: () => void;

};
