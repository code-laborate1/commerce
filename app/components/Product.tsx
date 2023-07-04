import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import { ProductType } from '@/types/ProductType';
import Link from "next/link"

export default function Product({ name, image, unit_amount, id, description, metadata }: ProductType) {
  const { features } = metadata
  return (
    <Link href={{
            pathname:`/product/${id}`,
            query: {name, image, unit_amount, id, description, features}}}>
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
            {unit_amount && formatPrice(unit_amount)}
          </h2>
        </div>
      </div>
    </Link>
  );
}
