import { Button } from 'components/UI_reusables/ui/button';
import React from 'react';

const AboutText = ({ text }) => {
  return (
    <div className="flex-1">
      <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 text-justify lg:text-left whitespace-pre-line">
        {text}
      </p>

      <Button
        className="bg-orange-600 hover:bg-orange-500 text-white font-medium px-8 py-2 h-11"
        size="lg"
      >
        Learn More
      </Button>
    </div>
  );
};

export default AboutText;
