import React,{Component} from "react";

import Counter from "./Hooks/Counter";
// import './style.css'
class App extends Component{

  state={
    mount:true
  }

  this.componentMount(){
      setMount(true);
  }
 componentUnMount(){
      setMount(false);    
  }
  render(){
    return (
      <div className="container-seat-item">
        <button onClick={componentMount} disabled={mount}>Mount</button>
        <button onClick={componentUnMount} disabled={setMount}>UnMount</button>
        <Counter/>
      </div>
    );
  }
 
}

export default App;
