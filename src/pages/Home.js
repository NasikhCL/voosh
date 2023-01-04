import React,{useEffect, useState} from 'react'
import Form from '../components/Form'
import LandingPage from '../components/LandingPage'


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
      setFormData({
        name: '',
        email: '',
        password: '',
        companyName: '',
        title: ''
      })
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
    <div className='home'>
      <LandingPage />
      <Form isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Home


