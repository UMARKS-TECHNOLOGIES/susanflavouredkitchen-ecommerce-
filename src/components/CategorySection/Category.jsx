import { categoryItems } from 'Data-center/categoryItems';
import CategoryList from './CategoryList';

const Categories = () => {
  return (
    <section className="w-full lg:max-w-5xl mx-auto mt-4 lg:mt-0 relative top-0 lg:top-16 px-4 lg:px-0">
      <h3 className="text-2xl text-neutral-700 lg:text-3xl font-medium mb-4 lg:mb-0">
        Categories
      </h3>

      <CategoryList items={categoryItems} />
    </section>
  );
};

export default Categories;
