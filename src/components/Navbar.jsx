import { useState } from "react"
import logoImg from '../assets/favicon.svg'
import { Link } from 'react-scroll'
const App = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] bg-zinc-200 drop-shadow-lg z-10'>

      <div className="px-2 flex justify-between w-full h-full">
        <div className="flex items-center">

          <div className="flex flex-row justify-center items-center space-x-2">
          <img src={logoImg} alt="logo" className="h-8 w-8" />
            <h2 className=" font-bold text-2xl sm:text-3xl uppercase">
               cloud<span className="text-indigo-600">dog</span>.</h2>

          </div>

          <ul className="hidden md:flex ">
            <li className="hover:text-indigo-600 cursor-pointer">
              <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
              >Home</Link></li>
            <li className="hover:text-indigo-600 cursor-pointer">
              <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                isDynamic={true}
              >About</Link>
            </li>
            <li className="md:hidden lg:flex hover:text-indigo-600 cursor-pointer">   <Link activeClass="active"
              to="support"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={1500}
              isDynamic={true}
            >Support</Link></li>
            <li className="hover:text-indigo-600 cursor-pointer">   <Link activeClass="active"
              to="all-in-one"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={2000}
              isDynamic={true}
            >Platforms</Link></li>
            <li className="hover:text-indigo-600 cursor-pointer">   <Link activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={2500}
              isDynamic={true}
            >Pricing</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 items-center justify-center">
          <button className="border-none bg-transparent text-black mr-4">Sign In</button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden p-4 flex cursor-pointer" onClick={handleClick}>
          {!nav ? <div className="space-y-1 w-5 flex flex-col items-center justify-center" >
            <div className="humburger-button"></div>
            <div className="humburger-button"></div>
            <div className="humburger-button"></div>
          </div> : <div className="text-4xl font-bold w-5">x</div>}

        </div>

      </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className="responsive-li-items">Home</li>
        <li className="responsive-li-items"> About</li>
        <li className="responsive-li-items">Support</li>
        <li className="responsive-li-items">Platforms</li>
        <li className="responsive-li-items">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
          <button className="px-8 py-3">Sign Up </button>
        </div>
      </ul>
    </div>

  )
}

export default App
