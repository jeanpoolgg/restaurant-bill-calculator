import { ShoppingBag } from "lucide-react";
import { tipOptions } from "../data/tipOptions";

type TipPercentageProps = {
	setTip: (tip: number) => void;
};

export const TipPercentage = ({ setTip }: TipPercentageProps) => {
	return (
		<div className="lg:col-span-1 space-y-6 mt-6">
			<div className="bg-base-50 rounded-2xl p-6 shadow-sm glass">
				<h3 className="text-lg font-semibold text-base-content mb-4 flex items-center">
					<ShoppingBag className="h-5 w-5 mr-2" />
					Tip
				</h3>

				<fieldset>
					<form action="" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						{tipOptions.map((tip) => (
							<label
								key={tip.id}
								htmlFor={tip.id}
								className="relative flex items-center justify-between rounded-xl border border-base-300 bg-base-100
		   px-4 py-3 cursor-pointer hover:shadow-xs"
							>
								<span className="text-sm font-medium text-base-content">
									{tip.label}
								</span>
								<input
									id={tip.id}
									type="radio"
									name="tip"
									value={tip.value}
									onChange={() => setTip(tip.value)}
									className="radio radio-sm"
								/>
							</label>
						))}
					</form>
				</fieldset>
			</div>
		</div>
	);
};
