import { MiddlewareAPI, Dispatch, Action } from '@reduxjs/toolkit';
import { RootState } from '@/lib/store';

export const localstorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => {
    return (action: Action) => {
      next(action);

      if (action.type === 'pokemons/toggleFavorite') {
        const { pokemons } = state.getState() as RootState;
        localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons));
        return;
      }
    };
  };
};
