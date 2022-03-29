
import React,{Component} from 'react'

class Counter extends Component{

    constructor(props){
        console.log("Constructor");
        super(props);
        this.state={
            counter:1
        }
        this.handleIncreament=this.handleIncreament.bind(this);
        this.handleDecreament=this.handleDecreament.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount");
        console.log("-".repeat(60));
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        console.log("-".repeat(60));
    }
    componentWillUnmount(){
        console.log("ComponentWillMount");
        console.log("-".repeat(60));
    }
    handleIncreament(){
        this.setState({
            counter:this.state.counter+1
        })
    }
    handleDecreament(){
        this.setState({
            counter:this.state.counter-1
        })
    }
    render(){
        console.log("Render");
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncreament}>plus</button>
                <button onClick={this.handleDecreament}>minus</button>
            </div>
        )
    }
}
export default Counter;

