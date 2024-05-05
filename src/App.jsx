import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { initialInfoDetails } from './components/data';
import { InfoInput } from './components/infoInput';
import { InfoDisplay } from './components/infoDisplay';

import './App.css'
import './styles/pageStructure.css'
import './styles/infoStyles.css';


function App() {
  console.log(initialInfoDetails)
  const [personalInfo, setPersonalInfo] = useState(initialInfoDetails)


  function handleChangeInfo(property, value) {
    const newInfoDetails = { ...personalInfo, [property]: value };
    setPersonalInfo(newInfoDetails);
    console.log(property);
    console.log(value);
    console.log(personalInfo);
  }

  function handleDeleteUnit() {

  }

  function handleAddUnit() {
    
  }

  return (
    
    <>
      <header>
        My CV Builder
      </header>
      <section className='cv-section'>
        <section className='edit-box'>
          Edit Me
          <InfoInput 
            infoDetails = {personalInfo}
            onChange = {handleChangeInfo}
          />


            
        </section>
        <section className='display-card'>
          Display Me
          <InfoDisplay
            infoDetails = {personalInfo}
          />
            
        </section>
      </section>
    </>

  )
}

export default App
