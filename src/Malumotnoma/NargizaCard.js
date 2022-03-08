import React from 'react';
import '../css/Ustozlar.css';
import ziyodullo from '../Images/Nargiza.png';


const NargizaCard = () => {
  return (
    <a href='/nargiza'>
        <div className='ustozlar' >
      <div className='ustozCard'>
              <div className='cardContend'>
                <img className='cardImg' src={ziyodullo} alt="rasm" />
                <p className='cardTitle'>Рахмонқулова Наргиза Ҳикматжон қизи</p>
              </div>
            </div>
      </div>
    </a> 

    
  );
};

export default NargizaCard;
