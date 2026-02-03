
import React from 'react';

interface MenuItem {
  name: string;
  price?: string;
}

const coffeeItems: MenuItem[] = [
  { name: 'Espresso / Ristretto' },
  { name: 'Flat White / Latte' },
  { name: 'Cappuccino' },
  { name: 'Long Black' },
  { name: 'Piccolo / Macchiato' },
];

const coldItems: MenuItem[] = [
  { name: 'Iced Latte' },
  { name: 'Iced Long Black' },
  { name: 'Cold Brew' },
  { name: 'Fresh Juice Selection' },
];

const snackItems: MenuItem[] = [
  { name: 'Fresh Croissants' },
  { name: 'Daily Muffins' },
  { name: 'Toasted Sourdough' },
  { name: 'Seasonal Treats' },
];

export const Menu: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-stone-900 font-serif mb-4">Simple & Fresh</h2>
        <p className="text-stone-500 max-w-md mx-auto">Focused on the essentials, made fresh every morning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Hot Coffee */}
        <div>
          <h3 className="text-xl font-serif text-stone-800 border-b border-stone-200 pb-4 mb-6 tracking-wide uppercase text-sm font-semibold">Hot Coffee</h3>
          <div className="space-y-4">
            {coffeeItems.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <span className="text-stone-900">{item.name}</span>
                <div className="flex-grow border-b border-stone-100 mx-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cold Drinks */}
        <div>
          <h3 className="text-xl font-serif text-stone-800 border-b border-stone-200 pb-4 mb-6 tracking-wide uppercase text-sm font-semibold">Chilled</h3>
          <div className="space-y-4">
            {coldItems.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <span className="text-stone-900">{item.name}</span>
                <div className="flex-grow border-b border-stone-100 mx-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Food */}
        <div>
          <h3 className="text-xl font-serif text-stone-800 border-b border-stone-200 pb-4 mb-6 tracking-wide uppercase text-sm font-semibold">Daily Pastries</h3>
          <div className="space-y-4">
            {snackItems.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <span className="text-stone-900">{item.name}</span>
                <div className="flex-grow border-b border-stone-100 mx-2"></div>
              </div>
            ))}
          </div>
          <div className="bg-stone-800 p-4 text-white mt-8 text-xs italic opacity-80">
            Check our cabinet for daily specials. Prices start from $4.50.
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase">All items available for takeaway. Milk alternatives available.</p>
      </div>
    </div>
  );
};
