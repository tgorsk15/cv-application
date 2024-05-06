import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { initialInfoDetails, educationDataSet } from './components/data';
import { InfoInput } from './components/infoInput';
import { InfoDisplay } from './components/infoDisplay';
import { EducationInput } from './components/educationInput';

import './App.css'
import './styles/pageStructure.css'
import './styles/infoStyles.css';


function App() {
  console.log(initialInfoDetails)
  const [personalInfo, setPersonalInfo] = useState(initialInfoDetails)

  console.log(educationDataSet)
  const [educationInfo, setEducationInfo] = useState(educationDataSet);


  function handleChangeInfo(property, value) {
    const newInfoDetails = { ...personalInfo, [property]: value };
    setPersonalInfo(newInfoDetails);
    // console.log(property);
    // console.log(value);
    // console.log(personalInfo);
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

          <EducationInput
            educationData = {educationInfo}
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
