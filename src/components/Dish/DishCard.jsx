import { Button } from "components/UI_reusables/ui/button";

const DishCard = ({ dish, inCart, quantity, onAdd }) => {
  return (
    <div className="min-w-[300px] md:min-w-0 w-full p-2 bg-secondary rounded-lg shrink-0 snap-center">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-[200px] md:h-[50vh] lg:h-[350px] object-cover bg-center rounded-lg"
      />

      <div className="px-2 md:px-4">
        <h3 className="mt-2 text-lg font-bold capitalize truncate">
          {dish.name}
        </h3>

        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold">£{dish.price.toFixed(2)}</p>

          <Button
            size="md"
            onClick={onAdd}
            className="ml-4 px-4 py-2 bg-orange-500 rounded-md text-sm font-medium hover:bg-orange-600 text-white cursor-pointer"
          >
            {inCart ? `Add More (${quantity})` : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
