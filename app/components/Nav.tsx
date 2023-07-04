'use client';

import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useCartStore } from '@/store';
import {AiFillShopping} from 'react-icons/ai'

export default function Nav({ user }: Session) {
  const cartStore = useCartStore()
  return (
    <nav className="flex justify-between items-center py-12">
      <Link href={'/'}>
        <h1>Attire Alchemy</h1>
      </Link>
      <ul className="flex items-center gap-12">
        {/* toggle the cart */}
        <li onClick={() => cartStore.toggleCart()}
        className='flex items-center text-3xl relative cursor-pointer'>
          <AiFillShopping />
          <span className='bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center'>
            {cartStore.cart.length}
          </span>
        </li>

        {/* is the user is not signed in */}
        {!user &&
          <li className="bg-teal-600 test-white py-2 px-4 rounded-md mb-4">
            <button onClick={() => signIn()}>Sign In</button>
          </li>}
        {user &&
          <>
            <li>
              <Image
                src={user.image as string}
                alt={user.name as string}
                width={50}
                height={50}
                className="rounded-full mb-4"
              />
            </li>
          </>}
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
}
