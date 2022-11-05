import './DeleteModal.scss';

const DeleteModal = ({ setModalOpen }) => {
  // 모달창 off
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="delete-modal-wrapper">
        <div className="delete-modal-title">채널 삭제를 하면,</div>
        <p className="delete-modal-content">
          <div className="delete-modal-content-each-wrapper">
            회원님의 작품과 큐레이션 등 모든 정보가 삭제되며 복구할 수 없습니다.
            <br />
          </div>
          <div className="delete-modal-content-each-wrapper">
            또한 다른 사람에게 큐레이션된 작품, 사람들과 이야기 나눈 댓글도 모두
            삭제됩니다. <br />
          </div>
          <div className="delete-modal-content-each-wrapper">
            단, 콜라보레이션에 당선된 작품은 별도로 보관됩니다. <br />
          </div>
          <div className="delete-modal-content-each-wrapper">
            외부로 공유된 회원님의 프로필 페이지와 작품 상세 페이지에 접속할 수
            없습니다.
            <br />
          </div>
          <div className="delete-modal-content-each-wrapper">
            콘텐츠샵 판매자로 가입되어 있는 경우, 먼저 판매자 탈퇴가 되어야
            포토폴리오 채널 삭제가 가능합니다.
            <br />
          </div>
          <div className="delete-modal-content-each-wrapper final">
            ​후원 창작자센터에 가입되어 있는 경우, 먼저 창작자센터에서 탈퇴가
            되어야 포토폴리오 채널 삭제가 가능합니다
          </div>
        </p>
        <div className="delete-modal-btn-wrapper">
          <button className="delete-modal-delete-btn">채널 삭제</button>
          <button className="delete-modal-cancel-btn" onClick={closeModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
