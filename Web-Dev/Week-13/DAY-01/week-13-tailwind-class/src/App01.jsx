import './App.css'

function App() {

  return (
    <>
    {/* Flex box implementation using Tailwind-CSS. */}
      {/* <div className='bg-blue-300'>Hello, Tailwind</div> */}

      <div className={'flex justify-between'}>
        <div className='bg-red-300'>
          Child 01
        </div>
        <div className='bg-blue-300'>
          Child 02
        </div>
        <div className='bg-green-300'>
          Child 03
        </div>
      </div>
    </>
  )
}

export default App
