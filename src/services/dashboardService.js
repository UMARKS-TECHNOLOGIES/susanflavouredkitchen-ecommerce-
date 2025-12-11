// services/dashboardService.js

import axios from "axios";

export const dashboardService = {
  async getDashboardStats() {
    try {
      const response = await axios.get("/api/v1/admin/stats");
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      throw error;
    }
  },

  async getAllOrders() {
    try {
      const response = await axios.get("/api/v1/orders/");
      return response.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  async updateOrderStatus(orderId, status) {
    try {
      const response = await axios.patch(`/api/v1/orders/${orderId}/status`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating order status:", error);
      throw error;
    }
  },
};
