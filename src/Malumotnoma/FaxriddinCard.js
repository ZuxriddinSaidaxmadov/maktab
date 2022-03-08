import React from 'react';
import '../css/Ustozlar.css';
import faxriddin from '../Images/Faxriddin.png';


const FaxriddinCard = () => {
  return (
    <a  href='/faxriddin'>
      <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={faxriddin} alt="rasm" />
                <p className='cardTitle'>Юсупов Фахриддин Бахтиёрович</p>
              </div>
            </div>
    </div>
    </a> 

    
  );
};

export default FaxriddinCard;
