'use client'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import profilePic from '../../public/profile.png'
import notification from '../../public/notification.svg'
import refresh from '../../public/ic_twotone-refresh.svg'
import prescription from '../../public/prescription.png'
import letter from '../../public/Letter head.png'
import logo from '../../public/clinic.png'
import { useState, useEffect } from 'react'

export default function PatientDashboard() {
    const [clinicLogo, setClinicLogo] = useState()
    const [search, setSearch] = useState('')
    const [formData, setFormData] = useState({
    doctorName: '',
    specialty: '',
    clinicAddress: '',
    clinicContact: '',
    clinicEmail: '',
    startTime: '',
    endTime: '',
    pastHistory: false,
    symptomsDiagnosis: false,
    labTests: false,
    drugPrescription: false,
});

    const [isSaveDisabled, setIsSaveDisabled] = useState(true)

    const handleLogoUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setClinicLogo(e.target.result)
            reader.readAsDataURL(file)
        }
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    useEffect(() => {
    const mandatoryFields = ['doctorName', 'specialty', 'clinicAddress', 'clinicContact', 'clinicEmail', 'startTime', 'endTime'];
    
    const allMandatoryFieldsFilled = mandatoryFields.every((field) => formData[field]?.trim() !== '');
    setIsSaveDisabled(!allMandatoryFieldsFilled);
}, [formData]);


    return (
        <div className='flex flex-col md:flex-row h-screen overflow-hidden'>
            <div className='w-full md:w-1/5 bg-white shadow-md'>
                <Sidebar />
            </div>

            <div className='flex-1 flex flex-col bg-gray-50'>
                <div className='flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md space-y-4 md:space-y-0'>
                    <div className='w-full md:flex-1 mr-2'>
                        <input
                            type='text'
                            placeholder='Quick search patient'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full md:w-3/4 p-2 rounded-md border border-gray-300 text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </div>
                    <div className='flex items-center space-x-4'>
                        <Image src={notification} alt='notification' width={24} height={24} />
                        <Image
                            src={profilePic}
                            alt='Profile Pic'
                            width={40}
                            height={40}
                            className='rounded-full border border-gray-300'
                        />
                        <p className='font-semibold text-sm md:text-base'>Dr. Kim Jones</p>
                    </div>
                </div>

                <div className='p-4 md:p-6 flex flex-col md:flex-row items-center justify-between text-sm md:text-base'>
                    <p>{`< > Home > User Profile`}</p>
                    <div className='flex items-center cursor-pointer mt-2 md:mt-0'>
                        <Image src={refresh} alt='refresh' width={20} height={20} />
                        <p className='ml-2'>Refresh</p>
                    </div>
                </div>

                <div className='p-4 md:p-6 flex flex-col md:flex-row items-start w-full'>
                    <div className='bg-gray-100 w-full md:w-1/2 border'>
                        <Image src={letter} alt='Prescription Template' className='w-full' />
                    </div>

                    <div className='bg-gray-100 w-full md:w-full border flex flex-col items-start m-3 overflow-y-auto' style={{height : 'calc(100vh - 200px) '}}>
                        <div className='px-6 py-4 bg-gray-100 border-b'>
                            <h2 className='text-xl font-semibold text-gray-800'>Settings</h2>
                            <hr className='w-full'></hr>
                            <h2 className='text-xl font-semibold text-gray-800'>Prescription Settings</h2>
                        </div>

                        <div className='p-6 space-y-6'>
                            <div className='space-y-4'>
                                <h3 className='text-sm font-medium text-gray-700'>Header Info</h3>

    <div className='flex flex-col md:flex-row w-full justify-between items-center p-6 border-2 border-dashed rounded-lg'>
    
    <label className='relative mt-4 cursor-pointer'>
        <div className='flex items-center justify-center w-full h-10 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            {clinicLogo ? 'Change Logo' : 'Add Clinic Logo'}
        </div>
        <input
            type='file'
            className='absolute inset-0 opacity-0 cursor-pointer'
            onChange={handleLogoUpload}
            accept='image/*'
        />
    </label>


    {clinicLogo ? (
        <Image src={clinicLogo} alt='Clinic Logo' width={100} height={100} className='mb-4' />
    ) : (
        <div className='w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full border-dashed border-2 border-gray-400'>
            <Image src={logo} alt='upload'/>
        </div>
    )}
</div>


                                <div className='grid gap-4'>
                                    <div>
                                        <label htmlFor='doctorName' className='block text-sm font-medium text-gray-700'>
                                            Doctor's Name
                                        </label>
                                        <input
                                            required
                                            type='text'
                                            id='doctorName'
                                            value={formData.doctorName}
                                            onChange={handleInputChange}
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            placeholder='e.g. Dr. Jane Doe'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='specialty' className='block text-sm font-medium text-gray-700'>
                                            Doctor's specialty
                                        </label>
                                        <input
                                            required
                                            type='text'
                                            id='specialty'
                                            value={formData.specialty}
                                            onChange={handleInputChange}
                                            placeholder='e.g. Neurologist'
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />
                                    </div>


                                    <div>
                                        <label htmlFor='specialty' className='block text-sm font-medium text-gray-700'>
                                            Other information
                                        </label>
                                        <input
                                            required
                                            type='text'
                                            id='information'
                                            value={formData.information}
                                            onChange={handleInputChange}
                                            placeholder='e.g. Other information'
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='clinicAddress' className='block text-sm font-medium text-gray-700'>
                                            Clinic address
                                        </label>
                                        <input
                                            required
                                            type='text'
                                            id='clinicAddress'
                                            value={formData.clinicAddress}
                                            onChange={handleInputChange}
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            placeholder='Street address, City State, Zip Code'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor='clinicContact' className='block text-sm font-medium text-gray-700'>
                                            Clinic contact
                                        </label>
                                        <input
                                            required
                                            type='tel'
                                            id='clinicContact'
                                            value={formData.clinicContact}
                                            onChange={handleInputChange}
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            placeholder='Phone number'
                                        />
                                        <p className='text-blue-500 underline mt-3'>+ Add another contact</p>
                                    </div>

                                    <div>
                                        <label htmlFor='clinicEmail' className='block text-sm font-medium text-gray-700'>
                                            Clinic email
                                        </label>
                                        <input
                                            required
                                            type='email'
                                            id='clinicEmail'
                                            value={formData.clinicEmail}
                                            onChange={handleInputChange}
                                            className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            placeholder='email@clinic.com'
                                        />
                                        <p className='text-blue-500 underline mt-3'>+ Add another email</p>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <h3 className='text-sm font-medium text-gray-700'>Clinic open hrs</h3>

                                <div className='grid gap-4'>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <label htmlFor='startTime' className='block text-sm font-medium text-gray-700'>
                                                Start time
                                            </label>
                                            <input
                                                required
                                                type='time'
                                                id='startTime'
                                                value={formData.startTime}
                                                onChange={handleInputChange}
                                                className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='endTime' className='block text-sm font-medium text-gray-700'>
                                                End time
                                            </label>
                                            <input
                                                required
                                                type='time'
                                                id='endTime'
                                                value={formData.endTime}
                                                onChange={handleInputChange}
                                                className='p-2 mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700'>Applicable for days</label>
                                        <div className='mt-2 flex flex-wrap gap-2'>
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                                                <button
                                                    key={day}
                                                    className='px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <h3 className='text-sm font-medium text-gray-700'>Auto fill data in the Prescription</h3>
                                 <div className='space-y-3'>
    <div className='flex items-center'>
        <input
            id='patient-id'
            type='checkbox'
            checked={true}
            disabled = {true}
            onChange={(e) =>
                setFormData((prev) => ({ ...prev, patientId: e.target.checked }))
            }
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='patient-id' className='ml-2 block text-sm text-gray-900'>
            Patient Id
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='personal-details'
            type='checkbox'
            checked={true}
            disabled={true}
            onChange={(e) =>
                setFormData((prev) => ({ ...prev, personalDetails: e.target.checked }))
            }
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='personal-details' className='ml-2 block text-sm text-gray-900'>
            Patient Personal details - Name, contact
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='vital-details'
            type='checkbox'
            checked={true}
            disabled = {true}
            onChange={(e) =>
                setFormData((prev) => ({ ...prev, vitalDetails: e.target.checked }))
            }
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='vital-details' className='ml-2 block text-sm text-gray-900'>
            Patient Vital details
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='past-history'
            type='checkbox'
            checked={formData.pastHistory || false}
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='past-history' className='ml-2 block text-sm text-gray-900'>
            Patient Past history details
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='symptoms-diagnosis'
            type='checkbox'
            checked={formData.symptomsDiagnosis || false}
            onChange={(e) =>
                setFormData((prev) => ({ ...prev, symptomsDiagnosis: e.target.checked }))
            }
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='symptoms-diagnosis' className='ml-2 block text-sm text-gray-900'>
            Symptoms and Diagnosis
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='lab-tests'
            type='checkbox'
            checked={formData.labTests || false}
            onChange={(e) =>
                setFormData((prev) => ({ ...prev, labTests: e.target.checked }))
            }
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='lab-tests' className='ml-2 block text-sm text-gray-900'>
            Lab Tests
        </label>
    </div>

    <div className='flex items-center'>
        <input
            id='drug-prescription'
            type='checkbox'
            checked={true}
            disabled = {true}
            className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
        />
        <label htmlFor='drug-prescription' className='ml-2 block text-sm text-gray-900'>
            Drug Prescription
        </label>
    </div>
</div>

                                
                            </div>

                            <button
                                disabled={isSaveDisabled}
                                className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                    isSaveDisabled ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'
                                }`}>
                                Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
