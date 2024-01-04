import { useEffect, useState } from "react";

const Timer = () =>{
    const [count, setCount] = useState(0);
    //Look at nested functions usage
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },[]);
    return(
        <div>
            <h1>The Timer Count = {count}</h1>
        </div>
    );
}
export default Timer;