import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_textEditor.scss'


function TextCompareInput() {
  const [value, setValue] = useState('');
//   const [error, setError] = useState()
  return (
    <div
        className="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 h-96"
    >
        <ReactQuill
            theme="snow"
            placeholder='Enter text in here...'
            value={value} 
            onChange={setValue}
            className={"ql-error"} // Add a dynamic class 
        />
        
    </div>
  )
}

export default TextCompareInput