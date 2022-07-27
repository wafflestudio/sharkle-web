import { BsImage, BsPinAngle } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './Introduction.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useSessionContext } from '../../../Context/SessionContext';
import LoginModal from '../../LoginModal/LoginModal';
import { useFunctionContext } from '../../../Functions/Functions';
import { useNavigate, useParams } from 'react-router';
import ClubInfo from '../../ClubSearchPage/ClubInfo';
import { Route } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Parser from 'html-react-parser';
import { toast } from 'react-toastify';

const Introduction = (props) => {
  const { circleId, curBoardId, isLoad } = props;
  const navigate = useNavigate();
  const params = useParams();

  const { isLogin, handleLogout } = useSessionContext();
  const { DummyQnA, PageNum } = useFunctionContext();

  const [clubImage, setClubImage] = useState(null);
  const [article, setArticle] = useState('');
  const [editorData, setEditorData] = useState('');

  const [thumbImgBase64, setThumbImgBase64] = useState(''); // 파일 base64
  const [thumbImgFile, setThumbImgFile] = useState(null); //파일
  const [thumbUrl, setThumbUrl] = useState('');

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(false);

  const handleWrite = () => {
    if (isLogin) {
      setIsWrite(true);
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleImageDelete = () => {
    setClubImage(null);
  };

  const logoImgInput = useRef({});

  const handleThumbnailFile = (event) => {
    // const reader = new FileReader();
    // const formData = new FormData();
    //
    // if (event.target.files[0]) {
    //   reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    //   setThumbImgFile(event.target.files[0]); // 파일 상태 업데이트
    //   console.log(event.target.files[0]);
    //   formData.append('image', event.target.files[0]);
    // }
    //
    // axios
    //   .post(`/api/v1/image`, formData, {
    //     headers: {
    //       Authentication: token,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((res) => {
    //     setThumbUrl(res.data.url);
    //     toast.success('썸네일 업로드에 성공했습니다.', {
    //       autoClose: 3000,
    //     });
    //     reader.onloadend = () => {
    //       // 2. 읽기가 완료되면 아래코드가 실행됩니다.
    //       const base64 = reader.result;
    //       if (base64) {
    //         setThumbImgBase64(base64.toString()); // 파일 base64 상태 업데이트
    //       }
    //     };
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     toast.error('썸네일 업로드에 실패했습니다.', {
    //       autoClose: 3000,
    //     });
    //     setThumbImgBase64('');
    //     setThumbImgFile(null);
    //     setThumbUrl('');
    //     console.log(error);
    //   });
  };

  const handleThumbnail = (e) => {
    e.preventDefault();
    logoImgInput.current.click();
  };

  const handleCancel = () => {
    setIsWrite(false);
  };

  const handleComplete = () => {
    setArticle(editorData);
    setIsWrite(false);
    console.log(isWrite);
  };

  // useEffect(() => {
  //   if (isLoad) {
  //     axios
  //       .get(`api/v1/circle/${circleId}/board/${curBoardId}/article/`)
  //       .then((response) => {
  //         setQnAList(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [isLoad, isWrite]);

  return (
    <div>
      <div className={styles.board_title_wrapper}>
        <div className={styles.board_title}>
          <BsPinAngle className={styles.pin} />
          <div className={styles.title}>{params.boardName}</div>
        </div>
      </div>

      {!isWrite ? (
        <>
          <div className={styles.board_contents}>
            <div className={styles.board_club_image_wrapper}>
              <img
                className={styles.board_club_image}
                src="https://wafflestudio.com/images/icon_header.svg?auto=format&fit=max&w=256"
                alt="대표 이미지"
              />
            </div>
            <div className={styles.board_article}>{Parser(article)}</div>
          </div>

          <div className={styles.board_util}>
            <button className={styles.write_button} onClick={handleWrite}>
              글쓰기
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.board_contents}>
            <div className={styles.board_club_image_title}>대표 이미지</div>
            {clubImage != null ? (
              <>
                <img className={styles.board_club_image} src={clubImage} alt="대표 이미지" />
                <button className={styles.image_delete_button} onClick={handleImageDelete}>
                  이미지 삭제
                </button>
              </>
            ) : (
              <>
                {/*<div className={styles.board_club_image_upload}>이미지 업로드</div>*/}
                {/*<input className={styles.board_club_image_upload} type="file" name="file" onChange={null} />*/}

                <div className={styles.board_club_image_box}>
                  {thumbImgFile === null ? (
                    <BsImage className={styles.club_image_icon} />
                  ) : (
                    <img src={thumbImgBase64} alt={'썸네일'} className={styles.club_image_img} />
                  )}
                  <button className={styles.upload_btn} onClick={handleThumbnail}>
                    업로드
                  </button>
                  <input
                    className={styles.upload_input}
                    type="file"
                    accept="image/*"
                    ref={logoImgInput}
                    onChange={handleThumbnailFile}
                    name="thumbImgFile"
                    id="thumbImgFile"
                  />
                </div>
              </>
            )}

            <div className={styles.board_article_title}>소개 글</div>
            <div className={styles.board_editor}>
              <CKEditor
                editor={ClassicEditor}
                data={article}
                config={{
                  removePlugins: ['EasyImage', 'ImageUpload', 'MediaEmbed'],
                }}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);

                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
          </div>

          <div className={styles.board_util}>
            <button className={styles.cancel_button} onClick={handleCancel}>
              취소
            </button>
            <button className={styles.complete_button} onClick={handleComplete}>
              완료
            </button>
          </div>
        </>
      )}
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} />
    </div>
  );
};

export default Introduction;
