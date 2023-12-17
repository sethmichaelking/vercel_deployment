import React from 'react'

function Main() {
  return (
    <div>
            <main class="p-4 md:ml-64 h-screen	 pt-20">
                    <div>
                        <h2 style={{
                            textAlign: 'initial',
                            fontFamily: 'ui-sans-serif, system-ui, -apple-system',
                            fontSize: '25px',
                            marginTop: 0
                        }}> Text Compare</h2>
                    </div>
                    {/* <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                    >
                    </div> */}
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div
                            class="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 h-96"
                        ></div>
                        <div
                            class="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 h-96"
                        ></div>
                    </div>
                </main>
    </div>
  )
}

export default Main