import React from 'react';

const ScrollingSubsections = () => {
  return (
    <section className="flex justify-center items-center h-96 mt-40 mb-40">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Empowering You with Innovative Solutions</h2>
        <div className="scroll-container overflow-x-hidden whitespace-nowrap animate-scroll">
          <div className="sub-container inline-block w-full px-4 text-center">
            <img src="/img_5terre.jpg" alt="Cinque Terre" />
            <p className="text-lg mb-6 text-gray-600">
              Explore our comprehensive range of software and cutting-edge gadgets, designed to streamline your workflow and enhance your daily life.
            </p>
          </div>

          <div className="sub-container inline-block w-full px-4 text-center">
            <img src="/img_forest.jpg" alt="Forest" />
            <p className="text-lg mb-6 text-gray-600">
              Empowering individuals with innovative solutions is a transformative journey towards enhanced efficiency and enriched lives. By harnessing cutting-edge technologies and user-friendly software applications, we strive to streamline workflows and elevate daily experiences.
            </p>
          </div>

          <div className="sub-container inline-block w-full px-4 text-center">
            <img src="/img_lights.jpg" alt="Northern Lights" />
            <p className="text-lg mb-6 text-gray-600">
              Our commitment lies in providing comprehensive gadgetry, smartphones, laptops, and customizable PC components, tailoring technology to individual needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingSubsections;