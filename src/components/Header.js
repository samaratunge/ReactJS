import { Component } from "react";

class Header extends Component{
    //First execute constructor and display blue
    constructor(props){
        super(props);
        this.state = {favouriteColor : 'blue'};
    }
    //2nd execute componentDidMount() method and display yellow 1 sec
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor : 'yellow'})
        }, 1000);
    }
    //Then 3rd execute componentDidUpdate() method and display red
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({favouriteColor : 'red'})
        }, 1000);
    }

    render(){
        return(<div>
            <h1>My favourite color is {this.state.favouriteColor}</h1>
        </div>);
    }
}
export default Header;