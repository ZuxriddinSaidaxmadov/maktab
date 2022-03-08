import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Eldor.png';
import Button from '@material-ui/core/Button';


const ZiyodullaCard = () => {
  return (
    <a  href='/eldor'>
      <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Рўзимаҳматов Элдорбек Умид ўғли</p>
              </div>
            </div>
            
      </div>
    </a> 

    
  );
};

export default ZiyodullaCard;
