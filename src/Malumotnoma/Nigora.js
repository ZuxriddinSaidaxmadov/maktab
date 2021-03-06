import React from 'react';
import ziyodulla from '../Images/Nigora.png';


const Baxtiyor = () => {
    return (
        <div style={{color: 'black'}}>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-10'>
                        <h1 className='text-center'>МАЪЛУМОТНОМА</h1>
                        <h2 className='text-center'>Умарова Нигора Искандаровна</h2>
                        <p>2020 йил 2 ноябрдан:</p>
                        <p>Чилонзор туман 2-сон касб-ҳунар мактабининг - Кутубхоначи</p>
                    </div>   
                    <div className='col-2'>
                        <img src={ziyodulla} />
                    </div>    
                </div> 
                <div className='row'>
                    <div className='col'>
                        <p className='h5'>Туғилган йили:</p>
                        <p>25.07.1981</p>
                        <p className='h5'>Миллати:</p>
                        <p>ўзбек</p>
                        <p className='h5'>Маълумоти:</p>
                        <p>олий</p>
                        <p className='h5'>Маълумоти бўйича мутахассислиги:</p>
                        <p className='h5'>Илмий даражаси:</p>
                        <p>йўқ</p>
                        <p className='h5'>Қайси чет тилларини билади:</p>
                        <p>рус тили, инглиз тили</p>
                        <p className='h5'>Давлат мукофотлари билан тақдирланганми (қанақа):</p>
                        <p>йўқ</p>
                        <p className='h5'>Халқ депутатлари, республика, вилоят, шаҳар ва туман Кенгаши депутатими ёки бошқа
сайланадиган органларнинг аъзосими (тўлиқ кўрсатилиши лозим)	</p>
                        <p>йўқ</p>
                    </div>
                    <div className='col'>
                    <p className='h5'>Туғилган жойи:</p>
                        <p>Тошкент шаҳри</p>
                        <p className='h5'>Партиявийлиги:</p>
                        <p>йўқ</p>
                        <p className='h5'>Тамомлаган:</p>
                        <p>2006 й. Ўзбекистон миллий университети (магистр) (кундузги)</p>
                        <p>ижтимоий фалсафа</p>
                        <p className='h5'>Илмий унвони:</p>
                        <p>йўқ</p>
                        <p className='h5'>Ҳарбий (махсус) унвони:</p>
                        <p>йўқ</p>
                    </div>
                </div>
                <p className='h3'>МЕҲНАТ ФАОЛИЯТИ</p>
                <p>1999-2003 йй. - Ўзбекистон Миллий Универсетети талаба</p>
                <p>2004-2006 йй. - Ўзбекистон Миллий Универсетети талаба(магистр)</p>
                <p>2005-2011 йй. - Тошкент вилояти Зангиота тумани 45-мактабининг - ўқитувчи</p>
                <p>2011-2020 йй. - Тошкент банк ҳисоб-кредит коллежининг - ўқтувчиси</p>
                <p>2020-2020 йй. - Тошкент банк ҳисоб-кредит коллежининг - Ёшлар етакчиси</p>
                <p>2020 й. -  ҳ.в.  - Чилонзор туман 2-сон касб-ҳунар мактабининг - Кутубхоначи</p>
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