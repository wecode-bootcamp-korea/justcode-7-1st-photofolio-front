import './Reply.scss';

const Reply = ({ user_id, writer, comment, created_at }) => {
  return (
    <>
      <div className="detail-reply-card">
        <div className="detail-reply-writer">{writer}</div>
        <div className="detail-reply-content">{comment}</div>
        <div className="detail-reply-date">{created_at}</div>
      </div>
    </>
  );
};

export default Reply;
