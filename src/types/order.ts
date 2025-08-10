import type { Product } from "./product";

export type OrderItem = Product & {
	quantity: number;
};
