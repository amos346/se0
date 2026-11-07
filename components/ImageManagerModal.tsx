import React, { useState } from 'react';
import { Image as ImageIcon, X, Upload, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onUpdateItemImage: (itemId: string, newImageUrl: string) => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  menuItems,
  onUpdateItemImage
}) => {
  const [selectedItemId, setSelectedItemId] = useState<string>(menuItems[0]?.id || '');
  const [customUrl, setCustomUrl] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const currentItem = menuItems.find((i) => i.id === selectedItemId);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    onUpdateItemImage(selectedItemId, customUrl.trim());
    setSuccessMsg(true);
    setCustomUrl('');
    setTimeout(() => setSuccessMsg(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        onUpdateItemImage(selectedItemId, base64String);
        setSuccessMsg(true);
        setTimeout(() => setSuccessMsg(false), 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] text-[#1A2E22] rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-stone-300 relative animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-800 font-bold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#1A2E22] text-[#D4AF37] flex items-center justify-center">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Restaurant Owner Studio</span>
            <h3 className="font-serif text-2xl font-bold">Manage Dish Images</h3>
          </div>
        </div>

        <p className="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
          Easily update any dish photo with your own WhatsApp photos or custom image URLs. Changes apply instantly across the menu and gallery.
        </p>

        {successMsg && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Dish image successfully updated!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Select Dish */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
              Select Dish to Update
            </label>
            <select
              value={selectedItemId}
              onChange={(e) => setSelectedItemId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
            >
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.category})
                </option>
              ))}
            </select>
          </div>

          {/* Current Preview */}
          {currentItem && (
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-200">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-20 h-20 rounded-xl object-cover border border-stone-300"
              />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold">Current Image</span>
                <h4 className="font-serif font-bold text-stone-900 text-base">{currentItem.name}</h4>
                <p className="text-xs text-stone-500">Price: ₦{currentItem.price.toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* Upload File */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
              Upload Photo from Device / WhatsApp
            </label>
            <div className="flex items-center gap-4">
              <label className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border-2 border-dashed border-stone-300 hover:border-[#1A2E22] cursor-pointer text-stone-700 text-sm font-medium transition-colors">
                <Upload className="w-5 h-5 text-[#D4AF37]" />
                <span>Choose Image File...</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Or Paste URL */}
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold">
              Or Paste Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/my-dish-photo.jpg"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-[#1A2E22]"
            />
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-stone-200 text-stone-700 font-medium text-sm"
            >
              Done
            </button>
            <button
              type="submit"
              className="px-7 py-2.5 rounded-full bg-[#1A2E22] text-white font-bold text-sm flex items-center gap-2 shadow"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Update Dish Photo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
