import { ShoppingBag } from "lucide-react"

export const Cart = () => {
    return (
        <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
                <ShoppingBag className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Carrito vacío
            </h3>
            <p className="text-gray-500">
                Agrega algunos platos para comenzar tu orden
            </p>
        </div>
    )
}
