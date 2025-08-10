import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([]);

	const addItem = (menu: MenuItem) => {
		const itemExist = order.find((orderItem) => orderItem.id === menu.id);

		if (itemExist) {
			const updateOrder = order.map((orderItem) =>
				orderItem.id === menu.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem,
			);
			setOrder(updateOrder);
		} else {
			const newItem = { ...menu, quantity: 1 };
			setOrder([...order, newItem]);
		}
	};

	console.log(order);

	return {
		order,
		addItem,
	};
};
