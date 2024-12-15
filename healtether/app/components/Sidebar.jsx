'use client'
import healtether from '../../public/healtether.svg'
import component_2 from '../../public/component-2.svg'
import component_3 from '../../public/component-3.svg'
import component_5 from '../../public/component-5.svg'
import whatsapp from '../../public/ion_logo-whatsapp.svg'
import appointment from '../../public/solar_calendar-linear.svg'
import analytics from '../../public/trending-up.svg'
import home from '../../public/icon_home.svg'
import Image from 'next/image'


export default function Sidebar(){

    const links = [
        {
            name : 'Home',
            link : '',
            img : home
        },


        {
            name : 'Appointments',
            link : '',
            img : appointment
        },


        {
            name : 'Whatsapp',
            link : '',
            img : whatsapp
        },


        {
            name : "Patient's Record",
            link : '',
            img : component_2
        },



        {
            name : "Manage Staff",
            link : '',
            img : component_3
        },



        {
            name : "Payment Record",
            link : '',
            img : component_5
        },

        {
            name : 'Analytics',
            link : '',
            img : analytics
        }
    ]
    return(
        <nav className='flex flex-col items-center p-2 hidden md:block'>
          <Image src={healtether} alt=''/>
          <button className='text-white bg-green-500 p-4 rounded-md m-2 mt-2'>Schedule Appointment</button>
          <div className='m-3 p-2 flex flex-col items-start'>
            {links.map((link, index) =>(
                <div key={index} className='flex justify-center m-3'>
                   <Image src={link.img} alt=''/>
                   <p className='m-2'>{link.name}</p>
                </div>
            ))}
            
          </div>
        </nav>
    )
}