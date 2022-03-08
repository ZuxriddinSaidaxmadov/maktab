import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Botir.png';
import Button from '@material-ui/core/Button';


const BotirCard = () => {
  return (
    <a href='/botir'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Тўйинов Ботир Исматович</p>
              </div>
            </div>
            
      </div>
    </a> 

    
  );
};

export default BotirCard;
