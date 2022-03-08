import React, {useEffect, useState} from 'react';
import '../css/Yangiliklar.css';
import yangilik1 from '../Images/Yangilik1.jpg';
import yangilik2 from '../Images/Yangilik2.jpg';
import video1 from '../videos/Video1.mp4'
import video2 from '../videos/video2.MOV';
import video3 from '../videos/video3.MOV';
import video4 from '../videos/video4.mp4';
import video5 from '../videos/video5.mp4';
import ReactPlayer from 'react-player'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Yangiliklar = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        AOS.init();
    })
    const videoStyle = {
        width: "100px"
    }
    return (
        <div className='container-fluid' id='yangiliklarBody' >
        <h1 className='topNav'>Yangiliklar</h1>
            <div className='row' style={{margin: '0px'}}>
                <div className='col-2' id='yangiliklarNav'>
                    <div className='position'>
                        <ul>
                            <a href='#id1'><li><NavigateNextIcon />Vazirlar maxkamasi</li></a>
                            <a href='#id2'><li><NavigateNextIcon />diniy ishlar qo'mitasi</li></a>
                            <a href='#id3'><li><NavigateNextIcon />Vatan himoyachilari kuni</li></a>
                            <a href='#id4'><li><NavigateNextIcon />Yosh dizaynerlar</li></a>
                            <a href='#id5'><li><NavigateNextIcon />Men qobilyatliman</li></a>
                            <a href='#id6'><li><NavigateNextIcon />8- dekabr</li></a>
                            <a href='#id7'><li><NavigateNextIcon />Zahiriddin Muhammad Bobur</li></a>
                        </ul>
                    </div>
                </div>
                <div className='col-10' id='yangiliklarContent' >
                <div className='container-fluid' id='yangilikbox'>
                    <div className='row' id="row">
                        <div className='col-6'><img data-aos="zoom-in-up" className='yangilikRasm' src={yangilik1}/></div>
                        <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id1'>Vazirlar maxkamasi</h1>
                            <p className='yangiliklarText'>Chilonzor tumani 2-sonli Kasb-hunar maktabida bugun Vazirlar mahkamasining huzuridagi diniy ishlar qo'mitasi Chilonzor tuman bosh mutahasisi Toshpo'latov Bahodir Nig'matovich tashrif buyurdilar "Jaholatka qarshi Ma'rifat" mavzusida o'quvchilar bilan davra suhbati o'tkazildi.</p>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                        <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id2'>Vazirlar maxkamasi</h1>
                            <p className='yangiliklarText'>Chilonzor tumani 2-sonli Kasb-hunar maktabida bugun Vazirlar mahkamasining huzuridagi diniy ishlar qo'mitasi Chilonzor tuman bosh mutahasisi Toshpo'latov Bahodir Nig'matovich tashrif buyurdilar "Jaholatka qarshi Ma'rifat" mavzusida o'quvchilar bilan davra suhbati o'tkazildi.</p>
                        </div>
                        <div className='col-6'><img data-aos="zoom-in-up" className='yangilikRasm' src={yangilik2}/></div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='yangilikRasm'>
                            <ReactPlayer
                            style={videoStyle}
                            url={video1}
                            playing = {false}
                            controls= {true}
                            width={"100%"}
                            height={"auto"}
                            volume={0.5}
                            />
                            </div>
                        </div>
                        <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id3'>Vatan himoyachilari kuni</h1>
                            <p className='yangiliklarText'>Chilonzor tumani 2-son kasb hunar maktabi 20-03 gurux oquvchisi Xolxojayeva Mohiraning 14- yanvar "Vatan himoyachilari kun"iga bagishlangan video roligi</p>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                    <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id4'>Yosh dizaynerlar</h1>
                            <p className='yangiliklarText'>Yengil sanoat va to'qimachilik instituti ,,Yosh dizaynerlar'' Respublika tanlovi o'tkazildi bu tanlovda Toshkent shahar Chilonzor tumuni 2-sonli Kasb hunar maktabi o'quvchilari Nabixo'jayev Xasan va Nabixo'jayev Xusanlar faol qatnashdilar. ,,Erkaklar poyavzali dizayni" naminatsiyasi bo'yicha Nabixo'jayev Xasan faxrli 2-o'rinni egalladi, ,,Bolalar poyavzali dizayni" naminatsiyasi bo'yicha Nabixo'jayev Xusan faxrli 2-o'rinni egallashdi va qimmat baxo sovg'alar bilan taqdirlanishdi </p>
                        </div>
                        <div className='col-6'>
                            <div className='yangilikVideo' style={{padding: 0}}>
                            <ReactPlayer
                            className='yangilikVideo'
                            style={videoStyle}
                            url={video2}
                            playing = {false}
                            controls= {true}
                            width={"100%"}
                            height={"auto"}
                            volume={0.5}
                            
                            />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='yangilikRasm'>
                            <ReactPlayer
                            style={videoStyle}
                            url={video3}
                            playing = {false}
                            controls= {true}
                            width={"100%"}
                            height={"auto"}
                            volume={0.5}
                            />
                            </div>
                        </div>
                        <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id5'>Men qobilyatliman</h1>
                            <p className='yangiliklarText'>Toshkent shahar Chilonzor tumani 2-sonli Kasb Hunar maktabida ,,Men qobilyatliman" shiori ostida ,,Pazandachilik", ,,Tikuvchilik" va ,,Rassomchilik" yo'nalishlarida o'tqazilgan bellashuvdan lavhalar</p>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                    <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id6'>8- dekabr</h1>
                            <p className='yangiliklarText'>O‘z ona tilini bilmagan odam o‘zining shajarasini, o‘zining ildizini bilmaydigan, kelajagi yo‘q odam, kishi tilini bilmaydigan uning dilini ham bilmaydi, deb juda to‘g‘ri aytishadi”. “Har qaysi millat, katta yo kichikligidan qat’iy nazar, o‘z ona tilini hurmat qilad</p>
                        </div>
                        <div className='col-6'>
                            <div className='yangilikVideo' style={{padding: 0}}>
                            <ReactPlayer
                            className='yangilikVideo'
                            style={videoStyle}
                            url={video4}
                            playing = {false}
                            controls= {true}
                            width={"100%"}
                            height={"auto"}
                            volume={0.5}
                            
                            />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid' id='yangilikbox'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='yangilikRasm'>
                            <ReactPlayer
                            style={videoStyle}
                            url={video5}
                            playing = {false}
                            controls= {true}
                            width={"100%"}
                            // height={""}
                            volume={0.5}
                            />
                            </div>
                        </div>
                        <div className='col-6' data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <h1 className="yangiliklarTitle" id='id7'>Zahiriddin Muhammad Bobur</h1>
                            <p className='yangiliklarText'>Toshken shahar Chilonzor tumani 2-sonli Kasb Hunar Maktbi Zahiriddin Muhammad Bobur tavalladdining 539 yilligi munosabati bilan 21-11 guruh oquvchilari Ergasheva Noila ,Tursunova Sevinch va 21-13 guruh o'quvchisi Mirsaidov Umar tomanidan tayyorlangan video  roligi .</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};


export default Yangiliklar;