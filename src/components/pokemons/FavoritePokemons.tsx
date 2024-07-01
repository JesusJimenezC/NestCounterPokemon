'use client';

import { PokemonGrid } from '@/pokemons';
import { useAppSelector } from '@/lib/hooks';
import { useEffect, useRef, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites),
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);
  const isLoad = useRef<boolean>(false);

  useEffect(() => {
    if (!isLoad.current && Object.values(favoritePokemons).length !== 0) {
      setPokemons(Object.values(favoritePokemons));
      isLoad.current = true;
    }
  }, [favoritePokemons]);

  return (
    <>
      {pokemons.length > 0 ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-2xl text-gray-500">No favorite pokemons</span>
    </div>
  );
};
