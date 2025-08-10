import { Plus } from "lucide-react";
import type { Product } from "../types";

export default function ProductCard({ image, name, price, rating }: Product) {
	return (
		<article
			className="group relative overflow-hidden transition"
			aria-label={name}
		>
			{/* Imagen */}
			<div className="relative">
				<img
					src={image}
					alt={name}
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
						aria-current={rating === 1}
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="2 star"
						aria-current={rating === 2}
					/>
					<input
						type="radio"
						name="rating-3"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="3 star"
						aria-current={rating === 3}
					/>
					<input
						type="radio"
						name="rating-4"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="4 star"
						aria-current={rating === 4}
					/>
					<input
						type="radio"
						name="rating-5"
						className="mask mask-star-2 bg-yellow-400"
						aria-label="5 star"
						aria-current={rating === 5}
					/>
				</div>
				<h3 className="line-clamp-1 mb-2 text-md font-medium text-base-content">
					{name}
				</h3>

				<div className="flex items-center justify-between text-lg font-semibold text-base-content">
					<p className="flex items-center ">
						<span className="mr-0.5">$</span>
						{typeof price === "number" ? price.toFixed(2) : price}
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
