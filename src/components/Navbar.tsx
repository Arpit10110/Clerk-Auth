import React from 'react'
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, UserButton, UserProfile } from '@clerk/nextjs';
const Navbar = async() => {
    const isuser = await currentUser();
    console.log(isuser);
  return (
    <>
        <div className='flex justify-between py-[2rem] items-center   w-full px-[3rem]  ' >
            <h1 className='text-[2rem]' >ClerkTest</h1>
            <div className='flex gap-[1.5rem] text-[1.2rem] ' >
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <ClerkLoaded>
                    {
                        isuser? 
                        <Link href={"/profile"}>
                            <UserButton/>
                        </Link>:
                        <Link href={"/sign-up"}>SignUp</Link>
                    }
                </ClerkLoaded>
            </div>
        </div>
    </>
  )
}
// aaj main nahi kar raha hai code karna ka!!!
export default Navbar
