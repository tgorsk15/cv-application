import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { initialInfoDetails, educationDataSet, experienceDataSet } from './components/data';
import { InfoInput } from './components/infoInput';
import { InfoDisplay } from './components/infoDisplay';
import { EducationInput } from './components/educationInput';
import { EducationDisplay } from './components/educationDisplay';
import { ExperienceInput } from './components/experienceInput';
import { ExperienceDisplay } from './components/experienceDisplay';

import './App.css'
import './styles/pageStructure.css';
import './styles/infoStyles.css';
import './styles/educationStyles.css';
import './styles/experienceStyles.css';


function App() {
  // console.log('app running')
  const [personalInfo, setPersonalInfo] = useState(initialInfoDetails)

  const [educationInfo, setEducationInfo] = useState(educationDataSet);

  const [experienceInfo, setExperienceInfo] = useState(experienceDataSet)


  function handleChangeInfo(property, value) {
    const newInfoDetails = { ...personalInfo, [property]: value };
    setPersonalInfo(newInfoDetails);
    
  }

  function handleChangeEducation(currentEducationData) {
    setEducationInfo(currentEducationData);
  }

  
  function handleDeleteEducation(currentEducationData, educationID ) {
    console.log(educationID)
    
    for (let i = 0; i < currentEducationData.length; i++) {
      if (currentEducationData[i].id === educationID) {
        currentEducationData.splice(i, 1);
        console.log(currentEducationData);
        const newEducationData = [...currentEducationData];
        setEducationInfo(newEducationData);
        
      }
    }
  }

  function handleChangeExperience(currentExperienceData) {
    console.log('experiencing')
    setExperienceInfo(currentExperienceData);
  }

  function handleDeleteExperience(currentExperienceData, experienceID) {
    console.log(experienceID);
    for (let i = 0; i < currentExperienceData.length; i++) {
      if (currentExperienceData[i].id === experienceID) {
        console.log(`Bag the bitch ${currentExperienceData[i].employer}`)

        currentExperienceData.splice(i, 1);
        console.log(currentExperienceData)
        const newExperienceData = [...currentExperienceData];
        setExperienceInfo(newExperienceData);
      }
    }
  }


  function handleAddItem(currentData) {
    console.log(currentData);
    // check to see if it's education or experience being added
    if (currentData[0].school) {
      const newEducation = {
        school: '',
        studyLevel: '',
        startDate: '',
        endDate: '',
        id: uuidv4()
    }
      currentData.push(newEducation)
      const newData = [...currentData]
      console.log(newData)
      setEducationInfo(newData)

    } else if (currentData[0].employer) {
      const newExperience = {
        employer: '',
        role: '',
        startDate: '',
        endDate: '',
        id: uuidv4()
      };
      currentData.push(newExperience);
      const newData = [...currentData];
      console.log(newData);
      setExperienceInfo(newData)
    }
    
  }

  // function handleAddExperience(currentData) {
  //   const newExperience = {
  //     employer: '',
  //     role: '',
  //     startDate: '',
  //     endDate: '',
  //     id: uuidv4()
  //   };
  //   currentData.push(newExperience);
  //   const newData = [...currentData];
  //   console.log(newData);
  //   setExperienceInfo(newData)
  // }

  return (
    
    <>
      <header>
        My CV Builder
      </header>
      <section className='cv-section'>
        <section className='edit-box'>
          
          <InfoInput 
            infoDetails = {personalInfo}
            onChange = {handleChangeInfo}
          />

          <EducationInput
            educationData = {educationInfo}
            educationChange = {handleChangeEducation}
            educationDelete = {handleDeleteEducation}
            educationAdd = {handleAddItem}
          />
          
          <ExperienceInput
            experienceData = {experienceInfo}
            experienceChange = {handleChangeExperience}
            experienceDelete = {handleDeleteExperience}
            experienceAdd = {handleAddItem}
          />
        </section>
        <section className='display-card'>
          
          <InfoDisplay
            infoDetails = {personalInfo}
          />
          <EducationDisplay
            educationData = {educationInfo}
          />

          <ExperienceDisplay
            experienceData = {experienceInfo}
            
          />
            
        </section>
      </section>
    </>

  )
}

export default App
