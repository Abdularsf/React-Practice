import { useReducer } from "react"

export const ReducerComp = () => {

    const initialState = {
        count:0,
    }
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case "INCREMENT":
    //             return {count:}
        
    //         default:
    //             break;
    //     }
    // }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className=" p-4 h-lvh flex flex-col justify-center items-center ">
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}

