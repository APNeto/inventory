import React from 'react';

const showItem = (item, index) => {
    return (<div key={index}>
        <p>Name: {item.name}</p>
        <p>Price: {item.price}</p>
        <p>Type: {item.type}</p>
        <p>Brand: {item.brand}</p>
    </div>);
}

function DisplayItem(props) {
    return (<div>
        {props.items.map(showItem)}
    </div>);
}
export default DisplayItem;