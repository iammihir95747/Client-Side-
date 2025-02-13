import React from 'react'
import './Home.css';
import DataImage from '../assets/Data.jpg';

const Homepage = () => {
  return (
    <div className='homebox'>
      <div className="homepagecss">
        <div className='hb'> <>  &nbsp; Your Next&nbsp;
          <br />Interactive Experience</></div>
        <div className='powerby'></div>
      </div>
      <div className='usercards'>
        <div className="usertext">Delivering Creative Strategy</div>
      </div>
      <hr className='homehr' />


      <div className="slide1">
        <div className="slidetitle">
          <h3>Our Best Colabration With Brands.</h3>
          <div className="slideimg">
          </div>
          <div className="slide-content"></div>
        </div>
      </div>

      <div className='card-container'>
        <div className="card">
          <div className="cardimage">
            <img src={DataImage} alt="" height={500} className="dataimg" />
          </div>
          <div className="card-content">
            <h3>Explore More Features</h3>
            <p>this is the card description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
