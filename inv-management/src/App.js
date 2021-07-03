import './App.css';
import SearchBar from './SearchBar';
import AddItem from './AddItem';
import DisplayItem from './DisplayItem';
import { PropTypes } from 'prop-types';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const [data, setData] = useState({ items: [] });

  const updateSearch = (name, number, type, brand) => {
    setName(name);
    setNumber(number);
    setType(type);
    setBrand(brand);
  }

  const addItemToData = (item) => {
    let currentItems = data['items']
    currentItems.push(item)
    setData({ items: currentItems })
    console.log(data)
  }
  return (
    <div className="container">
      <div className='row mt-3'>
        <SearchBar setFilters={updateSearch} />
      </div>
      <div className='row mt-3'>
        <DisplayItem items={data.items} />
      </div>
      <div className='row mt-3'>
        <AddItem addItem={addItemToData} />
      </div>
      <p>D'Inventory</p>
      <p>{name}</p>

      <ButtonState ></ButtonState>
    </div>
  );
}


function ButtonState() {
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(0)

  const updateTitle = () => {
    setTitle("Ther's a title in here")
  }
  const updateCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>Text: {title}</p>
      <p>Counter: {count}</p>
      <button onClick={updateTitle}>Update Title</button>
      <button onClick={updateCount}>Update Counter</button>
    </div>
  )
}
export default App;
