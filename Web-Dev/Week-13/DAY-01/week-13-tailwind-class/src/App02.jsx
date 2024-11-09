import './App.css'

function App() {

  return (
    <>
    {/* Grids implementation using Tailwind-CSS. */}
    <div className='grid grid-cols-12'>
        <div className='col-span-5 bg-red-500'>
            Grid 01
        </div>
        <div className='col-span-4 bg-blue-300'>
            Grid 02
        </div>
        <div className='col-span-3 bg-green-300'>
            Grid 03
        </div>
    </div>

    </>
  )
}

export default App
