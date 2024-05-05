import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { initialInfoDetails } from './components/data';
import { InfoInput } from './components/infoInput';

import './App.css'
import './styles/pageStructure.css'
import './styles/infoStyles.css';
import { InfoDisplay } from './components/infoDisplay';

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialInfoDetails)


  function handleChangeInfo(property, value) {
    const newInfoDetails = { ...personalInfo, [property]: value };
    setPersonalInfo(newInfoDetails);
  }

  return (
    
    <>
      <header>
        My CV Builder
      </header>
      <section className='cv-section'>
        <section className='edit-box'>
          Edit Me
          <InfoInput>
            infoDetails = {personalInfo}
            onChange = {handleChangeInfo}
          </InfoInput>
        </section>
        <section className='display-card'>
          Display Me
          <InfoDisplay>
            infoDetails = {personalInfo}
          </InfoDisplay>
        </section>
      </section>
    </>

  )
}

export default App
