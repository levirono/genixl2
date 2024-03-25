import Link from 'next/link';

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col bg-white text-black">
      {/* Main Content Section */}
      <main className="flex-1 px-8 py-12 w-70">
        {/* Hero Section */}
        <section className="flex justify-center items-center h-96 mt-40">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-700">WE ARE GENIXL SOLUTIONS</h2>
            <div className="paragraph-container">
              <p className="text-lg mb-6 text-gray-600">
              GenixL is a kenyan based tech solution company that deals with softwares and all electronics,it was foundedon on february 2024,by Rono a software engineer and a tech enthusiast.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                Empowering individuals with innovative solutions is a transformative journey towards enhanced efficiency and enriched lives. By harnessing cutting-edge technoogies and user-friendly software applications, we strive to streamline workflows and elevate daily experiences. Our commitment lies in providing comprehensive gadgetry, smartphones, laptops, and customizable PC components, tailoring technology to individual needs.
              </p>
            </div>
            <Link href="/explore" className="inline-flex items-center px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <span>contact us</span>
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

export default About;
