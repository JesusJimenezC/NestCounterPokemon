import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/lib/features/counter/counterSlice';
import pokemonsSlice from '@/lib/features/pokemons/pokemonsSlice';
import { localstorageMiddleware } from '@/lib/middlewares/localstorageMiddleware';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      pokemons: pokemonsSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: localstorageMiddleware },
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
