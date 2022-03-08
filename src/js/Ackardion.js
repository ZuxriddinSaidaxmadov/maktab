import React from 'react';
import '../css/Galereya.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../Galereya/Img1.jpg';
import img2 from '../Galereya/Img2.jpg';
import img3 from '../Galereya/Img3.jpg';
import Img1 from '../Galereya/Img1.jpg';
import Img2 from '../Galereya/Img2.jpg';
import Img3 from '../Galereya/Img3.jpg';
import Img4 from '../Galereya/Img4.jpg';
import Img5 from '../Galereya/Img5.jpg';
import Img6 from '../Galereya/Img6.jpg';
import Img7 from '../Galereya/Img7.jpg';
import Img8 from '../Galereya/Img8.jpg';
import Img9 from '../Galereya/Img9.jpg';
import { SRLWrapper } from "simple-react-lightbox";





const handleDragStart = (e) => e.preventDefault();

const items = [
      <img src={img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={img2} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={img3} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img2} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img3} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img4} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img5} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img6} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img7} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img8} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
      <img src={Img9} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
];


const Ackardion = () => {
    return (
        <div>
             <div className='container-fluid' id='container'>
                <div className='row' style={{margin: '0px'}}>
                    <div className='col-md-4' id='col4'>
                      <ul style={{padding: '0px'}}>
                        <h1 className='ackardionTitle'>Galereya</h1>
                        <p>Maktabimiz rasimlari. Aniqroq ko'rish uchun rasim ustiga bosing</p>
                      
                      </ul>
                    </div>
                <div className='col-md-8 coruselBox'>
  
  
                  <SRLWrapper>
                  <AliceCarousel 
                mouseTracking items={items} 
                autoPlay={true}
                autoPlayInterval={1500}
                infinite={true}
                disableButtonsControls={true}
                />

                  </SRLWrapper>
                
                </div>
                </div>
            </div>
        </div>
    );
};


export default Ackardion;