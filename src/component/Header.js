import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link  } from "react-router-dom";
import BasicExample2 from '../component/Header2';
import twitter from '../assest/newtwitter.png';
import whatsapp from '../assest/newwhatsapp.png';
import facebook from '../assest/fg.png';
import { useNavigate } from 'react-router-dom';




const Header =() => {
  const Navigate =useNavigate();
  const abc =(e)=>{
  e.preventDefault();
    Navigate('/Database')

  }
   

  return (
    <>
    
    
    <Navbar fixed="top" className='top' >
    
      <Container>
      
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  ><Link to='/' className='upTop'><p className='upTopunder' >🏠 Home</p></Link></Nav.Link>
            {/* <Link to='/'>Home</Link> */}
            {/* <Link to="/facebook">About</Link> */}
            <Nav.Link href="#link"><Link to='' ><p><img src={twitter} alt='twitter' className='Top'/></p></Link></Nav.Link>
            <Nav.Link href="https://ultramsg.com/m/3h9Dvuf"><img src={whatsapp} alt='Watsapp' className='Top' /></Nav.Link>
            <Nav.Link href=""><Link to='' ><img src={facebook} alt='Facebook' className='Top'/></Link></Nav.Link>
            <Nav.Link href="" ><Link to='' className='Top' >📞9391592122</Link></Nav.Link>
            
            {/* <Nav.Link  ><Link to='/' className='call' ><p >call:-9901541729</p></Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        
        <button className='book_now' onClick={abc}>BOOK NOW</button>
      </Container>
      
      <div className='nav2'>

    <BasicExample2 />
    </div>
    
    
    </Navbar>
    {/* <div className='nav2'>

    <BasicExample2 />
    </div> */}
    </> 
  );
}

export default Header;