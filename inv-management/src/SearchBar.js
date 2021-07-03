import React from 'react';
import { useState } from 'react';

function SearchBar(props) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");


    const updatedSearch = () => {
        props.setFilters(name, number, type, brand)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <label htmlFor='name-field'>Name</label>
                    <input id='name-field' type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col'>
                    <label htmlFor='number-field'>Quantity</label>
                    <input id='number-field' type='number' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className='col'>
                    <label htmlFor='type-field'>Type</label>
                    <input id='type-field' type='text' className='form-control' value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className='col'>
                    <label htmlFor='brand-field'>Brand</label>
                    <input id='brand-field' type='text' className='form-control' value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col col-4' />
                <button type="button" className='col-4 btn btn-dark' onClick={updatedSearch}>Search</button>
            </div>
        </div>
    );
}
export default SearchBar;