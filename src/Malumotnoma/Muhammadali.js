import React from 'react';
import ziyodulla from '../Images/Muhammadali.png';


const Baxtiyor = () => {
    return (
        <div style={{color: 'black'}}>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-10'>
                        <h1 className='text-center'>МАЪЛУМОТНОМА</h1>
                        <h2 className='text-center'>Каримов Мухаммадали Сатволдиевич</h2>
                        <p>2021 йил 25 октябрдан:</p>
                        <p>Чилонзор туман 2-сон касб-ҳунар мактабининг - Психологи</p>
                    </div>   
                    <div className='col-2'>
                        <img src={ziyodulla} />
                    </div>    
                </div> 
                <div className='row'>
                    <div className='col'>
                        <p className='h5'>Туғилган йили:</p>
                        <p>11.02.1976</p>
                        <p className='h5'>Миллати:</p>
                        <p>ўзбек</p>
                        <p className='h5'>Маълумоти:</p>
                        <p>олий</p>
                        <p className='h5'>Маълумоти бўйича мутахассислиги:</p>
                        <p className='h5'>Илмий даражаси:</p>
                        <p>йўқ</p>
                        <p className='h5'>Қайси чет тилларини билади:</p>
                        <p>рус тили</p>
                        <p className='h5'>Давлат мукофотлари билан тақдирланганми (қанақа):</p>
                        <p>йўқ</p>
                        <p className='h5'>Халқ депутатлари, республика, вилоят, шаҳар ва туман Кенгаши депутатими ёки бошқа
сайланадиган органларнинг аъзосими (тўлиқ кўрсатилиши лозим)	</p>
                        <p>йўқ</p>
                    </div>
                    <div className='col'>
                    <p className='h5'>Туғилган жойи:</p>
                        <p>Қирғизистон Республикаси, Ўш вилояти</p>
                        <p className='h5'>Партиявийлиги:</p>
                        <p>йўқ</p>
                        <p className='h5'>Тамомлаган:</p>
                        <p>2000 й. Ўзбекистон миллий университети (кундузги)</p>
                        <p>психология</p>
                        <p className='h5'>Илмий унвони:</p>
                        <p>йўқ</p>
                        <p className='h5'>Ҳарбий (махсус) унвони:</p>
                        <p>йўқ</p>
                    </div>
                </div>
                <p className='h3'>МЕҲНАТ ФАОЛИЯТИ</p>
                <p>2003-2010 йй. - Тошкент юридик коллежининг - ўқитувчиси психологи</p>
                <p>2011-2012 йй. - Тошкент Қурилиш ва Миллий ҳунармандчилик касб-ҳунар коллежининг ўқитувчиси</p>
                <p>2014-2016 йй. - Метан ехперт сервис устаси</p>
                <p>2019-2021 йй. - Учтепа тумани 197-мактабнинг психологи</p>
                <p>2021 й. -  ҳ.в.  - Чилонзор туман 2-сон касб-ҳунар мактабининг - Психологи</p>
                    <br />
                <p className='h2'>Малумотнома паспорт, диплом ва меҳнат дафтарчасига асосан тўғри ёзилган</p>
                <div className='row'>
                    <div className='col'>
                        <p className='h4'>КҲМ директори:</p>
                        <p className='h4'>Кадрлар бўйича инспектори:</p>
                    </div>
                    <div className='col'>
                        <p className='h4'>  Б.И.Тўйинов</p>
                        <p className='h4'>  Ш.А.Райимқулов  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Baxtiyor;