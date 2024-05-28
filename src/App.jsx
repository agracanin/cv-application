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

  const[education, setEducation] = useState([
    {
      school: 'University of Life',
      degree: 'Bachelor of Science in Computer Science',
      start: 'August 2015',
      graduation: 'May 2019',
      location: 'New York, NY',
    },
    // {
    //   school: 'School of Hard Knocks',
    //   degree: 'Bachelor of Arts in English',
    //   start: 'August 2011',
    //   graduation: 'May 2015',
    //   location: 'New York, NY',
    // },
  ])

  const handleEducationInput = (e, index) => {
    const { name, value } = e.target
    const updatedEducation = [...education]
    updatedEducation[index][name] = value
    setEducation(updatedEducation)
  }



  return (
    <div className="app">
      <Editor 
      personalInfo={personalInfo} 
      handlePersonalInput={handlePersonalInput} 
      educationInfo={education}
      handleEducationInput={handleEducationInput}
      />
      <Resume personalInfo={personalInfo} />
    </div>
  )
}

export default App
