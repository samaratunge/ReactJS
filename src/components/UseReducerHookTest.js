import { useReducer } from "react"

const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}
const UseReducerHookTest = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    return (
        <div>
            <p>Count {state.count}</p>
            <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>INCREMENT</button>
            <button onClick={() => { dispatch({ type: 'DECREMENT' }) }}>DECREMENT</button>
            <button onClick={() => { dispatch({ type: 'RESET' }) }}>RESET</button>
        </div>
    );
}
export default UseReducerHookTest;