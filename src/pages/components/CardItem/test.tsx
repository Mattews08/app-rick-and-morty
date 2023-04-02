import { render, screen } from '@testing-library/react';
import CardItem from '.';

describe('CardItem', () => {
  const mockCharacter = {
    name: 'Rick Sanchez',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  it('should render the character information', () => {
    render(<CardItem {...mockCharacter} />);

    expect(screen.getByAltText(`Imagem de ${mockCharacter.name}`)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.species)).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
  });

  it('should render the "Detalhes" and heart icons', () => {
    render(<CardItem {...mockCharacter} />);

    expect(screen.getByText('Detalhes')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });
});
