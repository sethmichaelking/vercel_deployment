import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextCompareInput() {
  const [value, setValue] = useState('');

  return (
    <div
        className="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 h-96"
    >
        <ReactQuill
            theme="snow"
            placeholder='Enter text in here...'
            value={value} 
            onChange={setValue}
            // style={{
            //     '.qlContainer.qlSnow': {
            //         border: 'none',
            //         boxsizing: 'border-box',
            //         padding: '8px'
            //     },           
            //   }}
        />
    </div>
  )
}

export default TextCompareInput