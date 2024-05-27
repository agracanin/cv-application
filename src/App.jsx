import { useState } from 'react'
import Editor from './components/Editor'
import Resume from './components/Resume'
import './styles/styles.css'


function App() {

  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '1234 Elm St, New York, NY 10001',
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    })
  }

  return (
    <div className="app">
      <Editor personalInfo={personalInfo} handleInput={handleInput} />
      <Resume personalInfo={personalInfo} />
    </div>
  )
}

export default App
