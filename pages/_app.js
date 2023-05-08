import '../styles/tailwind.css'
import Link from 'next/link'
import Navbar from '../components/global/navbar'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component />
            <div className='place-content-center text-center p-5 w-full'>
                <div className='text-gray-300'>© Carla Heywood</div>
            </div>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
        </>
    )
}