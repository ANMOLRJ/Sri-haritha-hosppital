import Dropdown from 'react-bootstrap/Dropdown';
import Overview from './Overview';
import svg from '../assest/full logo.svg';
import { Link } from 'react-router-dom';

function BasicExample2() {
  return (
    <>
    <img src={svg} alt='logo' className='logo'/>

    <div className='dropdowns'>
      <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" id='dropdown-basic' type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ABOUT US
    </button>
    <ul class="dropdown-menu" style={{width:"300px"}}>
      <li><Link className="dropdown-item" to="/Overview">OVERVIEW</Link></li>
      <li><Link class="dropdown-item" to="#">VISION MISSION</Link></li>
      <li><Link class="dropdown-item" to="#">AWARDS AND ACHIEVEMENTS</Link></li>
    </ul>
  </div>
  
    {/* <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        ABOUT US
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"300px"}}>
        <Dropdown.Item href="/Overview"><Link to='/Overview' className='dropdown-item'>OVERVIEW</Link></Dropdown.Item>
        <Dropdown.Item href="/Vision"><Link to='/Vision' className='dropdown-item'>VISION MISSION</Link></Dropdown.Item>
        <Dropdown.Item href="/Awards"><Link to='/Awards' className='dropdown-item'>AWARDS AND ACHIEVEMENTS</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  SPECIALITIES
</Dropdown.Toggle>

<Dropdown.Menu style={{width:"300px"}}>
  <Dropdown.Item href="#/action-1">GENERAL MEDICINE</Dropdown.Item>
  <Dropdown.Item href="#/action-2">General Surgery </Dropdown.Item>
  <Dropdown.Item href="#/action-3">Gynecology</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Obstetrics</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Paediatrics</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Orthopedics </Dropdown.Item>
  <Dropdown.Item href="#/action-3">Dermatology</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Pain Management</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Anesthesiology</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Ophthalmology</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ENT</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Pathology</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Physiotherapy/Rehabilitation</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Microbiology & Biochemistry</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Nutrition & Dietics</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Dept. of Clinical Pharmacy</Dropdown.Item>
 
</Dropdown.Menu>
</Dropdown>
 
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      SUPER SPECIALITIES
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"300px"}}>
        <Dropdown.Item href="#/action-1">Cardiology</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cardiothoracic Surgery</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Pulmonology</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Neurology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Neurosurgery</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Rheumatology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Nephrology</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Urology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gastroenterology</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Surgical Gastroenterology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Endocrinology</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Diabetic Clinic</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ELaproscopic Surgery</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Plastic Surger</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Hematology</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        FACIALITIES
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"300px"}}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        DOCTORS
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"400px"}}>
        <div className='two'>
        <div>
        <Dropdown.Item href="/Doctor1"> GENERAL SURGEON AND SENIOR LAPAROSOPIC </Dropdown.Item>
        <Dropdown.Item href="#/action-2"> IFCCM CONSULTANT CRITICAL CARE </Dropdown.Item>
        <Dropdown.Item href="#/action-3"> GYNECOLOGIST</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">NEUROPSYCHIA</Dropdown.Item>
        <Dropdown.Item href="#/action-3">RHEUMATOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-2">NEPHROLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ONCOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-2">EMERGENCY MEDICINE</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CRITICAL CARE</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SEXUAL MEDICINE</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DIABETOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-2">GENERAL SURGERY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">GYNECOLOGY</Dropdown.Item> */}
        </div>
        {/* <div>
        
        <Dropdown.Item href="#/action-2">PAEDIATRICS</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PULMONOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DERMATOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">CARDIOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ENT</Dropdown.Item>
        <Dropdown.Item href="#/action-3">OPHTHALMOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ORTHOPEDICS</Dropdown.Item>
        <Dropdown.Item href="#/action-3">UROLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">NEUROSURGERY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">PATHOLOGY</Dropdown.Item>
        <Dropdown.Item href="#/action-3">RADIOLOGY </Dropdown.Item>
        <Dropdown.Item href="#/action-3">FAMILY PHYSICIANS </Dropdown.Item>
        <Dropdown.Item href="#/action-3">ENDOCRINOLOGY</Dropdown.Item>
        </div> */}
        </div>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        HEALTH BLOG
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:"300px"}}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
</>
  );
}


export default BasicExample2;