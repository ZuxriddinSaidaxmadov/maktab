import React from 'react';
import Statistika from './Statistika';
import '../css/Style.css';
import '../css/Navbar.css';
import '../css/Galereya.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Img1 from '../Galereya/Img1.jpg';
import Ackardion from './Ackardion';
import Yonalishlar from './Yonalishlar';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
  <img src={Img1} className='galereyaCoruselImg' onDragStart={handleDragStart} />,
];


const Navbar = () => {
    return (
        <div>





    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="https://d7rh5s3nxmpy4.cloudfront.net/CMP1431/1/LHIL153BI25428_USA_000041_Roosevelt_High_School_IMD.JPG" alt="" />
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- ======= Why Us Section ======= --> */}



    <Statistika />
    <Yonalishlar />
    <Ackardion />

    
        </div>
    );
};


export default Navbar;