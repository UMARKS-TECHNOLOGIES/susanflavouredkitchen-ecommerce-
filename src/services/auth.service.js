import axios from "axios";

export const authService = {
  register: async (data) => {
    try {
      const response = await axios.post(
        "https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/user/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      throw error.response ? error.response.data : error;
    }
  },
};
