import { useEffect, useState } from "react";
import styles from './styles.module.scss';
import { PokemonType } from "../types/PokemonType";

export default function Dashboard() {

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:3000/pokemon");

      const data = await response.json();

      setPokemons(data);
    }

    loadData()
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <ul className={styles["container-pokemons"]}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <strong>{pokemon.type}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}