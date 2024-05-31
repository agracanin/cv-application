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

  const handlePersonalInput = (e) => {
    const { name, value } = e.target
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    })
  }

  const [education, setEducation] = useState([
    {
      school: 'University of Nowhere',
      degree: 'B.A. in Nothing',
      start: 'August 2000',
      graduation: 'May 2004',
      location: 'Nowhere, USA',
    },
  ]);


  const addEducation = (newEducation) => {
    setEducation([...education, newEducation]);
  };


  return (
    <div className="app">
      <Editor 
      personalInfo={personalInfo} 
      handlePersonalInput={handlePersonalInput} 
      addEducation={addEducation}
      educationInfo={education}
      />
      <Resume 
      personalInfo={personalInfo}
      educationInfo={education}
      />
    </div>
  )
}

export default App
