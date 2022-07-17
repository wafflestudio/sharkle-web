import React, { useEffect, useState } from 'react';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import styles from './CircleIntroduce.module.scss';
import { Editor } from 'react-draft-wysiwyg';

// text editor + html + toggle button
// initialHtml에 string type으로 맨 처음 보여질 text editor 내용을 넣어줌
// 각 게시판마다 다른 api를 사용할 것이기 때문에 이 코드를 다른 컴포넌트에 복붙해서 사용해야 함

// TODO : 사진 업로드 기능, api 연동

const TextEditor = ({ initialHtml }) => {
  const [editMode, setEditMode] = useState(true);

  const onEditClick = () => {
    setEditMode(!editMode);
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const htmlToEditor = initialHtml; // string으로 관리하면 될듯. 글자수제한은?

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  return (
    <>
      {editMode ? (
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={{
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="동아리를 소개해주세요"
          localization={{
            locale: 'ko',
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: editorToHtml }} />
      )}
      <hr />
      <div onClick={onEditClick} className={styles.submit}>
        {editMode ? '작성' : '수정'}
      </div>
    </>
  );
};

export default TextEditor;
