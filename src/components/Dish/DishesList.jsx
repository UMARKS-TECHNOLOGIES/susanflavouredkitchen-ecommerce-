import DishCard from './DishCard';

const DishesList = ({ dishes, cartActions }) => {
  const { isInCart, getItemQuantity, addToCart } = cartActions;

  return (
    <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 gap-4 mt-4 pb-4 -mx-4 px-4 snap-x snap-mandatory md:pb-0 md:mx-0 md:px-0">
      {dishes.map(dish => {
        const inCart = isInCart(dish.id);
        const quantity = getItemQuantity(dish.id);

        return (
          <DishCard
            key={dish.id}
            dish={dish}
            inCart={inCart}
            quantity={quantity}
            onAdd={() => addToCart(dish)}
          />
        );
      })}
    </div>
  );
};

export default DishesList;
