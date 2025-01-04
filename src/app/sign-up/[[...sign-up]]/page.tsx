import Navbar from '@/components/Navbar'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    <>
    <Navbar/>
    <div className='flex justify-center items-center' >
        <SignUp />
    </div>
    </>
  )
}