import React from "react";

class App extends React.Component {
  state = {
    count : 0,
  };

  constructor(props){
    super(props);
    console.log('Hello');
  }

  componentDidMount(){
    console.log('Component rendered');
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye, cruel world");
    alert("GoodBye~!")
  }
  

  add = ()=>{
    this.setState(current=>({
      count: current.count+1
    }));
  }

  minus = ()=>{
    this.setState(current=>({
      count: current.count-1
    }));
  }

  render(){
    console.log('Render');
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
}

export default App;
