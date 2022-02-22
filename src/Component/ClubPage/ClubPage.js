import './ClubPage.scss';
import { BiCalendar } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';

const ClubPage = () => {

    return(
        <div className="container">
            <div className="info">
                <div className="info-main">
                    <div className="info-main-thumb">
                        <div className="info-main-thumb-container">
                            <img className="info-main-thumb-img" src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256" alt="temp"/>
                        </div>
                    </div>
                    <div className="info-main-name">
                        <div className="info-main-name-style">
                            와플 스튜디오
                        </div>

                    </div>
                </div>
                <div className="info-sub">
                    <div className="info-sub-recruit">
                        <BiCalendar className="info-sub-recruit-icon"/>
                        <div className="info-sub-recruit-date">
                            22/03/01 ~ 22/03/31
                        </div>
                    </div>
                    <div className="info-sub-tags">
                        <AiFillTags className="info-sub-tags-icon"/>
                        <div className="info-sub-tags-list">
                            #개발 #코딩 #디자이너
                        </div>
                    </div>
                </div>
                <div className="info-util">
                    <div className="info-util-alert">
                        <button className="info-util-alert-btn">
                            알림설정
                        </button>
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