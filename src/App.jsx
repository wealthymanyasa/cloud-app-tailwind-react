import About from './components/About'
import AllInOne from './components/AllInOne';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
//import {MenuIcon, XIcon} from '@heroicons/react/outine';
import Support from './components/Support';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Support/>
    <AllInOne/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default App
