export const handleAddToCart = (dish, addToCart) => {
  if (!dish || !dish.id || !dish.name || typeof dish.price !== 'number') {
    console.error('Invalid dish object:', dish);
    return;
  }

  try {
    addToCart(dish);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};
