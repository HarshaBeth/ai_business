import React from 'react'

const Compiler = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center gap-8 bg-gray-100'>

        <div className='text-3xl font-bold pl-20 w-full flex flex-col'>
            <span>Embedded Sandbox: Code your <span className='text-green-500 italic'>architecture</span></span>
            <span className='text-sm font-semibold italic'>(Open Sandbox to view diagram)</span>
        </div>

        <div className='w-full px-20'>
            <iframe src="https://codesandbox.io/embed/2jlgpj?view=editor+%2B+preview&module=%2Fsrc%2FApp.js"
                style={{width:"100%", height: "500px", border:"0", borderRadius: "4px", overflow:"hidden"}}
                title="musing-darkness"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    </div>

  )
}

export default Compiler