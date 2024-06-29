import { Metadata } from 'next';
import { CartCounter } from '@/shopping-card';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter page',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products on shopping car</span>
      <CartCounter value={20} />
    </div>
  );
}
