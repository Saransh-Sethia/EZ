import React,{useState} from 'react';
import './Form.css';
import axios from 'axios';

const Form = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
  return (
    <div>
      <img src="https://www.ez.works/ez_works.webp" alt="ez"  />
      <br />
      <p className='heading-1'>Suite of Business Support Services</p>
      <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <form className='form'>
        <input 
        className='input'
        placeholder='  Email Address'
        value={email}
        onChange={handleChange}/>
        <input type="submit" className='button' value="Contact Me"/>
      </form>
    </div>
  )
}

export default Form
