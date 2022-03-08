import React from 'react';
import '../css/Ustozlar.css';
import esongul from '../Images/Esongul.png';
import Button from '@material-ui/core/Button';


const EsongulCard = () => {
  return (
    <a href='/esongul'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={esongul} alt="rasm" />
                <p className='cardTitle'>Юсупов Фахриддин Бахтиёрович</p>
              </div>
            </div>
      </div>
    </a> 

    
  );
};

export default EsongulCard;
