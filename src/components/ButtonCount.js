import { useState, useEffect } from "react";

function ButtonCount() {

    const [count, setState] = useState(0);

    //Each time when count changes the useEffect runs
    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    });

    const increment = () => {
        setState(count + 1);        
    };   

    return (<div>
        Button count change:
        <button onClick={increment}>Click count = {count}</button>
    </div>
    );
};

export default ButtonCount;