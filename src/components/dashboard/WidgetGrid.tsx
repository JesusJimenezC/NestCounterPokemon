'use client';

import { SimpleWidget } from '@/components';
import { useAppSelector } from '@/lib/hooks';
import { IoCafeOutline } from 'react-icons/io5';

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="Total added products"
        icon={<IoCafeOutline size={70} className="text-green-500" />}
        label="Counter"
        href="/dashboard/counter"
      />
    </div>
  );
};
