import { products } from "../data/products";
import { useOrder } from "../hooks/useOrder";
import ProductCard from "./ProductCard";

export const ProductGrid = () => {
	const { addItem } = useOrder();
	return (
		<div className="glass bg-base-50 rounded-2xl p-8 text-center shadow-sm">
			<h2 className="text-2xl font-semibold mb-8">Today's Menu </h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} addItem={addItem} />
				))}
			</div>
		</div>
	);
};
