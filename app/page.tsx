import Stripe from 'stripe';
import Product from './components/Product';
const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
  });

  const products = await stripe.products.list();
  const productsWithPrices = await Promise.all(
    products.data.map(async product => {
      const prices = await stripe.prices.list({
        product: product.id
      });
      return {
        id: product.id,
        name: product.name,
        price: prices.data[0].unit_amount,
        currency: prices.data[0].currency,
        image: product.images[0]
      };
    })
  );
  return productsWithPrices;
};
export default async function Home() {
  const products = await getProducts();
  return (
    <main className="grid grid-cols-fluid gap-12">
      {products.map(product => <Product {...product} key={product.id} />)}
    </main>
  );
}
