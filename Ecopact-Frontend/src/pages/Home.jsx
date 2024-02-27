import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaAnglesDown } from "react-icons/fa6";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  useEffect(() =>{
    Aos.init({duration: 500});
  },[])
  return (
    <div>
      <div className='first relative'>
      <Navbar/>
      <section className='flex px-10 mt-2 py-8 items-center justify-center'>
        <div className='w-1/2 max-lg:text-center max-lg:min-w-full'>
          <h1 className='text-4xl font-bold pb-5 text-blue-950 max-sm:text-xl max-md:text-2xl'>Data Analytics professionals enhance their reach with our landing page template</h1>
          <p className='pb-5 text-xl max-md:text-sm max-sm:text-xs'>Showcase your expertise using Instapages personalized landing page templates for Data Analytics professionals. Time to attract those clients!</p>
          <button className='border transition-all hover:bg-yellow-500 bg-yellow-400 py-2 px-4 '>Get Started</button>
        </div>
        <div className='w-1/2 max-lg:hidden max-lg:mx-0 max-lg:my-auto'> 
          <img className='w-full float-right animate-float' src="../assets/guide-dap.png" alt="" />
        </div>
      </section>
      </div>
      <div className='w-full flex justify-center my-10 cursor-pointer animate-float'>
          <a href='#main-feat'>
          <FaAnglesDown className='text-3xl font-bold text-yellow-400'/>
          </a>
      </div>
      <section className='px-10 mt-2 py-8' id='main-feat'>
        <div className='flex flex-col items-center pb-5'>
          <h2 className='text-3xl max-sm:text-lg font-bold pb-3 text-center text-blue-950'>Main Features</h2>
          <p className='text-center w-4/5 max-sm:text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde totam natus amet magni enim itaque exercitationem animi sed soluta repudiandae veniam, corrupti voluptate saepe asperiores velit consequuntur impedit accusamus? Excepturi.</p>
        </div>
        <div className='grid grid-cols-3 gap-3 pt-4  max-sm:flex max-sm:flex-wrap'>
          <div className='text-center flex flex-col feat items-center gap-3 ' data-aos="fade-right">
            <MdOutlineMonitorHeart className='text-6xl text-yellow-400 max-sm:text-4xl'/>
            <h3 className='text-lg max-sm:text-sm font-semibold text-blue-950'>Monitoring 24/7</h3>
            <p className='text-sm max-sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className=' text-center flex flex-col feat items-center gap-3 ' data-aos="fade-up">
            <RiComputerLine className='text-6xl text-yellow-400 max-sm:text-4xl'/>
            <h3 className='text-lg font-semibold max-sm:text-sm text-blue-950'>Interactive system</h3>
            <p className='text-sm max-sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
          <div className=' text-center flex flex-col feat items-center gap-3 'data-aos="fade-left">
            <CgPerformance className='text-6xl text-yellow-400 max-sm:text-4xl'/>
            <h3 className='text-lg max-sm:text-sm font-semibold text-blue-950'>High performance</h3>
            <p className='text-sm max-sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>   
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
