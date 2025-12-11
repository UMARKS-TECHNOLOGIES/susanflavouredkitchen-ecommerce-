import React from "react";
import { Button } from "../../components/ui/button";
import { ShoppingBag, Clock, CheckCircle2 } from "lucide-react";

import AdminNavbar from "../../components/ui/admin/AdminNavbar";
import StatsCard from "../../components/ui/admin/StatsCard";
import { useDashboardData } from "../../hooks/useDashboardData";
import { getStatusColor } from "../../utils/getStatusColor";

const DashboardLayout = () => {
    const { stats, recentOrders, isLoading } = useDashboardData();

    if (isLoading) {
        return (
            <div className="p-8">
                <AdminNavbar />
                <p className="mt-20 text-center text-gray-500">Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div>
            <AdminNavbar />

            <div className="mt-20">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>

            {/* STAT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12">
                <StatsCard
                    title="Total Orders"
                    value={stats.total}
                    bgColor="bg-[#eee1cc]"
                    icon={ShoppingBag}
                />

                <StatsCard
                    title="Pending Orders"
                    value={stats.pending}
                    bgColor="bg-orange-100"
                    icon={Clock}
                />

                <StatsCard
                    title="Completed Orders"
                    value={stats.completed}
                    bgColor="bg-green-100"
                    icon={CheckCircle2}
                />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex mb-8 items-center justify-around">
                <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
                    View Orders
                </Button>

                <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
                    + Add New Meal
                </Button>

                <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
                    Catering Requests
                </Button>
            </div>

            {/* RECENT ORDERS TABLE */}
            <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Recent Orders</h2>
                </div>

                {/* Header */}
                <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-200 font-semibold text-sm">
                    <div>Order ID</div>
                    <div>Customer</div>
                    <div>Item</div>
                    <div>Price</div>
                    <div>Status</div>
                </div>

                {/* Rows */}
                <div className="divide-y">
                    {recentOrders.map((order) => (
                        <div
                            key={order.id}
                            className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50"
                        >
                            <div className="font-medium">{order.id}</div>
                            <div>{order.customer}</div>
                            <div className="text-sm text-gray-600">{order.items}</div>
                            <div className="font-medium">{order.price}</div>
                            <div className={`font-semibold ${getStatusColor(order.status)}`}>
                                {order.status}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 border-t text-right">
                    <Button
                        size="sm"
                        className="text-orange-500 hover:text-white font-medium bg-transparent outline-2 outline-orange-400 hover:bg-orange-600"
                    >
                        View All Orders
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
