import React from 'react';
import {useState} from 'react';

function SearchBar(props) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");


    const updatedSearch = () => {
        props.setFilters(name, number, type, brand)
    }

    return (
       <form>
           <label htmlFor='name-field'>Name</label>
           <input id='name-field' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
           <label htmlFor='number-field'>Quantity</label>
           <input id='number-field' type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
           <label htmlFor='type-field'>Type</label>
           <input id='type-field' type='text' value={type} onChange={(e) => setType(e.target.value)}/>
           <label htmlFor='brand-field'>Brand</label>
           <input id='brand-field' type='text' value={brand} onChange={(e) => setBrand(e.target.value)}/>
           <button type="button" onClick={updatedSearch}>Search</button>
       </form>
    );
}
export default SearchBar;