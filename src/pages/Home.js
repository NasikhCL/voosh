import React,{useEffect, useState} from 'react'
import Form from '../components/Form'
import LandingPage from '../components/LandingPage'

// import Navbar from '../components/Navbar'
// import './home.css'
const Home = () => {

  const [isLoggedIn, setIsLoggedIn]= useState(false)
  const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
          companyName: '',
          title: ''
      
  })
  console.log(formData)
  const handleChange = (e)=>{
      const { name, value } = e.target;
      console.log(formData)
      setFormData({...formData, [name]: value });
  }
  const handleSubmit= (e)=>{
      e.preventDefault()
      console.log('submitted');
      localStorage.setItem('voosh', JSON.stringify({email:formData.email,password: formData.password}))
      setIsLoggedIn(true)
    }
    useEffect(()=>{
      const vooshCred =localStorage.getItem('voosh');
      if(vooshCred){
        console.log('user registered alrdy', JSON.parse(vooshCred))
        setIsLoggedIn(true)
      }
    },[isLoggedIn])
    
  return (
    <>
      <LandingPage />
      <Form isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      
    </>
  )
}

export default Home


// <div class="brand-logos">
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon1" />
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon2" />
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon3" />
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon4" />
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon5" />
//   <img src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp" class="page1-outlet-icon6" />
// </div>