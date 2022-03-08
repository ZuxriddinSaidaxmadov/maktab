import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css/Ustozlar1.css';
import BaxtiyorCard from '../Malumotnoma/BaxtiyorCard';
import FaxriddinCard from '../Malumotnoma/FaxriddinCard';
import EsongulCard from '../Malumotnoma/EsongulCard';
import ZiyodullaCard from '../Malumotnoma/ZiyodullaCard';
import QasimCard from '../Malumotnoma/QasimCard';
import NargizaCard from '../Malumotnoma/NargizaCard';
import EldorCard from '../Malumotnoma/EldorCard';
import NigoraCard from '../Malumotnoma/NigoraCard';
import MuhammadaliCard from '../Malumotnoma/MuhammadaliCard';
import BotirCard from '../Malumotnoma/BotirCard';

const Ustozlar2 = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div id='styleImg' className="item" data-value="1"><BaxtiyorCard /></div>,
        <div id='styleImg' className="item" data-value="2"><FaxriddinCard /></div>,
        <div id='styleImg' className="item" data-value="3"><EsongulCard /></div>,
        <div id='styleImg' className="item" data-value="4"><ZiyodullaCard /></div>,
        <div id='styleImg' className="item" data-value="5"><QasimCard /></div>,
        <div id='styleImg' className="item" data-value="6"><NargizaCard /></div>,
        <div id='styleImg' className="item" data-value="7"><EldorCard /></div>,
        <div id='styleImg' className="item" data-value="8"><NigoraCard /></div>,
        <div id='styleImg' className="item" data-value="9"><MuhammadaliCard /></div>,
        <div id='styleImg' className="item" data-value="10"><BotirCard /></div>,

    ];

    return (
        <>
        <div className='caruselImg'>
            <h1 className='coruselTitle' >MALUMOTNOMA</h1>
            <AliceCarousel
        mouseTracking
        items={items}
        paddingLeft={50}
        paddingRight={50}
        responsive={responsive}
        autoPlay={true}
        autoPlayInterval={1500}
        infinite={true}
        disableButtonsControls={true}
    />
        </div>
        </>
    );
};


export default Ustozlar2;