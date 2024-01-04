import { useState } from "react";

function Calculator(){

        const [no1, setNo1] = useState('');
        const [no2, setNo2] = useState('');
        const [result, setResult] = useState('');

        const add = () =>{
            setResult(parseInt(no1) + parseInt(no2));
        }

        const subtract = () => {
            setResult(parseInt(no1) - parseInt(no2));
        }

        const devide = () => {
            (parseInt(no2) === 0)? setResult("Value should be greater than 0."):setResult(parseInt(no1) / parseInt(no2));            
        }
        
        const multiply = () => {
            setResult(parseInt(no1) * parseInt(no2));
        }
    
        return(<div>
            <h3>Enter vlues to Calculate</h3>
            <p>  Enter No1 : <input type="text" value={no1} onChange={(e) => setNo1(e.target.value)}/> <br/> </p>
            <p>  Enter No2 : <input type="text" value={no2} onChange={(e) => setNo2(e.target.value)}/> <br/> </p>
            <button onClick={add}> + </button>
            <button onClick={subtract}> - </button> 
            <button onClick={multiply}> * </button>
            <button onClick={devide}> / </button>           
            <p id="value">Value is : {result} </p>            
        </div>);    
}
export default Calculator;