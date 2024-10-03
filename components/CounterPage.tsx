'use client'

import { setCounterDecrementCount, setCounterIncrementCount, setCounterEmptyCount } from '@/libs/features/counter/CounterSlice'
import { useAppDispatch, useAppSelector } from '@/libs/Hooks'

const CounterPage = () => {
    const dispatch = useAppDispatch()

    const count = useAppSelector((state) => state.CounterSlice.count)

    const incrementCount = () => {
        dispatch(setCounterIncrementCount())
    }

    const decrementCount = () => {
        dispatch(setCounterDecrementCount())
    }

    const emptyCount = () => {
        dispatch(setCounterEmptyCount())
    }

    return (
        <div className="w-full min-h-screen flex flex-col gap-16 p-16 items-center justify-start">
            <h1 className="text-5xl">Counter App</h1>

            <p className="text-lg">
                Count: {count}
            </p>
            <div className="w-full flex gap-8 items-center justify-center">
                <button
                    className="btn-green"
                    onClick={() => incrementCount()}
                >
                    Increment Count
                </button>
                <button
                    className="btn-rose"
                    onClick={() => decrementCount()}
                >
                    Decrement Count
                </button>
                <button
                    className="btn-red"
                    onClick={() => emptyCount()}
                >
                    Empty Count
                </button>
            </div>
        </div>
    )
}

export default CounterPage