import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]:value}))
  };

  const handleSubmit = async () => {
    try {
      const data = {
        email: formData.email
      }
      const response = await axios.post("https://34.225.132.160:8002/api",data);
      if (response.status === 201) {
        console.log("response", response.status.message);
        setFormData({email: response.status.message})
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log("Invalid Credentials");
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
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="  Email Address"
          name="email"
          value={formData.email}
          onChange={(e)=>handleChange(e)}
        />
        <input type="submit" className="button" value="Contact Me" />
      </form>
    </div>
  );
};

export default Form;
