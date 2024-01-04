import { Component} from "react";
import { useState } from "react";

class classEvent extends Component{

    state = {
        count: 0
    };

    incremen = () =>{
        this.setState({
            count : this.state.count + 1
        })
    };

    //Display document header add load time but count change will not display
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`;
    }
    //This will update each time when count change and 
    componentDidUpdate(){
        document.title = `Clicked ${this.state.count} times`;
    }
    
    render(){        
        return(
        <div>
                Class Event Component
                <button onClick={this.incremen}>Click {this.state.count} Class Event Button</button>
        </div>
        );
    }
}

export default classEvent;