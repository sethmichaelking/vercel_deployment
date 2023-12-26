import TextCompareInput from './TextCompareInput'
import { Button, FloatingLabel } from 'flowbite-react';
import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './_textEditor.scss'
import { useTextCompareStore } from '../store/textCompare';
import RenderDiff from './RenderDiff';
function Main() {


  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [disabled, setDisabled] = useState(false)
  
  const addText = useTextCompareStore((state) => state.compareText);


  return (
    <div>
        <div class="@container">
            <main className="p-4 md:ml-64 h-screen pt-20" style={{
                paddingRight: '3rem'

            }}>
                    <div style={{
                        marginBottom: '15px'
                    }}>
                        <h2 style={{
                            textAlign: 'initial',
                            fontFamily: 'ui-sans-serif, system-ui, -apple-system',
                            fontSize: '25px',
                            marginTop: 0
                        }}> Text Compare</h2>
                    </div>
                    <RenderDiff/>
                    <div className="grid grid-cols-2 gap-4 mb-4">
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
                        <div
                            className="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 h-96"
                        >
                            <ReactQuill
                                theme="snow"
                                placeholder='Enter text in here...'
                                value={value2}
                                onChange={setValue2}
                                className={"ql-error"} // Add a dynamic class 
                            />
                        </div>
                    </div>
                    <div style={{margin: '0 auto'}}>
                        <div style={{float: 'left'}}>
                            <div className="max-w-md bg-white">
                                <div className="mb-1 block">
                                    <FloatingLabel variant="outlined" label="Name your file" />
                                </div>
                            </div>
                        </div>
                        <div style={{float: 'right'}}>
                            <Button onClick={()=> addText(value, value2)} disabled={value.length !== 0 && value2.length !== 0 ? false : true} color="blue">Compare</Button>
                        </div>
                    </div>
                </main>
        </div>
    </div>
  )
}

export default Main