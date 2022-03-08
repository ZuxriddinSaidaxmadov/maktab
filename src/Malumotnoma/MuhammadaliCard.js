import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Muhammadali.png';


const ZiyodullaCard = () => {
  return (
    <a  href='/muhammadali'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Каримов Мухаммадали Сатволдиевич</p>
              </div>
            </div>
      </div>
    </a> 

    
  );
};

export default ZiyodullaCard;
