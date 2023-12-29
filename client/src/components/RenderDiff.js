
import React, { useEffect } from 'react'
import { TextCompareStore } from '../store/textCompare';


function RenderDiff() {
     const text = TextCompareStore((state) => state.comparisonResult)
     const text2 = TextCompareStore((state) => state.comparisonResult2)
     
     const displayText2 = (text2) => {
        let arrOfText = text2.data

        const arr = [
            <div>

            </div>
        ];
        for (let i = 0; i < arrOfText.length; i++){
            let text = arrOfText[i]
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
                arr.push(
                        <span key={i} className={completeClass}> 
                            {text.value} 
                        </span>
                    )
                }
                return arr
            }

     const displayText = (text) => {
            const arr = [

            ];
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
                arr.push(
                        <span key={i} className={completeClass}> 
                            {text.value} 
                        </span>
                    )
                }
            )
            return (
                <div>
                    {arr}
                </div>
            );  
     }
     console.log('txt2', text2)
 return (
    <div>
        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <div className='text-start' style={{
                                    wordWrap: 'break-word',
                                    whiteSpace: 'pre-line'
                                }}>
                                    
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
                                </div>
                            </div>
                            <div>
                                <div id='changed' className='text-start' style={{
                                    wordWrap: 'break-word',
                                    whiteSpace: 'pre-line'
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
                                                        <span key={i} className={completeClass} style={{whiteSpace: "pre-line"}}> 
                                                            {text.value} 
                                                        </span>
                                                    )
                                                }
                                            ) 
                                        }
                                </div>
                            </div>
                        </div>
        </div>
  )
}

export default RenderDiff