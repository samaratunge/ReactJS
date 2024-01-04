import { useState } from "react";

function FunctionEvent(){

    const [result, setResult] = useState('');

    const handleClick = (no1, no2) => {setResult(`You passed = ${no1}  and  ${no2}`)}

    return(
    <div>
        Functional components <br/>
        <button onClick={() => handleClick(10, 20)}>Click Me</button><br/>
        Result is {result}
    </div>
    );    
}
export default FunctionEvent;