import { Calculator, Moon, Sun } from "lucide-react";
import { MenuGrid } from "./components/MenuGrid";
import { OrderContents } from "./components/OrderContents";
import { OrderSumary } from "./components/OrderSumary";
import { TipPercentage } from "./components/TipPercentage";
import { useOrder } from "./hooks/useOrder";

function App() {
	const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

	return (
		<div className="bg-base-200 min-h-screen m-0 p-0">
			<div className="max-w-7xl mx-auto pt-6">
				{/* Header */}
				<div className="px-4 mx-auto sm:px-6 lg:px-8 pb-8 pt-4">
					<div className="navbar px-8 rounded-4xl glass bg-base-50 shadow-sm">
						<div className="navbar-start">
							<Calculator className="w-5 h-5" />
							<p className=" ms-2 text-md">Restaurant Bill Calculator</p>
						</div>
						<div className="navbar-end">
							<label className="flex cursor-pointer gap-2 items-center">
								<Sun className="w-5 h-5" />
								<input
									type="checkbox"
									value="dark"
									className="toggle toggle-sm theme-controller"
								/>
								<Moon className="w-5 h-5" />
							</label>
						</div>
					</div>
				</div>

				{/* Main Content */}
				<main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2">
							<MenuGrid addItem={addItem} />
						</div>
						<div className="lg:col-span-1 ">
							<div className="sticky top-6 transition">
								<OrderContents order={order} removeItem={removeItem} />
								{order.length > 0 && (
									<div>
										<TipPercentage setTip={setTip} />
										<OrderSumary
											order={order}
											tip={tip}
											placeOrder={placeOrder}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
