import React from 'react';
import { prisma } from '@/util/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import formatPrice from '@/util/PriceFormat';
import Image from 'next/image';

export const revalidate = 0;
const fetchOrders = async () => {

  const user = await getServerSession(authOptions);
  if (!user) {
    return null;
  }
  const orders = await prisma.order.findMany({
    where: {
      userId: user?.user?.id, status: 'complete'
    },
    include: {
      products: true,
    },
  });
  return orders;
};

export default async function Dashboard() {
  const orders = await fetchOrders();

  if (orders === null) {
    return <h1 className="text-4xl font-semibold text-center text-red-600">Not authenticated - Please Log in to view your orders.</h1>;
  }

  if (orders.length === 0) {
    return <h1 className="text-4xl font-semibold text-center text-blue-600">No Orders placed.</h1>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div className="p-4 bg-white rounded-xl shadow-lg dark:bg-gray-800" key={order.id}>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Order reference: {order.id}</h2>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">Time: {new Date(order.createdAt).toString()}</p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
              Status: <span className={`font-bold text-xs ${order.status === 'complete' ? 'text-green-500' : 'text-orange-500'}`}>{order.status}</span>
            </p>
            <p className="text-md mt-2 font-semibold text-gray-700 dark:text-white">Total: {formatPrice(order.amount)}</p>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              {
                order.products.map((product) => (
                  <div className="flex space-x-4 items-center" key={product.id}>
                    <Image
                      src={product.image!}
                      alt={product.name}
                      width={40}
                      height={40}
                      priority={true}
                      className='w-auto'
                    />
                    <div>
                      <h2 className="text-sm font-semibold text-gray-700 dark:text-white">{product.name}</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Price: {formatPrice(product.unit_amount)}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
