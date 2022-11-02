import './Tag.scss';

const Tag = ({ tagName }) => {
  return (
    <>
      <span className="detail-tag">#{tagName}</span>
    </>
  );
};

export default Tag;
