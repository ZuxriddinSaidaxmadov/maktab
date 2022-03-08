import React from 'react';
import '../css/Ustozlar1.css';
import RoomIcon from '@material-ui/icons/Room';
import { YMaps, Map, Placemark, RouteButton } from 'react-yandex-maps';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logotip from '../Images/Logotip1.png';



const YandexMap = () => {
    return (
        <div style={{backgroundColor: 'black'}}>
            <div className='container-fluid' style={{paddingTop: '40px'}}>
                <div className='row' style={{paddingBottom: '50px'}}>
                    <div className='col-md-1'>
                        <img src={logotip} style={{borderRadius:'50%', width:'100px', textAlign: 'right'}} />
                    </div>
                    <div className='col-md-4'>
                        <h1 style={{fontSize: '20px', color:'#cda45e', paddingTop:'30px'}}>Chilonzor tumanidagi 2-sonli kasb hunar<br /> maktabining rasmiy sayti</h1>
                    </div>
                </div>
                <div className='row' style={{borderBottom:'solid white 1px', marginBottom: '20px', paddingBottom: '20px',}}>
                    <div className='col-md-8'>
                        <div className='IdMap'>
                        <YMaps>
                            <Map
                            width={'auto'}
                            height={400}
                                defaultState={{
                                center: [41.238440, 69.354800],
                                zoom: 12,
                                }}
                            >
                                <Placemark geometry={[41.238440, 69.354800]} />
                                <RouteButton options={{ float: 'right' }} />
                            </Map>
                        </YMaps>
                        </div>
                     </div>
                    <div className='col-md-4' id='location'>
                        <span style={{color: '#cda45e', fontSize:'30px'}}><RoomIcon fontSize='large'/> Manzil</span>
                        <p>111800, Tashkent region, Zangiota district, U. Yusupov str., 1. Telefon:<a href='tel:712705617'>71 270-56-17</a> </p>
                    </div>
            </div>
            <span style={{color: '#cda45e'}}>Kasb-hunar maktabi <FavoriteIcon className='futerSvg'/> Zuxriddin</span>
    </div>


            
        </div>
    );
};


export default YandexMap;