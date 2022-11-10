import React, { useEffect, useState } from 'react';
import Card from './Card';
import './cardList.scss';

function CardList({ filter }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (document.location.href === 'http://localhost:3000/works') {
      fetch('/data/props2.json')
        .then(res => res.json())
        .then(data => setData(data.worksFeedList));
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="cardList">
      {data.map((elem, idx) => {
        return (
          <div style={{ cursor: 'pointer' }}>
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
          </div>
        );
      })}
    </div>
  );
}

export default CardList;
