
import React, { useEffect, useState } from 'react'
import { TextCompareStore } from '../store/textCompare';


function RenderDiff() {

     const text = TextCompareStore((state) => state.comparisonResult)
     const text2 = TextCompareStore((state) => state.comparisonResult2)
    


 return (
    <div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <pre 
                                    className='text-start' 
                                    id='content'
                                    style={{
                                        wordWrap: 'break-word',
                                        whiteSpace: 'pre-wrap',
                                    }}
                                >
                                    {
                                        text2.data.map((text, i) => {
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
                                                    <span key={i} className={completeClass} style={{whiteSpace: "pre-line"}}> 
                                                        {text.value} 
                                                    </span>
                                                )
                                            }
                                        ) 
                                    }
                                </pre>
                            </div>
                            <div>
                                <pre  
                                    className='text-start' style={{
                                    wordWrap: 'break-word',
                                    whiteSpace: 'break-spaces',
                                }}>
                                        {
                                            text.map((text, i) => {
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
                                                        <span key={i} className={completeClass} > 
                                                            {text.value} 
                                                        </span>
                                                    )
                                                }
                                            ) 
                                        }
                                </pre>
                            </div>
                        </div>
        </div>
  )
}

export default RenderDiff