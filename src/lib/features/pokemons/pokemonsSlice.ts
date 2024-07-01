import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

// const getInitialState = () => {
//   const favoritePokemons = localStorage.getItem('favorite-pokemons');
//
//   if (favoritePokemons) {
//     return JSON.parse(favoritePokemons);
//   }
//
//   return {};
// };

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem(
        'favorite-pokemons',
        JSON.stringify(state.favorites),
      );
    },
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>,
    ) => {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
