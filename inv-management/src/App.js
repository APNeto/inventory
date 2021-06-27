import './App.css';
import SearchBar from './SearchBar';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const updateSearch = (name, number, type, brand) => {
    setName(name);
    setNumber(number);
    setType(type);
    setBrand(brand);
  }

  return (
    <div className="App">
      <SearchBar setFilters={updateSearch} />
      <p>D'Inventory</p>
      <p>{name}</p>
      <ButtonState ></ButtonState>
    </div>
  );
}
export default App;
