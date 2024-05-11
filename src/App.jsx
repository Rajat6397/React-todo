import "./App.css";
import { useState } from 'react';

function App(){
  const[input, setInput] = useState("");
  const[list, setList] = useState([]);
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  const handleTask = ()=>{
    setList([...list, input])
    setInput("")
  }
  const handleDelete = (i)=>{
   const filterList = list.filter((elem)=>elem != list[i])
   console.log("filterList", filterList);
   setList(filterList)
  }
  return (
   <div className="App">
    <h2>Grocery Bud</h2>
    <div className="container">
      <div className="input-box">
        <input type="text" value={input} onChange={(e)=>handleInput(e)}/><button onClick={handleTask}>Add Item</button>
      </div>
      <div className="list">
        <ul>
          {list.map((item, i)=><li key={i} onClick={()=>handleDelete(i)}>{item}<img src="https://cdn4.iconfinder.com/data/icons/basic-ui-colour/512/ui-02-512.png" height="2px;"/></li>)}
        </ul>
      </div>
    </div>
   </div>
  );
}
export default App;
