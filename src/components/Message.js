import { Component } from "react";

class Message extends Component{

    render (){
        const name = "Udara Samaratunge";
        const {content} = this.props;
        return <h>Message : {content}</h>;
    }
}

export default Message;