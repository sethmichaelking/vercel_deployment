import React from 'react'
import TextCompareInput from './TextCompareInput'
import { Button, FloatingLabel } from 'flowbite-react';

function Main() {
  return (
    <div>
            <main className="p-4 md:ml-64 h-screen	 pt-20">
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
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <TextCompareInput/>
                        <TextCompareInput/>
                    </div>
                    <div style={{margin: '0 auto'}}>
                        <div style={{float: 'left'}}>
                            <div className="max-w-md bg-white">
                                <div className="mb-1 block">
                                    <FloatingLabel variant="outlined" label="Name your file" />

                                    {/* <Label htmlFor="email4" label="Label"  value="Your email" /> */}
                                </div>
                            </div>
                        </div>
                        <div style={{float: 'right'}}>
                            <Button color="blue">Compare</Button>
                        </div>
                    </div>
                </main>
    </div>
  )
}

export default Main