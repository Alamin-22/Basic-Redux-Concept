import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../../redux/features/counter/counterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="">
                <div className="space-x-2">
                    <button
                        className="px-3 py-1 rounded-lg bg-red-400 text-white active:scale-95"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <span className="text-xl px-3 py-2 bg-gray-200 text-gray-700 rounded-full">{count}</span>
                    <button className="px-3 py-1 rounded-lg bg-green-500 text-white active:scale-95"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                </div>
                <br />
                <div className="space-x-2">
                    <button className=" px-3 py-1 rounded-lg bg-green-500 text-white active:scale-95"
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(2))}
                    >
                        Increment By 2
                    </button>
                    <button className="px-3 py-1 rounded-lg bg-red-500 text-white active:scale-95"
                        aria-label="Increment value"
                        onClick={() => dispatch(decrementByAmount(2))}
                    >
                        Decrement By 2
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Counter;