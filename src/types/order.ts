import type { MenuItem } from "./menu";

export type OrderItem = MenuItem & {
	quantity: number;
};
