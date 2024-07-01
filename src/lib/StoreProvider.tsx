'use client';

import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '@/lib/store';
import { setFavoritePokemons } from '@/lib/features/pokemons/pokemonsSlice';

export default function StoreProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();

    // Load initial favorite pokemons from local storage
    const favoritePokemons = JSON.parse(
      localStorage.getItem('favorite-pokemons') ?? '{}',
    );
    storeRef.current.dispatch(setFavoritePokemons(favoritePokemons));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
