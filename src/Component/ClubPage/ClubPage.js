import './ClubPage.scss';

const ClubPage = () => {

    return(
        <div className="container">
            <div className="info">
                <div className="info-main">
                    <div className="info-main-thumb">
                        <div className="info-main-thumb-container">
                            그림공간
                        </div>
                    </div>
                    <div className="info-main-name">
                        동아리 이름공간
                    </div>
                </div>
                <div className="info-sub">
                    <div className="info-sub-recruit">
                        지원박스
                    </div>
                    <div className="info-sub-tags">
                        태그박스
                    </div>
                </div>
                <div className="info-util">
                    <div className="info-util-alert">

                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content-menu">

                </div>
                <div className="content-container">

                </div>
            </div>
        </div>
    )
}

export default ClubPage;