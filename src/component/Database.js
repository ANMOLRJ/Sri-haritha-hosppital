import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import img from '../assest/anhd3.jpg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Database = () => {

  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [gender,setGender]=useState('')
  const [number,setNumber]=useState('')
  const [schedule,setSchedule]=useState(new Date())
  const [time,setTime] =useState('')

  const Navigate=useNavigate();

  // const anu= (e)=>{
  //   e.preventDefault();

  //    Navigate('/Thankyou')
  // }

  const handleSubmit= (e)=>{
    e.preventDefault();
    // console.log(name,age)
    const data={
      Name:name,
      Age:age,
      Gender:gender,
      Number:number,
      Schedule:schedule,
      Time:time
    }
    axios.post('https://sheet.best/api/sheets/cc15e48e-81fd-4572-af25-7a5407bc789e',data).then((response)=>{
      console.log(response);
      // clearing form fields
      // setName('');
      // setAge('');
    })
    Navigate('/Thankyou')
    }
  return (
    <>
    <div className='two'>
      <div>
      <img src={img} alt='cool' className='fixedImages' />
      </div>

    <div className='Forms'> 
      
      < form autoComplete='off' className='form-group'
      onSubmit={handleSubmit}>
        
          
      <div className='Formses'>

          <div>
      <label className='labeles' >Name</label>
      <input type='text' placeholder='Enter Your name' required 
        className='form-control'
        onChange={(e)=>setName(e.target.value)} value={name}/>
          </div>


         
  
          <div>
        <label className='labeles' >Age</label>
         <input type='text' placeholder='Enter Your Age' required 
        className='form-control'
        onChange={(e)=>setAge(e.target.value)} value={age}
        />
         </div>

      
        <div>
        <label className='labeles' >Gender</label>
         <input type='text' list="gender" placeholder='Choose Your Gender' required 
        className='form-control'
        onChange={(e)=>setGender(e.target.value)} value={gender}
        />
        <datalist id="gender">
         <option>Male</option>
         <option>Female</option>
         <option>Others</option>
        </datalist>
        </div>



       
        <div>
         <label className='labeles' >Mobile Number</label>
         <input type='text' placeholder='Enter Your Mobile Number' required 
        className='form-control'
        onChange={(e)=>setNumber(e.target.value)} value={number}
        />
        </div>

        <div>
        <label className='labeles' >Schedule Date</label>
        
        <DatePicker selected={schedule} onChange={(date) => setSchedule(date)} />
        </div>

        <div>

      <label className='labeles' >Prefered Time Slot</label>
         <input type="text" list="cars" placeholder='Choose Your Time Slot' required 
        className='form-control'
        onChange={(e)=>setTime(e.target.value)} value={time}  />
        <datalist id="cars">
         <option>10:00 AM - 1:00 PM</option>
         <option>02:00 PM - 6:00 PM</option>
         <option>07:00 PM - 8:00 PM</option>
        </datalist>

        </div>
         
        <div>
          <button type='submit' className='lasts' >Submit</button>
        </div>
          
        </div>
        


      </form>
    </div>
    </div>
    </>
  )
}

export default Database;