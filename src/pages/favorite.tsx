import { useState, useEffect } from "react";
import CardItem from "./components/CardItem";
import { Character } from "@/types";
import { GetStaticProps } from "next";
import axios from "axios";


export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const favoriteCharacters = localStorage.getItem("favoriteCharacters");
  const parsedFavorites = favoriteCharacters ? JSON.parse(favoriteCharacters) : [];
  setFavorites(parsedFavorites);
  

  return (
    <div>
      <h1>Favorite Characters</h1>
      {favorites.map((character) => (
        <CardItem
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
        />
      ))}
    </div>
  );
}
