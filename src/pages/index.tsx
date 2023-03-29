import { NextPage } from 'next';
import Head from "next/head";
import axios from 'axios';
import { GetStaticProps } from 'next';
import { Container } from "@/styles/pages/Home";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Props {
  characters: Character[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  const characters = response.data.results;
  return { props: { characters } };
};

const Home: NextPage<Props> = ({ characters }) => {
  return (
    <Container>
      <Head>App Ryck and Morty</Head>
      <h1>Personagens de Rick and Morty</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            {character.name}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;



