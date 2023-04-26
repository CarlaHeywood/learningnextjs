import '../styles/tailwind.css'
import Link from 'next/link'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component />
            <div className='place-content-center text-center p-5 w-full'>
                <div className='text-gray-300'>© Carla Heywood</div>
            </div>
           
        </>
    )
}