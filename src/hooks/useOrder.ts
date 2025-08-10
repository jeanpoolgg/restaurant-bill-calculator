import { useState } from "react";
import type { OrderItem, Product } from "../types";

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

	const addItem = (product: Product) => {
		const itemExist = order.find((orderItem) => orderItem.id === product.id);

		if (itemExist) {
			const updateOrder = order.map((orderItem) =>
				orderItem.id === product.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem,
			);
			setOrder(updateOrder);
		} else {
			const newItem = { ...product, quantity: 1 };
			setOrder([...order, newItem]);
		}
	};

	console.log(order);

	return {
		order,
		addItem,
	};
};
