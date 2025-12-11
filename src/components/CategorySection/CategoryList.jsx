import CategoryCard from './CategoryCard';

const CategoryList = ({ items }) => {
  return (
    <div
      className="my-5 flex flex-nowrap overflow-x-auto scrollbar-hide gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory 
      lg:pb-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-9 lg:mx-0 lg:px-0"
    >
      {items.map(item => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CategoryList;
