import React from 'react';
import '../css/Ustozlar.css';
import qasim from '../Images/Qasim.png';
import Button from '@material-ui/core/Button';


const ZiyodullaCard = () => {
  return (
    <a href='/qasim'>
      <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={qasim} alt="rasm" />
                <p className='cardTitle'>Рахимов Касим Каримович</p>
              </div>
            </div>
    </div>
    </a> 

  );
};

export default ZiyodullaCard;
