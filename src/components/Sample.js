import { Component } from "react";

class Sample extends Component{

    constructor(props){
        super(props);
        this.state = {favouriteColor : 'red'};
    }
    //If shouldComponentUpdate() returns false button color will not change
    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({favouriteColor : 'yellow'});
    }

    render(){
        return(<div>
            <h3>This Button click change color to {this.state.favouriteColor}</h3>
            <button onClick={this.changeColor}>Change Color to Yellow</button>
        </div>);
    }
}
export default Sample;