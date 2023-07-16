import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10 px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-gray-400">
              We are a family-owned business providing the finest quality
              pickles, lovingly made with our secret traditional recipe.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-4 text-gray-400">1234 Street Name, City, State</p>
            <p className="mt-2 text-gray-400">+(123) 456-7890</p>
            <p className="mt-2 text-gray-400">info@pickleparadise.com</p>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-10">
          © 2023 Pickle Pantry. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
