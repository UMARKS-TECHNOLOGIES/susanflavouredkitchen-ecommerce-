import { testimonies } from 'Data-center/testimonial.data';
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <section className="mt-10 lg:mt-0 px-4 lg:px-0">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h3 className="text-2xl font-medium mb-4 lg:mb-0">Testimonials</h3>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-4 my-4 pb-4 snap-x snap-mandatory scroll-smooth lg:pb-0 scrollbar-hide">
          {testimonies.map(item => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              feedback={item.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
