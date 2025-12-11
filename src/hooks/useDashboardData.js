// hooks/useDashboardData.js
import { useEffect, useState } from 'react';
import { dashboardService } from '../services/dashboardService';

export function useDashboardData() {
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // prevent state update if component unmounts

    async function load() {
      try {
        const statsData = await dashboardService.getDashboardStats();
        const ordersData = await dashboardService.getAllOrders();

        if (isMounted) {
          setStats(statsData);
          setRecentOrders(ordersData);
        }
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { stats, recentOrders, isLoading };
}
