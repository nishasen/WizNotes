import ReactQuill, {useState} from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = (props) => {
  const { value, setValue } = props;
  
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  };
 
  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]
  return (
    <div>
      <ReactQuill
        theme='snow'
        placeholder="Add a note"
        value={value}
        onChange={setValue}
        style={{minHeight: '300px'}}
        formats={formats}
        modules={modules}
        {...props}
      />
    </div>
  );
}

export { Editor };