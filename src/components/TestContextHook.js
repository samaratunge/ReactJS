import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const TestContextHook = () => {
    const [user, setUser] = useState('Udara');
    return (
        <div>
            <UserContext.Provider value={user}>
                <h3> Hello {user} from TestContextHook!!!</h3>
                <Component2/>
            </UserContext.Provider>
        </div>
    );
}
const Component2 = () => {
    return (
        <> <h3>Hello  Component2</h3>
            <Component3 />
        </>
    );
}
const Component3 = () => {
    return (
        <>  <h3>Hello Component 3</h3>
            <Component4 />
        </>
    );
}
const Component4 = () => {
    const user = useContext(UserContext);
    return (
        <>  <h3>Hello Component 4</h3>
            <h3>{`Hello ${user} again !!!`}</h3>
        </>
    );
}
export default TestContextHook;