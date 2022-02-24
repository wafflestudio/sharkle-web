import "./RegisterPage.scss";
const RegisterPage = () => {

    return (
        <div className="registerpage">
            <div className="register-section">
                <h1 className="register-welcome">환영합니다!</h1>
                <div className="register-description">
                    기본 회원 정보를 등록해주세요.
                </div>

                <div className="register-detail-section">
                    <div className="register-detail-block">
                        <label className="register-detail-text">이름</label>
                        <div className="register-detail-input">
                            <div className="register-detail-input-wrapper">
                                <input
                                    className="register-detail-input-inputbox"
                                    placeholder="이름을 입력하세요"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="register-detail-block">
                        <label className="register-detail-text">이메일</label>
                        <div className="register-detail-input">
                            <div className="register-detail-input-wrapper">
                                <input
                                    className="register-detail-input-inputbox"
                                    placeholder="이메일을 입력하세요"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="register-detail-block">
                        <label className="register-detail-text">아이디</label>
                        <div className="register-detail-input">
                            <div className="register-detail-input-wrapper">
                                <input
                                    className="register-detail-input-inputbox"
                                    placeholder="아이디를 입력하세요"

                                />
                            </div>
                        </div>
                    </div>
                    <div className="register-detail-block">
                        <label className="register-detail-text">비밀번호</label>
                        <div className="register-detail-input">
                            <div className="register-detail-input-wrapper">
                                <input
                                    className="register-detail-input-inputbox"
                                    placeholder="비밀번호를 입력하세요"

                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="register-error-section">*/}
                {/*    {registerError === 0*/}
                {/*        ? ""*/}
                {/*        : registerError === 1*/}
                {/*            ? "이름을 입력해주세요."*/}
                {/*            : registerError === 2*/}
                {/*                ? "아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다."*/}
                {/*                : registerError === 3*/}
                {/*                    ? "이미 존재하는 아이디입니다."*/}
                {/*                    : "에러 발생!"}*/}
                {/*</div>*/}

                <div className="register-button-section">
                    <button className="register-btn-cancel">
                        취소
                    </button>
                    <button className="register-btn-complete">
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
