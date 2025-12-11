import cartContext from 'contexts/cartContext';
import { useContext } from 'react';

const useCart = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
export default useCart;
