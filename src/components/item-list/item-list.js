import React, { useState, useEffect } from 'react';
import './item-list.css';

const ItemList = ({setSelectedItemId, getData}) =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(data => {
            setData(data)
        })
    }, [])

const elements = data.map((person) => {
    return (
      <li
        key={person.id}
        onClick={() => setSelectedItemId(person.id)}
        className="list-group-item"
      >
          {person.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{elements}</ul>;
}

export default ItemList;
