import React,{Component} from 'react';
import Todoitems from "./components/Todoitems/Todoitems";
import Additem from "./components/Additems/Additem";
class App extends Component {
  state = {
    items : [
      {id : 1, name:"ZAHHARI", age:25},
      {id : 2, name:"ZAHHARI", age:25},
      {id : 3, name:"ZAHHARI", age:25},
    ]
  }

  deleteItem = (id)=> {
    let items= this.state.items.filter((item)=>{
      return item.id !== id
    });
    this.setState({items});

    // items.splice(id,1);

    // let i = items.findIndex(item => item.id === id);
    // items.splice(i,1);
  }

addItem = (item) =>{
  item.id = Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items});
}

render() {
  return (
    <div className="App container">
      <h1 className= "text-center">Todo List</h1>
      <Todoitems deleteItem = {this.deleteItem} items= {this.state.items} />
      <Additem addItem = {this.addItem} />
    </div>
  );
}
  
}

export default App;
