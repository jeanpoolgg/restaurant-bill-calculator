import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import type { OrderItem } from "../types";

type OrdeProps = {
	order: OrderItem[];
	removeItem: (itemId: string) => void;
};

export const OrderContents = ({ order, removeItem }: OrdeProps) => {
	if (order.length === 0) {
		return (
			<div className="bg-base-50 rounded-2xl p-8 text-center shadow-sm glass">
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
	}

	return (
		<div className="lg:col-span-1 space-y-6">
			<div className="bg-base-50 rounded-2xl p-6 shadow-sm glass">
				<h3 className="text-lg font-semibold text-base-content mb-4 flex items-center">
					<ShoppingBag className="h-5 w-5 mr-2" />
					Tu Orden ({order.length})
				</h3>

				<div className="space-y-3 max-h-96 overflow-y-auto">
					{order.map((item) => (
						<div key={item.id}>
							<div className="flex items-center space-x-4 py-4 px-4 bg-white rounded-xl border border-gray-100">
								<img
									src={item.image}
									alt={item.name}
									className="w-12 h-12 object-cover rounded-lg"
								/>

								<div className="flex-1 min-w-0">
									<div className="flex justify-between">
										<h4 className="text-sm font-semibold text-gray-900 truncate">
											{item.name}
										</h4>
										<span className="font-semibold text-gray-900">
											${(item.price * item.quantity).toFixed(2)}
										</span>
									</div>
									<div className="flex items-center  justify-between w-full  space-x-3">
										<div className="inline-flex items-center rounded-full bg-gray-50 px-1 py-0.5">
											<button
												type="button"
												className="flex h-6 w-6 items-center justify-center rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
											>
												<Minus className="h-3 w-3" />
											</button>

											<span className="w-6 text-center text-sm font-semibold text-gray-900">
												{item.quantity}
											</span>

											<button
												type="button"
												className="flex h-6 w-6 items-center justify-center rounded-full text-gray-700 hover:bg-gray-200 transition-colors"
											>
												<Plus className="h-3 w-3" />
											</button>
										</div>
										<div className="tooltip tooltip-left" data-tip="Eliminar">
											<button
												onClick={() => removeItem(item.id)}
												type="button"
												className="p-1 cursor-pointer rounded-lg text-red-500 hover:bg-red-50 transition-colors"
											>
												<Trash2 className="h-4 w-4" />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
