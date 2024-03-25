import ScrollingSubsections from '@/components/scrolling';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 px-8 py-12">
        {/* Hero Section */}
        <section className="flex justify-center items-center h-auto mt-20 md:mt-40">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Empowering You with Innovative Solutions</h2>
            <div className="paragraph-container">
              <p className="text-lg mb-6 text-gray-600">
                Explore our comprehensive range of software and cutting-edge gadgets, designed to streamline your workflow and enhance your daily life.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                Empowering individuals with innovative solutions is a transformative journey towards enhanced efficiency and enriched lives. By harnessing cutting-edge technologies and user-friendly software applications, we strive to streamline workflows and elevate daily experiences. Our commitment lies in providing comprehensive gadgetry, smartphones, laptops, and customizable PC components, tailoring technology to individual needs.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn more</span>
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </section>

        {/* Software and Gadgets Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-20">
          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Powerful Software Solutions</h3>
            <p className="text-gray-600">
              Elevate your productivity and efficiency with our user-friendly and feature-rich software applications.
            </p>
            <Link href="/softwares" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn More about Software</span>
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>

          <div className="shadow-md rounded-lg p-4 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-green-700">Cutting-Edge Gadgets</h3>
            <p className="text-gray-600">
              Enhance your life with our innovative gadgets, designed to improve your efficiency, entertainment, and overall well-being.
            </p>
            <Link href="/gadgets" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Learn More about Gadgets</span>
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </section>

        {/* Home to Cutting-Edge Technologies Section */}
        <section className="flex justify-center items-center h-auto mt-8 md:mt-20">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Home to cutting edge technologies</h2>
            <div className="paragraph-container">
              <p className="text-lg mb-6 text-gray-600">
                With ever-changing technology, we ensure that we provide you with the best solutions tailored to your needs and business. Our commitment lies in staying ahead of the curve, adapting to advancements, and delivering excellence. Whether it’s cutting-edge software, efficient processes, or personalized support, we’re here to empower your success.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                And not to forget, we’ve got a lineup of sleek gadgets that seamlessly integrate into your workflow. From smart devices that streamline communication to powerful tools that enhance productivity, we’ve got your tech needs covered.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Our Products Section */}
        <section className="
flex justify-center items-center h-auto mt-8 md:mt-20">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Explore our products</h2>
            <div className="paragraph-container">
              <p className="text-lg mb-6 text-gray-600">
                We have a wide range of products and services that we offer as well as product reviews and blogs on our website.
              </p>
            </div>
            <Link href="/products and services" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>Explore Our Products</span>
              <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
