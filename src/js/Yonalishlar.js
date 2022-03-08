import React from 'react';
import '../css/Yonalishlar.css';
import kasb1 from '../Images/kasb1.jpg';
import kasb2 from '../Images/kasb2.jpg';
import kasb3 from '../Images/kasb3.jpg';
import kasb4 from '../Images/kasb4.jpg';




const Yonalishlar = () => {
    return (
        <div>
            <div style={{backgroundColor: 'white'}}>
                <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          {/* <h2>Why Us</h2> */}
          <p>Kasblar</p>
        </div>

        <div class="row">

          <div class="col-12" style={{marginBottom: '30px'}}>
            <div class="box" id='box' data-aos="zoom-in" data-aos-delay="100">
                <div className='row'>
                    <div className='col-6'>
                         <img width={'100%'} src={kasb1} />
                    </div>
                    <div className='col-6'>
                        <h4 id='boxTitle1'>Avtomobillarni tamirlash chilangari</h4>
                        <p id='boxTitle'>Avtomobillarni tamirlash chilangari</p>
                    </div>
                </div>
                <br />
            </div>
          </div>
          {/* 1 */}
          <div class="col-12" style={{marginBottom: '30px'}}>
            <div class="box" id='box' data-aos="zoom-in" data-aos-delay="100">
                <div className='row'>
                    <div className='col-6'>
                         <img width={'100%'} src={kasb2} />
                    </div>
                    <div className='col-6'>
                        <h4 id='boxTitle1'>Bank nazoratchisi</h4>
                        <p id='boxTitle'>Bank nazoratchisi, Kassir</p>
                    </div>
                </div>
                <br />
            </div>
          </div>
          {/* 2 */}
          <div class="col-12" style={{marginBottom: '30px'}}>
            <div class="box" id='box' data-aos="zoom-in" data-aos-delay="100">
                <div className='row'>
                    <div className='col-6'>
                         <img width={'100%'} src={kasb3} />
                    </div>
                    <div className='col-6'>
                        <h4 id='boxTitle1'>Tikuvchi</h4>
                        <p id='boxTitle'>Ayollar kiyim tikuvchisi, Erkaklar kiyim tikuvchisi, Bolalar kiyim tikuvchisi, Ustki kiyim tikuvchisi.</p>
                    </div>
                </div>
                <br />
            </div>
          </div>
          {/* 3 */}
          <div class="col-12" style={{marginBottom: '30px'}}>
            <div class="box" id='box' data-aos="zoom-in" data-aos-delay="100">
                <div className='row'>
                    <div className='col-6'>
                         <img width={'100%'} src={kasb4} />
                    </div>
                    <div className='col-6'>
                        <h4 id='boxTitle1'>Raqamli axborotni qayta ishlash ustasi</h4>
                        <p id='boxTitle'>Raqamli axborotni qayta ishlash ustasi, WEB kontent administratori</p>
                    </div>
                </div>
                <br />
            </div>
          </div>
          {/* 4 */}

          
        </div>
      </div>
    </section>
        </div>
        </div>
    );
};


export default Yonalishlar;