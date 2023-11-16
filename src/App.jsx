import { useState } from 'react'
import PersonalForm from './components/PersonalForm'
import Resume from './components/Resume'
function App() {


  return (
    <div className="app">
      <div className="editor-container">
        <PersonalForm />
      </div>

      <div className="resume-container">
        <Resume />
      </div>
    </div>
  )


}

export default App
