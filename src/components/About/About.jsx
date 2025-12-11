import { aboutContent } from 'Data-center/about.data';
import React from 'react';
import AboutImage from './AboutImage';
import AboutText from './AboutText';

const About = () => {
  return (
    <section className="mt-10 lg:mt-20">
      <div className="w-full lg:max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-2xl font-medium mb-4 lg:mb-8">About Us</h2>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <AboutImage src={aboutContent.image} alt="About Us" />
          <AboutText text={aboutContent.text} />
        </div>
      </div>
    </section>
  );
};

export default About;
