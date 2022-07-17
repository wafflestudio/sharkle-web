import styles from './CircleIntroduce.module.scss';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import TextEditor from './TextEditor';
const CircleIntroduce = () => {
  const initialHtml = `<div><p></p>
<p></p>
<p style="text-align:center;"><strong>동아리를 간단히 소개해주세요! (초기 샘플 양식 만들어서 넣어놓기) </strong></p>
<p><strong>TODO : 사진 첨부 기능, string type introduction api 필요</strong></p>
<p>1. 동아리 소개</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;와플스튜디오는 개발 동아리입니다.</p>
<p></p>
<p>2. 모집 기간</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;상시모집</p>
<p></p>
<p>3. 자랑거리</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;ㅇㄻㄹㄴㅇㄹㄴ</p>
<p></p>
</div>`; // string으로 관리하면 될듯. 글자수제한은?

  return (
    <div>
      <div className={styles.intro}>소개</div>
      <hr />

      <TextEditor initialHtml={initialHtml} />
    </div>
  );
};

export default CircleIntroduce;
