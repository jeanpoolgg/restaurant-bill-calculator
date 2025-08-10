import { Plus } from "lucide-react";
import type { Product } from "../types";

type ProductCardProps = {
	product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<article
			className="group relative overflow-hidden transition"
			aria-label={product.name}
		>
			{/* Imagen */}
			<div className="relative">
				<img
					src={product.image}
					alt={product.name}
					className="h-48 w-full object-cover rounded-xl"
					loading="lazy"
				/>
			</div>

			{/* Info */}
			<div className="space-y-1 pb-3 pt-1 text-left">
				<div className="rating rating-xs">
					<input
						type="radio"
						name="rating-1"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="1 star"
						aria-current={product.rating === 1}
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="2 star"
						aria-current={product.rating === 2}
					/>
					<input
						type="radio"
						name="rating-3"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="3 star"
						aria-current={product.rating === 3}
					/>
					<input
						type="radio"
						name="rating-4"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="4 star"
						aria-current={product.rating === 4}
					/>
					<input
						type="radio"
						name="rating-5"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="5 star"
						aria-current={product.rating === 5}
					/>
				</div>
				<h3 className="line-clamp-1 mb-2 text-md font-medium text-base-content">
					{product.name}
				</h3>

				<div className="flex items-center justify-between text-lg font-semibold text-base-content">
					<p className="flex items-center ">
						<span className="mr-0.5">$</span>
						{typeof product.price === "number"
							? product.price.toFixed(2)
							: product.price}
					</p>

					<button
						type="button"
						className="btn btn-sm btn-circle bg-base-100 dark:bg-white dark:text-black dark:border-gray-400 hover:bg-base-300"
					>
						<Plus className="w-4 h-4 " />
					</button>
				</div>
			</div>
		</article>
	);
}
