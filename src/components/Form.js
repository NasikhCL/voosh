import React, { useState ,useEffect} from "react";
import UserDetails from "./UserDetails";
import "./form.css";
const Form = ({ isLoggedIn, setIsLoggedIn, formData, handleChange, handleSubmit }) => {
   
  // const [isLoggedIn, setIsLoggedIn]= useState(false)
  // const [formData, setFormData] = useState(
  //     {
  //         name: '',
  //         email: '',
  //         password: '',
  //         companyName: '',
  //         title: ''

  //     }
  // )
  // const handleChange = (e)=>{
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  // }
  // const handleSubmit= (e)=>{
  //     e.preventDefault()
  //     localStorage.setItem('voosh', JSON.stringify(formData.email,formData.password))
  //     setIsLoggedIn(true)
  // }

  return (
    <div id="book-demo-container" className="book-demo">
      <div className="book-demo-form-title">Book A Demo Now</div>
      <div className="book-demo-form-container">
        {isLoggedIn ? (
          <UserDetails />
        ) : (
          <form className="book-demo-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name='name'
              required
              placeholder="Ex. Nasikh CL"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">
              Email
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name='email'
              id="email"
              required
              placeholder="Ex. nasikcl@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">
              Password
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name='password'
              required
              placeholder="Ex. Passwed@123"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="company">
              Company Name
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="company"
              name='companyName'
              required
              placeholder="Ex. XYZ PVT LTD"
              value={formData.companyName}
              onChange={handleChange}
            />

            <label htmlFor="title">
              Your title
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name='title'
              id="title"
              required
              placeholder="Ex. Operational Head"
              value={formData.title}
              onChange={handleChange}
            />

            <button type="submit">Book demo</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
