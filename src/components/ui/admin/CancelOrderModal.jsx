import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AlertCircle, X } from 'lucide-react';
import React from 'react'

const CancelOrderModal = ({ isOpen, onClose, orderId }) => {
  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-md">
              <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
              >
                  <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>

                  <h2 className="text-2xl font-bold mb-2">Cancel Order</h2>

                  <p className="text-gray-600 mb-6">
                      Are you sure you want to cancel this order? This action cannot be undone.
                  </p>

                  <div className="flex gap-3">
                      <Button
                          onClick={onClose}
                          variant="outline"
                          className="px-6"
                      >
                          No, Keep Order
                      </Button>
                      <Button
                          onClick={() => {
                              console.log('Order cancelled:', orderId);
                              onClose();
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white px-6"
                      >
                          Yes, Cancel
                      </Button>
                  </div>
              </div>
          </DialogContent>
      </Dialog>
  )
}

export default CancelOrderModal