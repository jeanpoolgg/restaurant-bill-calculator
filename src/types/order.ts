import type { CartItem } from "./cartItem";

export type Order = {
	id: string;
	items: CartItem[];
	subtotal: number;
	tipPercentage: number;
	tipAmount: number;
	total: number;
	timestamp: Date;
};
