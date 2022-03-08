import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Nigora.png';
import Button from '@material-ui/core/Button';


const NigoraCard = () => {
  return (
    <a href='/nigora'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Умарова Нигора Искандаровна</p>
              </div>
            </div>
    </div>
    </a> 

    
  );
};

export default NigoraCard;
