import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { GetStaticProps } from "next";
import Header from "./components/Header";
import { Character, CharactersProps } from "@/types";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import { Container, Content, Wrapper } from "@/styles/pages/Home";
import CharacterFilters from "./components/FiltersItems";

const PAGE_SIZE = 20;

export const getStaticProps: GetStaticProps<CharactersProps> = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return {
    props: {
      characters: data.results,
      totalPages: data.info.pages,
    },
  };
};

const Home: NextPage<CharactersProps> = ({ characters: initialCharacters, totalPages }) => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [currentPage, setCurrentPage] = useState(1);
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");

  const handlePageChange = async (pageNumber: number) => {
    console.log('Changing to page', pageNumber);
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
    const data = await response.json();
    console.log('Data for page', pageNumber, ':', data);
    setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    setCurrentPage(pageNumber);
  };

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const currentCharacters = characters.slice(start, end);

  const handleFilterChange = (filter: string, value: string) => {
    if (filter === "gender") setGender(value);
    if (filter === "species") setSpecies(value);
    if (filter === "status") setStatus(value);
  };

  useEffect(() => {
    const fetchFilteredCharacters = async () => {
      let url = "https://rickandmortyapi.com/api/character/";
      if (gender) url += `?gender=${gender}`;
      if (species) url += `${gender ? "&" : "?"}species=${species}`;
      if (status) url += `${gender || species ? "&" : "?"}status=${status}`;
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchFilteredCharacters();
  }, [gender, species, status]);

  const items = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <Wrapper>
      <Container>
      <Head>App Ryck and Morty</Head>
      {/* <Header title="My Website" items={items} />
      <h1>Personagens de Rick and Morty</h1> */}
     <Content>
     <CharacterFilters onFilterChange={handleFilterChange} />
     <CardList
        characters={currentCharacters}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
     </Content>
    </Container>
    </Wrapper>
  );
};

export default Home;
