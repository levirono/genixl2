import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Gadgets = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 px-8 py-12">
        {/* Hero Section */}
        <section className="flex justify-center items-center h-96">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Discover Innovative Tech Solutions</h2>
            <p className="text-lg mb-6 text-gray-600">
              Explore our range of gadgets, smartphones, laptops, and build your PC designed to elevate your daily life and work.
            </p>
          </div>
        </section>

        {/* Phones Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-12">
          <div className="order-1 md:order-1 shadow-md rounded-lg p-4 hover:shadow-lg">
            
            <h3 className="text-xl font-bold mb-2 text-green-700">Smartphones</h3>
            <p className="text-gray-600 text-left">
              Discover the latest smartphones that cater to your communication and entertainment needs.
            </p>
            <Link href="/phones" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn More about Phones</span>
            </Link>
          </div>

          {/* Build Your PC Section */}
          <div className="order-2 md:order-2 shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Build Your PC</h3>
            <p className="text-gray-600 text-left">
              Customize your PC with high-performance components tailored to your needs.
            </p>
            <Link href="/build-pc" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn More about Building Your PC</span>
            </Link>
          </div>
        </section>

        {/* Laptops and Accessories Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-12">
          {/* Laptops Section */}
          <div className="order-3 md:order-2 shadow-md rounded-lg p-4 hover:shadow-lg">
            
            <h3 className="text-xl font-bold mb-2 text-green-700">Laptops</h3>
            <p className="text-gray-600 text-left">
              Find the perfect laptop that meets your computing needs, from powerful workstations to ultra-portable notebooks.
            </p>
            <Link href="/laptops" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn More about Laptops</span>
            </Link>
          </div>

          {/* Accessories Section */}
          <div className="order-4 md:order-3 shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Accessories</h3>
            <p className="text-gray-600 text-left">
              What do you need when buying an accessory.
            </p>
            <Link href="/accessories" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Explore Accessories</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gadgets;
