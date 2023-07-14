'use client';

import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
import { useCartStore } from '@/store';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav({ user }: Session) {
  const cartStore = useCartStore();
  return (
    <nav className="flex justify-between items-center py-12">
      <Link href={'/'}>
        <h1>Attire Alchemy</h1>
      </Link>
      <ul className="flex items-center gap-12">
        {/* toggle the cart */}
        <li
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer"
        >
          <HiOutlineShoppingCart />
          <AnimatePresence>
            {cartStore.cart.length > 0 &&
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                className="bg-neutral text-white text-sm font-bold w-5 h-5 rounded-full absolute left-5 bottom-4 flex items-center justify-center"
              >
                {cartStore.cart.length}
              </motion.span>}
          </AnimatePresence>
        </li>

        {/* is the user is not signed in */}
        {!user &&
          <li className="text-neutral test-white py-2 px-4 rounded-md mb-4">
            <button onClick={() => signIn()}>Sign In</button>
          </li>}
        {user &&
          <Link href={'/dashboard'}>
            <li>
              <Image
                src={user.image as string}
                alt={user.name as string}
                width={50}
                height={50}
                className="rounded-full mb-4"
              />
            </li>
          </Link>}
      </ul>
      <AnimatePresence>
        {cartStore.isOpen && <Cart />}
      </AnimatePresence>
    </nav>
  );
}
