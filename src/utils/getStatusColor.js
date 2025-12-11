export function getStatusColor(status) {
  switch (status) {
    case 'Pending':
      return 'text-orange-500';
    case 'Delivered':
      return 'text-green-600';
    case 'Cancelled':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}
