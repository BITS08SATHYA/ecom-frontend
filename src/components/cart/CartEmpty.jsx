import {MdArrowBack, MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

const CartEmpty = () => {

    return(
        <div className="min-h-[800px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <MdShoppingCart size={80} className="mb-4 text-slate-500" />
                <div className="text-3xl font-bold text-slate-700">
                    Your Cart is Empty!
                </div>
                <div className="text-lg mt-2 text-slate-700">
                    Add Some products to get Started
                </div>
            </div>
            <div className="mt-6">
                <Link to="/"
                className="flex gap-2 items-center text-blue-500 hover:text-blue-600 transition "
                >
                    <MdArrowBack size={24} />
                    <span className="font-medium">Start Shopping </span>
                </Link>
            </div>
        </div>
    )

}

export default CartEmpty;