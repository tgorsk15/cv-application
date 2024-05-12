import { v4 as uuidv4 } from 'uuid'


export const initialInfoDetails = {
    fullName: 'Jack Sparrow',
    email: 'ahoymateys635@pirates.com',
    phone: '630-678-4356',
    location: 'Tortuga, Haiti'
}

export const educationDataSet = [
    {
        school: 'Blackbeard\'s Pirating Brigade',
        studyLevel: 'Bachelor\'s of Looting',
        startDate: '03/24/1653',
        endDate: '05/16/1655',
        id: uuidv4()
    }

]

export const experienceDataSet = [
    {
        employer: 'Davy Jones',
        role: 'Keyholder',
        startDate: '08/2012',
        endDate: '09/2014',
        id: uuidv4()
    },
    
]