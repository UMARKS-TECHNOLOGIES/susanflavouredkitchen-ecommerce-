import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import HeroSlideItem from './HeroSlideItem';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSlider = ({ heroSlides }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-auto w-full heroSwiper rounded-2xl lg:rounded-lg overflow-hidden"
        style={{ paddingBottom: '50px' }}
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <HeroSlideItem {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ff6e00;
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
