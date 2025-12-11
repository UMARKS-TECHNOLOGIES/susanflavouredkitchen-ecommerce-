import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import cartContext from 'contexts/cartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // 1. Fetch cart from server
  // -----------------------------
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get('/cart'); // your endpoint
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // -----------------------------
  // 2. Add item to cart
  // -----------------------------
  const addToCart = async productId => {
    try {
      const res = await axios.post('/cart/add', { productId });
      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to add cart item:', err);
    }
  };

  // -----------------------------
  // 3. Remove item from cart
  // -----------------------------
  const removeFromCart = async productId => {
    try {
      const res = await axios.delete(`/cart/remove/${productId}`);
      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to remove item:', err);
    }
  };

  // -----------------------------
  // 4. Update item quantity
  // -----------------------------
  const updateQuantity = async (productId, quantity) => {
    try {
      if (quantity < 1) {
        return removeFromCart(productId);
      }

      const res = await axios.patch('/cart/update', {
        productId,
        quantity,
      });

      setCartItems(res.data.items);
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  // -----------------------------
  // 5. Clear cart
  // -----------------------------
  const clearCart = async () => {
    try {
      const res = await axios.delete('/cart/clear');
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error('Failed to clear cart:', err);
    }
  };

  // -----------------------------
  // 6. Utility functions
  // -----------------------------
  const getTotalItems = () =>
    cartItems.reduce((t, item) => t + item.quantity, 0);

  const getSubtotal = () =>
    cartItems.reduce((t, item) => t + item.price * item.quantity, 0);

  const isInCart = id => cartItems.some(item => item.id === id);

  const getItemQuantity = id => {
    const item = cartItems.find(i => i.id === id);
    return item?.quantity || 0;
  };

  const value = {
    cartItems,
    loading,
    fetchCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getSubtotal,
    isInCart,
    getItemQuantity,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
