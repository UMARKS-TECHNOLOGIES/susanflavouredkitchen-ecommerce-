import DishesList from 'components/Dish/DishesList';
import { popularDishesData } from 'Data-center/dishesData';
import useCart from 'hooks/useCart';

const PopularDishes = () => {
  const cartActions = useCart();

  return (
    <section className="mt-10 lg:mt-25 px-4 lg:px-0">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium">Popular Dishes</h2>

        <DishesList dishes={popularDishesData} cartActions={cartActions} />
      </div>
    </section>
  );
};

export default PopularDishes;
