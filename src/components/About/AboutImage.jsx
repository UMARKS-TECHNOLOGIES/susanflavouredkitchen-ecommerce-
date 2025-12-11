import React from 'react';

const AboutImage = ({ src, alt }) => {
  return (
    <div className="w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-lg overflow-hidden shrink-0">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default AboutImage;
