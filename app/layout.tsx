import './globals.css';
import Nav from './components/Nav';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Hydrate from './components/Hydrate';
import {Roboto, Lobster, Lobster_Two} from 'next/font/google'
import Footer from './components/Footer';

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  variable: '--font-roboto'
  });
const lobster = Lobster_Two({
  weight: ["700"],
  subsets: ['latin'],
  variable: '--font-lobster'
  });

export const metadata = {
  title: 'PicklePantry',
  description: 'Discover a world of endless possibilities at our online store'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // fetch user
  const session = await getServerSession(authOptions);
  return (
    <html className={`${roboto.variable}`} lang="en" data-theme='light'>
      <body className={`mx-4 lg:mx-48 ${roboto.variable} ${lobster.variable}`} suppressHydrationWarning={true} >
        <Hydrate>
          <Nav user={session?.user} expires={session?.expires as string}/>
          {children}
        <Footer />
        </Hydrate>
      </body>
    </html>
  );
}
