"use client"
import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client"

const Navbar = () => {

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    console.log(session, user, isPending);
    return (
        <div className='container flex justify-between mx-auto gap-4 mt-10'>
            <div></div>
            <ul className='flex justify-between items-center gap-8 text-gray-700'>

                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/about-us"}>About</NavLink>
                </li>
                <li>
                    <NavLink href={"/career"}>Career</NavLink>
                </li>
            </ul>

            {isPending ?(<span className="loading loading-spinner text-error"></span>
            ) : user ? (
            <div className='flex items-center gap-2'>
                <h2>Hello {user.name}</h2>
                <Image src={user?.image || userAvatar} alt="User avatar" width={40} height={40}></Image>
                <button className='btn btn-secondary' onClick={async ()=> await authClient.signOut()}>Logout</button>
            </div> ) : (

            <button className='btn btn-secondary text-white'>
                <Link href={"/login"}>Login</Link>
            </button>
            )}
        </div>
    );
};

export default Navbar;