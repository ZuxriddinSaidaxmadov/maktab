import React from 'react';
import ziyodulla from '../Images/Eldor.png';


const Baxtiyor = () => {
    return (
        <div style={{color: 'black'}}>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-10'>
                        <h1 className='text-center'>МАЪЛУМОТНОМА</h1>
                        <h2 className='text-center'>Рўзимаҳматов Элдорбек Умид ўғли</h2>
                        <p>2021 йил 1 декабрдан:</p>
                        <p>Чилонзор туман 2-сон касб-ҳунар мактабининг - Ёшлар етакчиси</p>
                    </div>   
                    <div className='col-2'>
                        <img src={ziyodulla} />
                    </div>    
                </div> 
                <div className='row'>
                    <div className='col'>
                        <p className='h5'>Туғилган йили:</p>
                        <p>27.12.1997</p>
                        <p className='h5'>Миллати:</p>
                        <p>тожик</p>
                        <p className='h5'>Маълумоти:</p>
                        <p>олий</p>
                        <p className='h5'>Маълумоти бўйича мутахассислиги:</p>
                        <p className='h5'>Илмий даражаси:</p>
                        <p>йўқ</p>
                        <p className='h5'>Қайси чет тилларини билади:</p>
                        <p>рус тили луғат билан</p>
                        <p className='h5'>Давлат мукофотлари билан тақдирланганми (қанақа):</p>
                        <p>йўқ</p>
                        <p className='h5'>Халқ депутатлари, республика, вилоят, шаҳар ва туман Кенгаши депутатими ёки бошқа
сайланадиган органларнинг аъзосими (тўлиқ кўрсатилиши лозим)	</p>
                        <p>йўқ</p>
                    </div>
                    <div className='col'>
                    <p className='h5'>Туғилган жойи:</p>
                        <p>Сурхандарё вилояти, Музработ тумани</p>
                        <p className='h5'>Партиявийлиги:</p>
                        <p>йўқ</p>
                        <p className='h5'>Тамомлаган:</p>
                        <p>2020 й. Ислом Каримов номидаги Тошкент давлат техника университети (кундузги)</p>
                        <p>ерусти транспорт тизимлари ва уларданинг эксплуататсияси (транспорт турлари бўйича)</p>
                        <p className='h5'>Илмий унвони:</p>
                        <p>йўқ</p>
                        <p className='h5'>Ҳарбий (махсус) унвони:</p>
                        <p>йўқ</p>
                    </div>
                </div>
                <p className='h3'>МЕҲНАТ ФАОЛИЯТИ</p>
                <p>2016-2020 йй. - Ислом Каримов номидаги Тошкент давлат техника университетининг - талабаси (бакалавр)</p>
                <p>2021-2021 йй. - Чилонзор туман 2-сон касб-ҳунар мактабининг - Ахборот-ҳисоблаш тармоғи админстиратори</p>
                <p>2021 й. -  ҳ.в.  - Чилонзор туман 2-сон касб-ҳунар мактабининг - Ёшлар етакчиси</p>
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