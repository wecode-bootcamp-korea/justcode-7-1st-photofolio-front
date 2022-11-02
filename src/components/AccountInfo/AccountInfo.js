import './AccountInfo.scss';

const AccountInfo = () => {
  return (
    <>
      <div className="account-out-wrapper">
        <div className="account-header-wrapper">
          <div className="account-header">계정정보</div>
        </div>
        <div className="account-info-wrapper">
          <div className="account-info-form-wrapper">
            <form className="account-info-form">
              <tr>
                <td>
                  <div className="account-info-title special">로그인ID</div>
                  <div className="account-info-id">tbxl67</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="account-info-not-null">*</div>
                  <div className="account-info-title">이름</div>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="account-info-not-null">*</div>
                  <div className="account-info-title">영문이름</div>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="account-info-not-null">*</div>
                  <div className="account-info-title">이메일</div>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="account-info-not-null">*</div>
                  <div className="account-info-title">국적</div>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td className="account-info-img-part-wrapper">
                  <div className="account-info-title special">
                    프로필 이미지
                  </div>
                  <div className="account-info-img-wrapper">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1246/1246351.png?w=740&t=st=1667231824~exp=1667232424~hmac=19ddad3472728fc0f58e61b40166e12088243b88bca1961ea21993f1930e0d92"
                      alt=""
                    />
                    <div className="account-info-img-part2-wrapper">
                      <div className="account-info-img-explain">
                        프로필 이미지를 등록해 주세요. <br /> 180 x 180 픽셀
                        크기의 이미지를 권장합니다.
                      </div>
                      <button className="account-info-img-upload-btn">
                        이미지 업로드
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              <hr />
              <div className="account-info-contract">
                이용자는 개인정보 수집 및 이용 동의를 거부할 권리가 있으나, 거부
                시 채널 정보 등록이 불가능합니다. <br />
                입력하신 정보(필수 - 이름, 영문이름, 프로필 이미지, 기본 이메일,
                선택 - 국가, 외부공개 이메일)는 그라폴리오 서비스 제공을
                목적으로 수집하며,
                <b> 네이버 회원 탈퇴 혹은 직접 삭제 전까지 보관됩니다.</b>
              </div>
              <div className="account-info-btn-wrapper">
                <button className="account-info-save-btn">동의 및 저장</button>
                <button className="account-info-reset-btn">취소</button>
                <button className="account-info-wdraw-btn">채널삭제</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
