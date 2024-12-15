'use client'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import profilePic from '../../public/profile.png'
import notification from '../../public/notification.svg'
import refresh from '../../public/ic_twotone-refresh.svg'
import placeholder from '../../public/next.svg'
import profile from '../../public/Ellipse 760.png'
import letter from '../../public/Letter head.png'
import Link from 'next/link'
import { useState } from 'react'

export default function PatientDashboard() {
    const [search, setSearch] = useState('')

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            <div className='w-full md:w-1/5 bg-white shadow-md'>
                <Sidebar />
            </div>

            {/* Main Dashboard */}
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

                <div className='p-4 md:p-6'>
                    <div className='bg-white rounded-md shadow-md p-4 md:p-6 flex flex-col md:flex-row'>


                        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                            <div className='flex items-center mb-6'>
                                <Image
                                    src={profile}
                                    alt='Profile Pic'
                                    width={60}
                                    height={60}
                                    className='rounded-full border border-gray-300'
                                />
                                <div className='ml-4'>
                                    <div className='flex flex-col items-start'>
                                        <p className='text-lg font-bold'>Dr. Kim Jones</p>
                                        <div className='bg-yellow-400 text-xs text-black p-1 mt-2 mb-2 rounded-md'>
                                            Super Admin
                                        </div>
                                    </div>
                                    <div>
                                        <button className='text-sm text-white bg-green-500 px-2 py-1 hover:underline rounded-md mr-1'>
                                            Save
                                        </button>
                                        <button className='text-sm text-white bg-gray-400 px-2 py-1 hover:underline rounded-md ml-1'>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <button className='w-full text-left p-2 bg-gray-100 rounded-md hover:bg-green-50'>
                                    Manage Clinics
                                </button>
                                <button className='w-full text-left p-2 bg-gray-100 rounded-md hover:bg-green-50'>
                                    Clinic Details
                                </button>
                                <button className='w-full text-left p-2 bg-gray-100 rounded-md hover:bg-green-50'>
                                    Payment Settings
                                </button>
                                <button className='w-full text-left p-2 bg-gray-100 rounded-md hover:bg-green-50'>
                                    Prescription Settings
                                </button>
                            </div>
                        </div>


                        <div className='w-full md:flex-1 border-t md:border-t-0 md:border-l border-gray-200 mt-6 md:mt-0 pl-0 md:pl-6'>
                            <h3 className='text-lg font-semibold mb-4'>SETTINGS</h3>
                            <p className='text-sm text-gray-600 mb-6'>
                                AI Predictive Search <br />
                                <span className='text-xs text-gray-500'>
                                    The AI search allows you to give predictive analysis based on the patient’s vitals, examinations,
                                    lab, and reports.
                                </span>
                            </p>

                            <div className='mb-4'>
                                <p className='text-sm font-semibold'>Prescription Layout</p>
                                <div className='flex flex-wrap space-x-2 mt-2'>
                                    <div className='w-24 h-16 bg-gray-100 border flex items-center justify-center text-gray-400'>
                                        Add Custom Template
                                    </div>
                                    <div className='bg-gray-100 border'>
                                        <Image src={letter} alt='Prescription Template' />
                                    </div>
                                </div>
                            </div>

                            <Link href='./prescription' className='text-blue-500 hover:underline text-sm'>
                                Change contents in the prescriptions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
