import React, { Component } from 'react';
class One extends Component {
    state = {count:0,name:"na",color:"blue" }
    myClick(){
        this.setState({
            count:this.state.count+1
        } )
        this.setState({
            color:"orange"
        })
    }
    render() { 
        const {name}=this.state;
        const {channel}=this.props;
        
        return ( 
            <div>
            <p style={{color:this.state.color}}>Hi i'm gon{name} {channel}</p>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.myClick()}>Click</button>
            </div>
         );
    }
}
/*function One(props){
    return(
        <p>{props.name}</p>
    )

}*/
 
export default One;