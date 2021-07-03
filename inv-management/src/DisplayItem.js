import React from 'react';

const showItem = (item, index) => {
    return (<tr key={index}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
    </tr>);
}

function DisplayItem(props) {
    return (<div className='container'>
        <div className='row'>
        </div>
        <div className='row'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map(showItem)}
                </tbody>
            </table>
        </div>
    </div>);
}
export default DisplayItem;