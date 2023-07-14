import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import Stripe from 'stripe';
import { prisma } from '@/util/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  events: {
    createUser: async ({ user }: any) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: '2022-11-15'
      });
      if (user.name && user.email) {
        const customer = await stripe.customers.create({
          email: user.email || undefined,
          name: user.name || undefined
        });
        await prisma.user.update({
          where: { id: user.id },
          data: { stripeCustomerId: customer.id }
        });
      }
    }
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user = user;
      return session;
    }
  }
};
export default NextAuth(authOptions);
