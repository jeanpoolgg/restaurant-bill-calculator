import { ShoppingBag } from "lucide-react";

export const Cart = () => {
    return (
      <div className="bg-base-5gi0 rounded-2xl p-8 text-center shadow-sm glass">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-base-200 mb-4">
          <ShoppingBag className="h-6 w-6 text-base-content/60" />
        </div>
        <h3 className="text-lg font-semibold text-base-content mb-2">
          Empty cart
        </h3>
        <p className="text-base-content/70">
          Add some dishes to start your order
        </p>
      </div>
    );
  };
  