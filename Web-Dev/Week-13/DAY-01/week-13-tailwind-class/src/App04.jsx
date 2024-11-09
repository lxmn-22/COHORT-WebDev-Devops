import './App.css'
import { Button } from './components/Buttons'
import { Input } from './components/Input'

function App() {

  return (
  <div className='h-screen bg-blue-700'>
        <Input type="text" placeholder={"Username"}></Input>
        <Button disabled={false}>Sign up</Button>
        
    </div>
  )
}

export default App