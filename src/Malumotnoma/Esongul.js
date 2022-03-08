import React from 'react';
import esongul from '../Images/Esongul.png';

const Esongul = () => {
    return (
        <div style={{color: 'black'}}>
            <div className='container text-start'>
                <div className='row'>
                    <div className='col-10'>
                        <h1 className='text-center'>МАЪЛУМОТНОМА</h1>
                        <h2 className='text-center'>Ҳикматова Эсангул Анарбаевна</h2>
                        <p>2020 йил 2 сентябрдан:</p>
                        <p>Чилонзор туман 2-сон касб-ҳунар мактабининг - Директорнинг ўқув ишлари бўйича ўринбосари</p>
                    </div>   
                    <div className='col-2'>
                        <img src={esongul} />
                    </div>    
                </div> 
                <div className='row'>
                    <div className='col'>
                        <p className='h5'>Туғилган йили:</p>
                        <p>17.10.1971</p>
                        <p className='h5'>Миллати:</p>
                        <p>тожик</p>
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
                        <p>Сирдарё вилояти, Фориш тумани</p>
                        <p className='h5'>Партиявийлиги:</p>
                        <p>йўқ</p>
                        <p className='h5'>Тамомлаган:</p>
                        <p>1993 й. Тошкент давлат аграр университети (кундузги)</p>
                        <p>бухгалтерия хисоби назорат ва хўжалик фаолияти таҳлили</p>
                        <p className='h5'>Илмий унвони:</p>
                        <p>йўқ</p>
                        <p className='h5'>Ҳарбий (махсус) унвони:</p>
                        <p>йўқ</p>
                    </div>
                </div>
                <p className='h3'>МЕҲНАТ ФАОЛИЯТИ</p>
                <p>1988-1993 йй. - Тошкент давлат аграр университетининг - талаба</p>
                <p>1993-1996 йй. - Тошкент вилояти Зангиота тумани Й Охунбобоев номли д/х нинг - хисобчи</p>
                <p>1996-1996 йй. - Давлат Суғурта Тошкент вилояти бошқармасининг - II-тоифали инспектори</p>
                <p>1997-1998 йй. - "Амир" Маъсуляти чекланган жамиятининг - иқтисодчи</p>
                <p>1999-2002 йй. - Тошкент банк ҳисоб-кредит коллежининг - ўқитувчи</p>
                <p>2002-2006 йй. - Тошкент банк ҳисоб-кредит коллежининг - услубчи</p>
                <p>2006-2007 йй. - Тошкент банк ҳисоб-кредит коллежининг - ўқитувчи</p>
                <p>2007-2008 йй. - Тошкент банк ҳисоб-кредит коллежининг - услубчи</p>
                <p>2008-2008 йй. - Тошкент банк ҳисоб-кредит коллежининг - Кундузги бўлими мудири</p>
                <p>2008-2009 йй. - Тошкент банк ҳисоб-кредит коллежининг - услубчи</p>
                <p>2009-2014 йй. - Тошкент банк ҳисоб-кредит коллежининг - ўқитувчи</p>
                <p>2014-2015 йй. - Тошкент банк ҳисоб-кредит коллежининг - Ўқув ишлари бўйича директори ўринбосари вазифасинин вақтинча бажарувчи</p>
                <p>2015-2020 йй. - Тошкент банк ҳисоб-кредит коллежининг - Ўқув ишлари бўйича директор ўринбосари</p>
                <p>2020 й. -  ҳ.в.  - Чилонзор туман 2-сон касб-ҳунар мактабининг - Директорнинг ўқув ишлари бўйича ўринбосари</p>
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


export default Esongul;