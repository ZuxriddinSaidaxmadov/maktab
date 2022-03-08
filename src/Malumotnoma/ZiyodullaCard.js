import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Ziyodullo.png';
import Button from '@material-ui/core/Button';


const ZiyodullaCard = () => {
  return (
    <a href='/ziyodullo'>
      <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Суяров Зиёдулло Аширович</p>
              </div>
            </div>
      </div>
    </a> 

    
  );
};

export default ZiyodullaCard;
