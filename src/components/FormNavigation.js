import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate, useLocation } from 'react-router-dom';

const FormComponent = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //Pass parameters to another form use {state:{name}} 
        navigate('/another-page', {state:{name}});
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Something' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
const AnotherPageComponent = () => {
    //USe the life Cycle method useLocation() to access parameter fro the navigated page
    const location = useLocation();
    return <h2> You entered : {location.state.name} </h2>
}
const FormNavigation = () => {
    return (       
        <Router>
            <div><ul> <li> <Link to="/">Form</Link></li></ul><hr />
                <Routes> 
                    <Route path="/" Component={FormComponent}/>
                    <Route path="/another-page" Component={AnotherPageComponent}/>
                </Routes>
            </div>
        </Router>
    );
}
export default FormNavigation;
