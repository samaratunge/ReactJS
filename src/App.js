import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import Calculator from './components/Calculator';
import ButtonCount from './components/ButtonCount';
import Header from './components/Header';
import Sample from './components/Sample';
import Garage from './components/MapUsage';
import FormSubmission from './components/FormSubmission';
import FormNavigation from './components/FormNavigation';
import EmployeeNavigate from './components/EmployeeNavigate';
import Timer from './components/Timer';
import TestContextHook from './components/TestContextHook';
import UseRefHookTest from './components/UseRefHookTest';
import UseReducerHookTest from './components/UseReducerHookTest';
import UseCallBackHookTest from './components/UseCallBackHookTest';

function App() {
  return (
    <div className="App"> 
      <UseCallBackHookTest/>
      <UseReducerHookTest/> 
      <UseRefHookTest/>
      <TestContextHook/>
      <Timer/>
      <EmployeeNavigate/> 
      <FormNavigation />      
      <FormSubmission />
      <FunctionEvent />
      <Header />
      <Sample />
      <Calculator />
      <ClassEvent />
      <ButtonCount />
      <Message content="This is message Content" />
      <Counter />
      <Profile fName="Udara" lName="Samaratunge">
        <h3>This is the profile of Udara</h3>
      </Profile> 
    </div>
  );
}

export default App;
