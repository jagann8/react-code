import React,{Component} from 'react';

class ClassComponent extends Component {

    state = {
        count: 0
    }

    render() {

        return (
            <div>
                <p>the count value is updated {this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
            </div>
        )
    }
}

export default ClassComponent;
