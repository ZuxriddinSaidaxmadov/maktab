import React from 'react';
import '../css/Ustozlar.css';
import dekan from '../Images/Dekan.png';


const BaxtiyorCard = () => {
  return (
    <a  href='/baxtiyor'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={dekan} alt="rasm" />
                <p className='cardTitle'>Шарипов Бахтиёр Михлибаевич</p>
              </div>
            </div>
      </div>
    </a> 

    
  );
};

export default BaxtiyorCard;
