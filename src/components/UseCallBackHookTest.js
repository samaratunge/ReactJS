import { useCallback, useState } from "react";

const Button = ({myClick, myText}) =>{
    console.log(`Renderring ${myText}`);
    return <button onClick={myClick}>{myText}</button>
}

const UseCallBackHookTest = () =>{

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }
    // Wrap the increment function using useCallback
    const memorizedIncrement = useCallback(increment, [count]);

    return (
        <div>
            <p>Use call back Count : {count}</p>
            <Button myClick={memorizedIncrement} myText="Increment" />
        </div>
    );
}
export default UseCallBackHookTest;