import './ClubPage.scss';
import { BiCalendar, BiSearchAlt2 } from 'react-icons/bi';
import { AiFillTags } from 'react-icons/ai';
import { BsPinAngle } from 'react-icons/bs';
import {useState} from "react";
import QnAItem from "./QnAItem/QnAItem";

const ClubPage = () => {

    const [search, setSearch] = useState("");

    const dummyQnA = [
        { id: 0, title: "타대생도 가입 가능한가요?", date: "2022.03.01", comment: 1 },
        { id: 1, title: "고학번도 가입 가능한가요?", date: "2022.03.01", comment: 1 },
        { id: 2, title: "학기중에 많이 힘든가요?", date: "2022.03.01", comment: 3 },
        { id: 3, title: "성비가 어떻게되나요?", date: "2022.03.01", comment: 5 },
        { id: 4, title: "많이 힘든가요?", date: "2022.03.01", comment: 0 },
        { id: 5, title: "처음하는사람도 괜찮나요?", date: "2022.03.01", comment: 2 },
        { id: 6, title: "활동비가 있나요?", date: "2022.03.01", comment: 1 },
        { id: 7, title: "질문질문", date: "2022.03.01", comment: 8 },
        { id: 8, title: "이것저것 상세한 질문글", date: "2022.03.01", comment: 10 },
    ]

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

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
                    <div className="content-menu-recruit">
                        <span>Recruiting</span>
                    </div>
                    <div className="content-menu-qna">
                        <span>Q&A</span>
                    </div>
                </div>
                <div className="content-container">
                    <div className="content-container-bar">
                        <div className="content-container-bar-title">
                            <BsPinAngle className="content-container-bar-title-icon"/>
                            <div className="content-container-bar-title-title">
                                Q&A
                            </div>
                        </div>
                        <div className="content-container-bar-sort">
                            <div1>
                                최신 순
                            </div1>
                            <div2>
                                오래된 순
                            </div2>
                            <div3>
                                댓글 수
                            </div3>
                            <div4>
                                <span>
                                    ㄱㄴㄷ 수
                                </span>
                            </div4>
                        </div>
                    </div>
                    <div className="content-container-search">
                        <div className="content-container-search-title">
                            검색
                        </div>
                        <input className="content-container-search-input" value={search} onChange={handleSearch}/>
                        <BiSearchAlt2 className="content-container-search-icon"/>
                    </div>
                    <div className="content-container-qna">
                        {dummyQnA.map((item) => (
                            <QnAItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClubPage;