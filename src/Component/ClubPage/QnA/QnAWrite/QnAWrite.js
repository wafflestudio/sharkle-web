import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

//npm install --save @toast-ui/editor  # Latest Version

import { createRef, useEffect, useState } from 'react';

import './QnAWrite.scss';

const QnAWrite = (props) => {
  const titleRef = createRef();
  const editorRef = createRef();

  const { setContentType } = props;

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const [tagId, setTagId] = useState(0);
  const [imgTag, setImgTag] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCancle = () => {
    setContentType('list');
  };
  const handlePost = () => {
    window.alert(contents);
  };
  const onChangeEditorTextHandler = () => {
    setContents(editorRef.current.getInstance().getMarkdown());
  };

  useEffect(() => {
    if (editorRef.current) {
    }
    return () => {};
  }, [editorRef]);

  return (
    <div className="qna-write-wrap">
      <textarea
        className="title-style"
        placeholder="제목을 입력하세요."
        ref={titleRef}
        value={title}
        onChange={handleTitle}
      />
      <Editor
        previewStyle="vertical"
        height="43vh"
        width="80vh"
        initialEditType="markdown"
        placeholder="내용을 입력하세요."
        ref={editorRef}
        onChange={onChangeEditorTextHandler}
      />
      <button variant="primary" type="submit" className="submitBtn" onClick={handlePost}>
        Post
      </button>
      <button variant="primary" className="cancelBtn" onClick={handleCancle}>
        Cancel
      </button>
    </div>
  );
};

export default QnAWrite;
