import './App.css'

function App() {

  return (
    <>
    {/* Responsiveness implementation using Tailwind-CSS. 
        What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, 
        while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.
    */}
    <div className='xl: bg-yellow-300 md:bg-green-400 sm:bg-blue-400 bg-red-400'>
        Hello, Tailwind.
    </div>
    </>
  )
}

export default App