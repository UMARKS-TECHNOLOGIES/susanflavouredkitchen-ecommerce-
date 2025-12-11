import { cateringData } from './data/cateringData';
import CateringBanner from './components/CateringBanner';
import CateringContent from './components/CateringContent';

const Catering = () => {
  return (
    <section className="my-10">
      <div className="w-full lg:max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium px-4 lg:px-40 mb-4 lg:mb-0">
          {cateringData.title}
        </h2>

        <div className="px-4 lg:px-0">
          <CateringBanner image={cateringData.bannerImage}>
            <CateringContent
              headline={cateringData.headline}
              description={cateringData.description}
              buttonText={cateringData.buttonText}
            />
          </CateringBanner>
        </div>
      </div>
    </section>
  );
};

export default Catering;
