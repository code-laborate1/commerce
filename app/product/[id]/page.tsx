import { SearchParamTypes } from '@/types/SearchParamTypes';
import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import AddCart from './AddCart';

export default async function Product({ searchParams }: SearchParamTypes) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-24 text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={600}
        height={600}
        className="w-full"
        priority={true}
      />
      <div className="font-medium">
        <h1 className="text-2xl font-bold text-primary">
          {searchParams.name}
        </h1>
        <p className="py-2">
          {searchParams.description}
        </p>
        <p className="py-2">
          {searchParams.features}
        </p>
        <div className="flex gap-2">
          <p className="font-bold text-primary">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
