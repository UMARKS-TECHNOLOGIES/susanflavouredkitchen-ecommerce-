import { useState } from "react";
import { authService } from "../../services/auth.service";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.register(payload);
      return { success: true, data: response };
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return {
    handleRegister,
    loading,
    error,
  };
};
