import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'
const Home = () => {
  return (
    <>
      <div className='landing-page'>
        <div className='navbar'>
          <img src='https://voosh.in/static/media/VooshLogo.c64bcebd40a2d49cc591.webp' alt='vooshLogo' />
        </div>
        <img className='landing-page-bg' src='https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp' alt='container-bg' />
          <div className='landing-items'>
            <div className='left'>
              <div className='title'>Consolidate your restaurants' insights in one place. Unlock growth.</div>
              <div className='sub-title'>Your one stop solution to view mission-critical data and insights from all your locations in one place.</div>
              <a href='#book-demo-container' className='book-btn'>Book Demo</a>
            </div>
            <div className='right'>
              <img className='three-line' src='https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp'alt='three-line' />
              <img className='my-profile' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp'alt='my-profile' />
            </div>
          </div>
      </div>
      <div id='book-demo-container' className='book-demo'>
        <div className='book-demo-form-title'>Book A Demo Now</div>
        <div className='book-demo-form-container'>
          <form className='book-demo-form'>
            <label htmlFor="name">
              Name
              <span style={{color: 'red'}}>*</span>
            </label>
            <input type="text" id="name" required placeholder='Ex. Nasikh CL'/>
            <label htmlFor="email">
              Email
              <span style={{color: 'red'}}>*</span>
            </label>
            <input type="email" id="email" required placeholder='Ex. nasikcl@gmail.com'/>

            <label htmlFor="password">
              Password
              <span style={{color: 'red'}}>*</span>
            </label>
            <input type="password" id="password" required  placeholder='Ex. Passwed@123'/>

            <label htmlFor="company">
              Company Name
              <span style={{color: 'red'}}>*</span>
            </label>
            <input type="text" id="company" required placeholder='Ex. XYZ PVT LTD'/>

            <label htmlFor="title">
              Your title
              <span style={{color: 'red'}}>*</span>
            </label>
            <input type="text" id="title" required  placeholder='Ex. Operational Head'/>
        
            <button type="submit">Book demo</button>
          </form>
        </div>
      </div>
      
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