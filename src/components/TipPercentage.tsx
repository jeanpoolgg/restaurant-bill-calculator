import { ShoppingBag } from "lucide-react";

export const TipPercentage = () => {
	return (
		<div className="lg:col-span-1 space-y-6 mt-6">
			<div className="bg-base-50 rounded-2xl p-6 shadow-sm glass">
				<h3 className="text-lg font-semibold text-base-content mb-4 flex items-center">
					<ShoppingBag className="h-5 w-5 mr-2" />
					Tip
				</h3>

				<fieldset className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					<label
						className="relative flex items-center justify-between rounded-xl border border-base-300 bg-base-100
               px-4 py-3 cursor-pointer hover:shadow-xs"
					>
						<span className="text-sm font-medium text-base-content">10%</span>
						<input
							type="radio"
							name="tip"
							value="10"
							className="radio radio-sm"
						/>
					</label>

					<label
						className="relative flex items-center justify-between rounded-xl border border-base-300 bg-base-100
               px-4 py-3 cursor-pointer hover:shadow-xs"
					>
						<span className="text-sm font-medium text-base-content">20%</span>
						<input
							type="radio"
							name="tip"
							value="20"
							className="radio radio-sm"
							checked
						/>
					</label>

					<label
						className="relative flex items-center justify-between rounded-xl border border-base-300 bg-base-100
               px-4 py-3 cursor-pointer hover:shadow-xs"
					>
						<span className="text-sm font-medium text-base-content">30%</span>
						<input
							type="radio"
							name="tip"
							value="30"
							className="radio radio-sm"
						/>
					</label>
				</fieldset>
			</div>
		</div>
	);
};
