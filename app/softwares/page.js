import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

const Softwares = () => {
  return ( 
    <div className="y min-h-screen flex flex-col bg-white text-black mx-auto">
      <main className="flex-1 px-8 py-12">
        {/* Hero Section */}
        <section className="flex justify-center items-center h-96">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Empowering Your Business Solutions</h2>
            <p className="text-lg mb-6 text-gray-600">
              Explore our comprehensive range of software solutions for enterprise, education, e-commerce, and mobile platforms.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mt-12">
          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Enterprise Solutions</h3>
            <p className="text-gray-600">
              Tailored solutions to meet the complex needs of large organizations and enterprises.
            </p>
            {/* Corrected Link usage */}
            <Link href="/enterprise">
              <a className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                Explore Enterprise Solutions
              </a>
            </Link>
          </div>

          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Education Solutions</h3>
            <p className="text-gray-600">
              Innovative solutions to enhance learning experiences and streamline educational processes.
            </p>
            {/* Example without Link for comparison */}
            <span>Explore Education Solutions</span>
          </div>

          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">E-commerce Solutions</h3>
            <p className="text-gray-600">
              Drive your online business with feature-rich and scalable e-commerce solutions.
            </p>
            {/* Corrected Link usage */}
            <Link href="/e-commerce">
              <a className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                Explore E-commerce Solutions
              </a>
            </Link>
          </div>

          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Mobile Solutions</h3>
            <p className="text-gray-600">
              Mobile app development for a seamless and engaging user experience across platforms.
            </p>
            {/* Corrected Link usage */}
            <Link href="/mobile-solutions">
              <a className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                Explore Mobile Solutions
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Softwares;
