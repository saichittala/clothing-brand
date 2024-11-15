import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import { toast } from 'react-hot-toast';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cart, removeFromCart, updateQuantity, couponCode, discount, applyCoupon } = useStore();

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  const handleApplyCoupon = (code: string) => {
    applyCoupon(code);
    if (discount > 0) {
      toast.success(`Coupon applied! ${discount}% off your order`);
    } else {
      toast.error('Invalid coupon code');
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex items-center justify-between px-4 py-6 sm:px-6">
                      <Dialog.Title className="text-lg font-light">Shopping Cart</Dialog.Title>
                      <button
                        type="button"
                        className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                        onClick={onClose}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-4 sm:px-6">
                      {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <p className="text-neutral-600 mb-4">Your cart is empty</p>
                          <button
                            onClick={onClose}
                            className="btn btn-primary"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      ) : (
                        <ul className="divide-y divide-neutral-200">
                          {cart.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 bg-neutral-100">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex-1 flex flex-col">
                                <div className="flex justify-between">
                                  <div>
                                    <h3 className="text-sm font-light">{item.name}</h3>
                                    <p className="mt-1 text-sm text-neutral-500">
                                      Size: {item.selectedSize}
                                    </p>
                                  </div>
                                  <p className="text-sm font-light">${item.price}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between">
                                  <div className="flex items-center border border-neutral-200">
                                    <button
                                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                      className="p-2 hover:bg-neutral-100"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-4 py-2">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="p-2 hover:bg-neutral-100"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-neutral-500 hover:text-neutral-600"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Cart Summary */}
                    {cart.length > 0 && (
                      <div className="border-t border-neutral-200 px-4 py-6 sm:px-6">
                        {/* Coupon Input */}
                        {!couponCode && (
                          <div className="mb-4">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Enter coupon code"
                                className="input flex-1"
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') {
                                    handleApplyCoupon((e.target as HTMLInputElement).value);
                                  }
                                }}
                              />
                              <button
                                onClick={(e) => {
                                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                                  handleApplyCoupon(input.value);
                                }}
                                className="btn btn-primary"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Summary */}
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                          </div>
                          {discount > 0 && (
                            <div className="flex justify-between text-green-600">
                              <span>Discount ({discount}%)</span>
                              <span>-${discountAmount.toFixed(2)}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-medium text-base pt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>

                        <button
                          className="w-full btn btn-primary mt-6"
                          onClick={() => {
                            toast.success('Order placed successfully!');
                            onClose();
                          }}
                        >
                          Checkout
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}