import React from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';


const UpdateStatusModal = ({ isOpen, onClose, orderId }) => {
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
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">Update Status?</h2>

                    <p className="text-gray-600 mb-6">
                        Are you sure you want to update the status of this order?
                    </p>

                    <div className="flex gap-3">
                        <Button
                            onClick={onClose}
                            variant="outline"
                            className="px-6"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                console.log('Status updated for order:', orderId);
                                onClose();
                            }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6"
                        >
                            Confirm
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateStatusModal