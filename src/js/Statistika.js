import React from 'react';
import img from '../document/Yonalishlar.pdf';

const Statistika = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
                <section id="why-us" class="why-us">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          {/* <h2>asdasdad</h2> */}
          <p>Maktabimiz statistikasi</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" data-aos="zoom-in" data-aos-delay="100">
              <img width={200} src='https://codecraft.uz/static/media/image2.1b95890f.png' />
              <span>797+</span>
              <h4>O'quvchilar soni</h4>
              <p>Chilonzor tumani 2-Sonli kasb hunar maktabi o'quvchilari soni</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <a href={img}>
            <div class="box" data-aos="zoom-in" data-aos-delay="200">
              <img width={200} src='https://codecraft.uz/static/media/team.56e96e9b.png' />
              <span>9</span>
              <h4>Yo'nalishlar soni</h4>
              <p>Chilonzor tumani 2-sonli kasb hunar maktabining kasb yo'nalishlari</p>
            </div>
            </a>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="300">
            <img width={200} src='https://codecraft.uz/static/media/glob.46ba59f8.png' />
              <span>17</span>
              <h4>O'qituvchilar soni</h4>
              <p>Chilonzor tumani 2-sonli kasb hunar maktabining o'qituvchilari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};


export default Statistika;