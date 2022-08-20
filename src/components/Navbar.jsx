import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px4 bg-[#8a82f92c] text-gray-300'>
<div>
<img src={Logo} alt="Logo Image" style={{width: '50px'}}/>
</div>


<div>
    <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Linkedin</li>
    </ul>
</div>
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars /> :<FaTimes />}
</div>
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#106edb] flex flex-col justify-center items-center '}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Linkedin</li>
</ul>
<div className='flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
        <a className='flex justify-between items-center w-full text text-gray-300' href='/'>
            Linkedin <FaLinkedin size={30} />
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
        <a className='flex justify-between items-center w-full text text-gray-300' href='https://www.linkedin.com/in/zian-lalleman-170a94224/'>
            Github <FaGithub size={30} />
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-800 '>
        <a className='flex justify-between items-center w-full text text-gray-300' href='/'>
            Insta <FaInstagram size={30} />
        </a>
    </li>
</ul>
</div>
    </div>
  )
}

export default Navbar