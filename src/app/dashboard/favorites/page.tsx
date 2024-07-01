import { Metadata } from 'next';
import { FavoritePokemons } from '@/components';

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'Favorite pokemons.',
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorite Pokemons <small className="text-pink-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
