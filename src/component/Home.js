import React from 'react';
import Header from '../component/Header';
import IndividualIntervalsExample from '../component/slideShow';
import BasicExample2 from '../component/Header2';
import Content from '../assest/anhd2.jpg';
import Cards from './Cards';
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <main>
    
    {/* <img className='logoimage' src={image} alt="logo" /> */}
    
     
     <IndividualIntervalsExample /> 
     <Cards />
     <img src={Content} alt='con' width='90%' height='450px' className='Content'/>
     <p className='text'>ENROLLMENT</p>
     <p className='text1'> ❤️ Get started with us to explore the exciting</p>
     <p className='text2'>Contact</p>
     <p className='text3'> ❤️ Get in touch with us to know more about the enrollment process</p>
     <p className='text4'>Register </p>
     <p className='text5'> ❤️ Get Registered with us and put a check to the waiting </p>
     <p className='text6'>Consulting </p>
     <p className='text7'> ❤️ Get the appoinment and consult a doctor at your ease </p>
     </main>
     
     <Footer />


     </>
     
  )
}

export default Home