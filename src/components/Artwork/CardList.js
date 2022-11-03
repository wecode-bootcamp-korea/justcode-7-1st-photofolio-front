import React, { useState } from 'react';
import Card from './Card';
import './cardList.scss';

function CardList({ filter }) {
  const [data, setData] = useState([]);

  fetch('/data/cardListData.json')
    .then(res => res.json())
    .then(data => setData(data.data));

  return (
    <div className="cardList">
      {data.map((elem, idx) => {
        return <Card key={idx} />;
      })}
    </div>
  );
}

export default CardList;