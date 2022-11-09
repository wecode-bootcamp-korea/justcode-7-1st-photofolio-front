import React, { useEffect, useState } from 'react';
import Card from './Card';
import './cardList.scss';

function CardList({ filter }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/feeds/list')
      .then(res => res.json())
      .then(data => setData(data.feedsList));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="cardList">
      {data.map((elem, idx) => {
        return (
          <Card
            key={idx}
            id={elem.id}
            nickname={elem.nickname}
            profile_image={elem.profile_image}
            img_url={elem.img_url}
            title={elem.title}
            view_count={elem.view_count}
            created_at={elem.created_at}
          />
        );
      })}
    </div>
  );
}

export default CardList;
