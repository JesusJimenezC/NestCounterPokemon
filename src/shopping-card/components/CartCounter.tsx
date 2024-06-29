'use client';

import { useEffect, useRef } from 'react';
import {
  decrement,
  increment,
  initCounterState,
} from '@/lib/features/counter/counterSlice';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';

interface Props {
  value?: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch('/api/counter').then((res) => res.json());
  return data as CounterResponse;
};

export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  );
};
