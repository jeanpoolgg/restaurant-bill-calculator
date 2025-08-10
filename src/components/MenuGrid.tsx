import { MenuItems } from "../data/db";
import type { MenuItem } from "../types";
import MenuItemCard from "./MenuItemCard";

type MenuItemProps = {
	addItem: (item: MenuItem) => void;
};

export const MenuGrid = ({ addItem }: MenuItemProps) => {
	return (
		<div className="glass bg-base-50 rounded-2xl p-8 text-center shadow-sm">
			<h2 className="text-2xl font-semibold mb-8">Today's Menu </h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{MenuItems.map((item) => (
					<MenuItemCard key={item.id} item={item} addItem={addItem} />
				))}
			</div>
		</div>
	);
};
