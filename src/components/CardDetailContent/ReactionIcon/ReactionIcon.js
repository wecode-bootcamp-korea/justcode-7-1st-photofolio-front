import './ReactionIcon.scss';

const ReactionIcon = ({ icon, emotion, count }) => {
  return (
    <>
      <div className="detail-reaction-inner-wrapper">
        <div className="detail-reaction-icon-wrapper">
          <div className="detail-icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="detail-reaction-icon-second-wrapper">
          <div className="detail-reaction-icon-title-wrapper">
            <div className="detail-icon-title">{emotion}</div>
          </div>
          <div className="detail-reaction-icon-count-wrapper">
            <div className="detail-icon-count">{count}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactionIcon;
