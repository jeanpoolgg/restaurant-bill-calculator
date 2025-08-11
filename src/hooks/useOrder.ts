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

	const removeItem = (itemId: MenuItem["id"]) => {
		// const index = order.findIndex((orderItem) => orderItem.id === itemId);

		// if (index !== -1) {
		// 	const updatedOrder = [...order];
		// 	updatedOrder.splice(index, 1);
		// 	setOrder(updatedOrder);
		// }

		setOrder(order.filter((orderItem) => orderItem.id !== itemId));
	};

	return {
		order,
		addItem,
		removeItem,
	};
};
