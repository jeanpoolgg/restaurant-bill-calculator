import { Receipt } from "lucide-react";
import { useMemo } from "react";
import type { OrderItem } from "../types";

type OrderSumaryProps = {
	order: OrderItem[];
};

export const OrderSumary = ({ order }: OrderSumaryProps) => {
	const subTotalAmount = useMemo(
		() => order.reduce((total, item) => total + item.quantity * item.price, 0),
		[order],
	);

	return (
		<div className="bg-base-50 mt-6 rounded-2xl p-6 shadow-sm glass">
			<div className="flex items-center space-x-2 mb-6">
				<Receipt className="h-5 w-5 " />
				<h3 className="text-lg font-semibold text-base-content">
					Resumen de Orden
				</h3>
			</div>

			<div className="space-y-3 mb-6 text-base-content">
				<div className="flex justify-between">
					<span>Subtotal</span>
					<span>${subTotalAmount.toFixed(2)}</span>
				</div>

				<div className="flex justify-between">
					<span>Propina</span>
					<span>$10</span>
				</div>

				<div className="border-t border-gray-200 pt-3">
					<div className="flex justify-between text-lg font-semibold text-base-content">
						<span>Total</span>
						<span>${subTotalAmount.toFixed(2)}</span>
					</div>
				</div>
			</div>

			<button
				type="button"
				className="w-full cursor-pointer text-base-content bg-base-300 hover:bg-base-300 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
			>
				Confirmar Orden
			</button>
		</div>
	);
};
