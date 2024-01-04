import { useState } from "react";

function FormSubmission() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [car, setCar] = useState('Volvo');
    const [result, setResult] = useState('');

    const handleSubmit = (event) => {        
        event.preventDefault();
        setResult(`Your name is : ${name} and address is: ${address} and car is : ${car}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>This is my First Form</label><br />
                Enter Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
                Enter Address : <textArea value={address} onChange={(e) => setAddress(e.target.value)}></textArea><br />
                Select Car:
                <select value={car} onChange={(e) => setCar(e.target.value)}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <input type="Submit"></input>
                <h3>{result}</h3>
            </form>
        </div>
    );
}
export default FormSubmission;