import About from 'components/About/About';
import Categories from 'components/CategorySection/Category';
import PopularDishes from 'components/Catering/PopularDishes';
import HeroSection from 'components/HeroSection/HeroSection';
import Testimonial from 'components/Testmonial/Testmonial';
import React from 'react';

const MainLayout = () => {
  return (
    <section>
      <HeroSection />
      <Categories />
      <PopularDishes />
      <About />
      <Testimonial />
    </section>
  );
};

export default MainLayout;
