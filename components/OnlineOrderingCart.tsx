import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, MessageSquare, ArrowRight, Utensils } from 'lucide-react';
import { CartItem } from '../types';
import { restaurantConfig } from '../data/restaurantData';

interface OnlineOrderingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OnlineOrderingCart: React.FC<OnlineOrderingCartProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState<'Takeaway Pickup' | 'Dine-In Prefavor' | 'Delivery Request'>('Takeaway Pickup');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const packagingFee = subtotal > 0 ? 1500 : 0;
  const total = subtotal + (deliveryType === 'Takeaway Pickup' ? packagingFee : 2500);

  const handleSendWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let itemsList = '';
    cart.forEach((c, idx) => {
      itemsList += `%0A${idx + 1}. *${encodeURIComponent(c.item.name)}* x${c.quantity} - ₦${(c.item.price * c.quantity).toLocaleString()}`;
    });

    const orderMsg = `Hello Savora Restaurant, I would like to place an order:%0A%0A*Customer Name:* ${encodeURIComponent(customerName || 'Guest')}%0A*Phone:* ${encodeURIComponent(customerPhone || 'Not provided')}%0A*Order Type:* ${encodeURIComponent(deliveryType)}%0A-------------------%0A*Items:*${itemsList}%0A-------------------%0A*Subtotal:* ₦${subtotal.toLocaleString()}%0A*Est. Fee:* ₦${(deliveryType === 'Takeaway Pickup' ? packagingFee : 2500).toLocaleString()}%0A*Total Amount:* ₦${total.toLocaleString()}%0A%0APlease confirm availability and payment instructions. Thank you!`;

    window.open(`https://wa.me/${restaurantConfig.whatsappNumber}?text=${orderMsg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fade-in">
      <div className="bg-[#FAF7F2] text-[#1A2E22] w-full max-w-md h-full flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#1A2E22] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#1A2E22]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Your Order Cart</h3>
              <p className="text-xs text-gray-300">
                {cart.reduce((acc, i) => acc + i.quantity, 0)} items selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center mx-auto text-stone-500">
                <Utensils className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-stone-800">Your cart is empty</h4>
              <p className="text-stone-600 text-sm max-w-xs mx-auto">
                Explore our exquisite menu and add your favorite dishes to prepare your order.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#1A2E22] text-white font-medium text-sm shadow-md"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-4">
                {cart.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="p-4 rounded-2xl bg-white shadow-sm border border-stone-200 flex items-center justify-between gap-4"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-stone-900 text-sm truncate">
                        {cartItem.item.name}
                      </h4>
                      <p className="text-xs text-[#D4AF37] font-semibold">
                        ₦{cartItem.item.price.toLocaleString()} each
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="px-2 py-1 hover:bg-stone-200 text-stone-700 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-stone-900">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="px-2 py-1 hover:bg-stone-200 text-stone-700 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="text-red-500 hover:text-red-700 p-1 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif font-bold text-stone-900 text-sm">
                        ₦{(cartItem.item.price * cartItem.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Details Form for Order */}
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 space-y-4">
                <h4 className="font-serif font-bold text-stone-900 text-sm">Order Information</h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-semibold mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Amina Bello"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-none focus:border-[#1A2E22]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 801 234 5678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-none focus:border-[#1A2E22]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-600 font-semibold mb-1">
                      Fulfillment Type
                    </label>
                    <select
                      value={deliveryType}
                      onChange={(e) => setDeliveryType(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-none focus:border-[#1A2E22]"
                    >
                      <option value="Takeaway Pickup">Takeaway Pickup (Packaging ₦1,500)</option>
                      <option value="Delivery Request">Delivery Request (Lekki / Victoria Island ₦2,500)</option>
                      <option value="Dine-In Prefavor">Dine-In Table Prefavor Order</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Totals Summary */}
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 space-y-2 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>{deliveryType === 'Takeaway Pickup' ? 'Packaging Fee' : 'Delivery/Service Fee'}</span>
                  <span>₦{(deliveryType === 'Takeaway Pickup' ? packagingFee : 2500).toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-stone-200 flex justify-between font-serif font-bold text-lg text-stone-900">
                  <span>Total</span>
                  <span className="text-[#1A2E22]">₦{total.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-stone-200 space-y-3">
            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send Order to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
