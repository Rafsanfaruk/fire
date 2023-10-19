import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import pic from '../public/a.jpg';


const Navbar = () => {
  return (
    <nav className=" bg-white p-4 md:px-8 md:py-4 flex flex-col md:flex-row justify-between items-center md:items-center">
      <div className="flex items-center">
      <Link href="/">
          {/* Use the Image component for your logo */}
          <Image src={pic} alt="Your Logo" width={50} height={50} />
        </Link>
        <Link href="/">
          <h1 className="text-3xl font-bold mr-4">Fire</h1>
        </Link>
        <Link href="/" className="hover:text-red-500 hover:underline">
          Home
        </Link>
        <Link href="/blog" className="ml-4 hover:text-red-500 hover:underline">
          Blog
        </Link>
        <Link href="/about" className="ml-4 hover:text-red-500 hover:underline">
          About Us
        </Link>
      </div>
      <div>
        <Button variant="outline" className="mr-2 rounded-md">
          Login
        </Button>
        <Button className='rounded-lg'>
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
