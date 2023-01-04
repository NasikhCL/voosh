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
              <button className='book-btn'>Book Demo</button>
            </div>
            <div className='right'>
              <img className='three-line' src='https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp'alt='three-line' />
              <img className='my-profile' src='https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp'alt='my-profile' />
            </div>
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