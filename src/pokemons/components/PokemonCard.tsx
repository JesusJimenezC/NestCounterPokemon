'use client';

import Link from 'next/link';
import { SimplePokemon } from '@/pokemons';
import Image from 'next/image';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleFavorite } from '@/lib/features/pokemons/pokemonsSlice';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const dispatch = useAppDispatch();
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => state.pokemons.favorites[id]);
  const onToggleFavorite = () => dispatch(toggleFavorite(pokemon));

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            priority={false}
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              More Information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggleFavorite}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? 'Favorite' : 'Not Favorite'}
              </p>
              <p className="text-xs text-gray-500">
                Add to your favorite pokemons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
