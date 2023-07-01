import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import { ProductType } from '@/types/ProductType';
export default function Product({ name, image, price }: ProductType) {
  return (
    <div className="text-gray-500">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-96 h-80 object-cover rounded-lg"
      />
      <div className="font-medium py-2">
        <h1>
          {name}
        </h1>
        <h2 className="text-sm">
          {price && formatPrice(price)}
        </h2>
      </div>
    </div>
  );
}
