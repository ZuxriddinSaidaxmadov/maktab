import React from 'react';
import '../css/Galereya.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Img1 from '../Galereya/Img1.jpg';
import Img01 from '../Galereya/Img01.jpg';
import Img2 from '../Galereya/Img2.jpg';
import Img3 from '../Galereya/Img3.jpg';
import Img4 from '../Galereya/Img4.jpg';
import Img5 from '../Galereya/Img5.jpg';
import Img6 from '../Galereya/Img6.jpg';
import Img7 from '../Galereya/Img7.jpg';
import Img8 from '../Galereya/Img8.jpg';
import Img9 from '../Galereya/Img9.jpg';
import Img10 from '../Galereya/Img10.jpg';
import Img11 from '../Galereya/Img11.jpg';
import { SRLWrapper } from "simple-react-lightbox";

const handleDragStart = (e) => e.preventDefault();


const items = [
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
];

const Galereya = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <div className='container' id='container'>
                <h1>Galereya</h1>
                <div className='row' style={{margin: '0px'}}>
                <div className='col-12 coruselBox'>
                <AliceCarousel 
                mouseTracking items={items} 
                autoPlay={true}
                autoPlayInterval={1500}
                infinite={true}
                disableButtonsControls={true}
                />
                </div>
                </div>
                        <a href='https://inha.uz/wp-content/uploads/2022/03/photo_2022-03-02-14.32.56-300x225.jpeg'>rasmlarni ko'rish</a>
                <SRLWrapper>
                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-4'>
                        <img id='rasmlar' className='galerey' src='https://inha.uz/wp-content/uploads/2022/03/photo_2022-03-02-14.32.56-300x225.jpeg' alt='rasim' width={'100%'}/>

                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img01} alt='rasim' width={'100%'}/>
                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img2} alt='rasim' width={'100%'}/>
                    </div>
                </div>

                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img3} alt='rasim' width={'100%'}/>

                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img4} alt='rasim' width={'100%'}/>
                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img5} alt='rasim' width={'100%'}/>
                    </div>
                </div>

                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img6} alt='rasim' width={'100%'}/>

                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img7} alt='rasim' width={'100%'}/>
                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img8} alt='rasim' width={'100%'}/>
                    </div>
                </div>

                <div className='row' style={{marginTop: '50px'}}>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img9} alt='rasim' width={'100%'}/>

                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img10} alt='rasim' width={'100%'}/>
                    </div>
                    <div className='col-md-4'>
                        <img className='galerey' src={Img11} alt='rasim' width={'100%'}/>
                    </div>
                </div>
                </SRLWrapper>



                
            </div>
        </div>
    );
};


export default Galereya;