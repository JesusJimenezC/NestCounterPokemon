import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List Pokemons',
  description: 'List of the first 151 pokemons.',
};

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon List <small className="text-blue-500">static</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
