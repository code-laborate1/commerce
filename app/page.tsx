'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import lemon from '../public/lemon.jpeg';
import pickle from '../public/Dill-Pickles.jpeg';
const HomePage = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const fadeDownVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-20">
      <div className="flex flex-wrap justify-around items-center w-full md:flex-row-reverse">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={pickle}
            width={500}
            height={500}
            objectFit="contain"
            alt="Image 1"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-8 py-4"
          variants={fadeDownVariant}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-bold mb-4">About Pickle Pantry</h2>
          <p className="text-xl">
            At Pickle Pantry, we are deeply committed to providing our customers
            with the finest pickles made with love and traditional recipes.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-around items-center w-full">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={lemon}
            width={500}
            height={500}
            objectFit="contain"
            alt="Image 2"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left px-8 py-4"
          variants={fadeDownVariant}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-xl">
            Each jar we sell represents our commitment to quality and taste. Our
            pickles are made using only the finest ingredients and family
            recipes handed down through generations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
