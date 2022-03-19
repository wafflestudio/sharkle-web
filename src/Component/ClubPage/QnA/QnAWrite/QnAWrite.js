import { Editor } from '@toast-ui/react-editor';
//npm install --save @toast-ui/editor  # Latest Version

import { createRef, useState } from 'react';

const QnAWrite = () => {
  const titleRef = createRef();
  const editorRef = createRef();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState([]);
  const [tagId, setTagId] = useState(0);
  const [imgTag, setImgTag] = useState([]);

  const onChangeEditorTextHandler = () => {
    setContents(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <div>
      <Editor
        previewStyle="vertical"
        height="75vh"
        initialEditType="markdown"
        placeholder="내용을 입력하세요."
        ref={editorRef}
        onChange={onChangeEditorTextHandler}
      />
    </div>
  );
};

export default QnAWrite;
