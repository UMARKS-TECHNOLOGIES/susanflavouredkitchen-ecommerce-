import React from 'react';
import { User } from 'lucide-react';

const TestimonialCard = ({ name, feedback }) => {
  return (
    <div className="flex-shrink-0 w-[calc(100vw-2rem)] lg:w-auto bg-white px-6 py-6 rounded-br-lg rounded-tl-lg shadow-sm border border-gray-100 snap-center flex flex-col">
      <p className="leading-relaxed text-accent-foreground text-sm lg:text-base font-medium flex-1 w-full whitespace-normal break-words">
        {feedback}
      </p>

      <div className="flex justify-between items-center mt-6">
        <h2 className="font-bold text-lg">{name}</h2>

        <div className="rounded-full flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600">
          <User size={24} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
