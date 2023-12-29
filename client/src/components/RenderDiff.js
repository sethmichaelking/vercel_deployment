
import React, { useEffect } from 'react'
import { TextCompareStore } from '../store/textCompare';
var CodeMirror = require('react-codemirror');


function RenderDiff() {

 //get information from the store
 //combine the text into removed/added and color the text 
  const text = TextCompareStore((state) => state.comparisonResult)
  console.log('the text', text)
 return (
    <div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <div className='text-start' style={{
                                    wordWrap: 'break-word'
                                }}>
                                    fefefef
                                {/* {text.map((text) => {
                                    let textColor = 'text-stone-300	'
                                    let strikeThrough = ''
                                    if (text.removed) {
                                        textColor = 'text-pink-600	'
                                        strikeThrough = 'line-through'
                                    } 
                                    if (text.added){
                                        textColor = 'text-cyan-400	'
                                    }
                                    let completeClass = textColor + strikeThrough
                                    return (
                                        // <textarea cols="50" rows="10" class="numbered">
                                            <text className={completeClass}> 
                                                {text.value} 
                                            </text>
                                        // </textarea>
                                        )
                                    }
                                )} */}
                                </div>
                            </div>
                            <div>
                                <div className='text-start' style={{
                                    wordWrap: 'break-word'
                                }}>
                                {text.map((text) => {
                                    let textColor = 'text-stone-300	'
                                    let strikeThrough = ''
                                    if (text.removed) {
                                        textColor = 'text-pink-600	'
                                        strikeThrough = 'line-through'
                                    } 
                                    if (text.added){
                                        textColor = 'text-cyan-400	'
                                    }
                                    let completeClass = textColor + strikeThrough
                                    return (
                                        // <textarea cols="50" rows="10" class="numbered">
                                            <text className={completeClass}> 
                                                {text.value} 
                                            </text>
                                        // </textarea>
                                        )
                                    }
                                )}
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default RenderDiff