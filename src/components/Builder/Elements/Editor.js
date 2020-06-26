import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ( props ) => {
  console.log(props.content);
  return (
    <>
      <Editor
          id={`tinymce-editor-react-${props.index}`}
          initialValue={props.content.raw}
          init={{
            language: 'pl',
            content_style: 'ul { padding-left: 16px}',
            height: 500,
            menubar: false,
            statusbar: false,
            plugins: [
              'autolink lists link charmap anchor'
            ],
            toolbar:
              'bold italic underline bullist'
          }}
          onEditorChange={props.handleEditorChange}
        />
    </>
    )
}

export default TextEditor;
