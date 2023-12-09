import './style.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {

    if(!newItem){
      alert("Yapılacak birşey girin");
      return;
    }
    const item = {
      id:Math.floor(Math.random()*1000),
      value:newItem,
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("")
  }
  const deleteItem = (id) => {
    const newArray = items.filter(item=> item.id !== id)
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>ToDo List App</h1>

      <input type="text"
      placeholder='Yapılacak iş girin'
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}/>
      
      <button onClick={()=>addItem()}>Ekle</button>
      <ul>
       {items.map((item) => {
        return(
            <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button></li>
          )
      } )}
      </ul>
    </div>
  );
}

export default App;
