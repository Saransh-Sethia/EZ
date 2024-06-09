import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  let rejectedDomain = "ez.works";

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]:value}))
  };

  const handleSubmit = async (formData) => {
    try {
      if(formData.email === ""){
        alert("Kindly Enter Email")
        return;
      }
      const response = await axios.post("http://34.225.132.160:8002/api",{email: formData.email});

      let splitArr = formData.email.split("@");

      if(splitArr[1] === rejectedDomain) {
setFormData({email: response.status})
      } else {
        console.log('response',response)
        setFormData({email: response.data.message})
      }
      
        // console.log("response", response);
        
      
    } catch (error) {
    if(error.response && error.response.message === 422){

      console.log('error',error)
    }
    }
  };

  return (
    <div>
      <img src="https://www.ez.works/ez_works.webp" alt="ez" />
      <br />
      <p className="heading-1">Suite of Business Support Services</p>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="form" >
        <input
          className="input"
          placeholder="  Email Address"
          name="email"
          value={formData.email}
          onChange={(e)=>handleChange(e)}
        />
        <button className="button" onClick={()=>handleSubmit(formData)} >Contact Me</button>
      </div>
    </div>
  );
};

export default Form;
