import './Reply.scss';

const Reply = ({ writer, content, regidate }) => {
  return (
    <>
      <div className="detail-reply-card">
        <div className="detail-reply-writer">{writer}</div>
        <div className="detail-reply-content">{content}</div>
        <div className="detail-reply-date">{regidate}</div>
      </div>
    </>
  );
};

export default Reply;
