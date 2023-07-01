'use client';

import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-8">
      <h1>Attire Alchemy</h1>
      <ul className="flex items-center gap-12">
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
    </nav>
  );
}
