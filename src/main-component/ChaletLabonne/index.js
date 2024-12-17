import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/allimg/greenlogo.webp'
import abimg from '../../images/about.jpg'
import WhiteVillabook from '../../components/WhiteVillabook';
import Discuss from '../ServiceSinglePage/discuss';
import RelatedProject from '../ProjectSinglePage/related';
import BlogList from '../../components/BlogList';
import Offer from '../../components/Offer';
import gameimg from '../../images/icons/game room.png'
import HIghspeed from '../../images/icons/HIghspeed.png'
import Outdoor from '../../images/icons/Outdoor.png'
import DRIVERS from '../../images/icons/DRIVERS.png'
import Hall from '../../images/icons/Hall.png'
import cleaning from '../../images/icons/cleaning.png'
import Kitchen from '../../images/icons/Kitchen.png'
import i24 from '../../images/icons/i24.png'
import ChaletBook from '../../components/ChaletBook';
import ViewPointImg from '../../components/ViewPointImg';
import ChaletLabonneImg from '../../components/ChaletLabonneImg';
import img1 from '../../images/allimg/chalet/1.webp'
import Chalettop from '../../images/allimg/top/Chalettop.webp'
const ChaletLabonne =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Chalet Labonne'} src={Chalettop}/> 
           
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                    
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>Chalet La Bonne Vie  2-BHK with Fully Modern Furnished</h3>
                                            </div>
                                            <p>Chalet La Bonne Vie is a luxurious 2-BHK homestay that offers a perfect blend of modern comfort and serene natural beauty. Featuring a fully equipped modern kitchen, this charming retreat ensures a cozy and convenient stay for guests.</p>
                                            <p> What sets Chalet La Bonne Vie apart is its unique backyard—a beautiful bird sanctuary bustling with vibrant avian life, a farm with friendly domestic animals, and a tranquil fish pond situated right next to the rooms. Guests can enjoy stunning views of the bird sanctuary and farm directly from their room, creating an immersive experience in nature. Whether you’re seeking relaxation or a connection with the outdoors, Chalet La Bonne Vie is the ideal escape.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Property Type :<span>Chalet La Bonne Vie</span></li>
                                                    <li>Capacity :<span>10+ Guests</span></li>
                                                    <li>Rooms :<span>2 BHK with A/C</span></li>
                                                    <li>Location:<span>Udupi, Karnataka</span></li>
                                                    <li>Features :<span>Ideal for Couples and Family</span></li>
                                                    <li>Facilities :<span>Free Wi-Fi, Fully Equipped Kitchen, Parking</span></li>
                                                    {/* <li>Share :<span>Architectural, Business</span></li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="wpo-project-single-main-img">
                                        <img src={img1} alt=""/>
                                    </div>
                                    {/* <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Our Strategies</h3>
                                                </div>
                                                <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                    quam. Id
                                                    risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                    sollicitudin diam.</p>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                    <li>Elit curabitur amet risus bibendum.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-item-quote">
                                                    <p>"Amazing looking theme and instantly turns your application into a great
                                                        looking one. Really shows that pro_ fessionals built this theme up. Very
                                                        happy with the way the theme looks ."</p>
                                                    <span>Robert - <span>Yellow Theme</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="wpo-service-single-item">
            <div className="wpo-service-single-title">
                <h3>Facilities</h3>
            </div>
            <div className="wpo-service-area">
                <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning'></i>
                                <h5>Spacious Hall (10-12 Person)</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning'></i>
                                <h5> Game Room
                                (Roof Top)</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 style={{textAlign:"center"}}>Outdoor
                                BBQ</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 >High-speed
                                Internet</h5>
                            </div>
                        </div>


                        
                </div>
            </div>
            <div className="wpo-service-area" style={{marginTop:'-190px'}}>
                <div className="row align-items-center">
                        
                    <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 > Drivers
                                Accommodation</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 > Complete
                                Kitchen Utensils</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 > 24 Hrs
                                Water & Electriciy</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                                <i className='fi flaticon-planning' ></i>
                                <h5 > Free
                                Cleaning</h5>
                            </div>
                        </div>

                        
                </div>
            </div>
        </div> */}
                                    <div >
                                    <ChaletBook/>
                                    </div>
                                    {/* <div className="wpo-project-single-item">
                                        <div className="wpo-project-single-title">
                                            <h3>Our approach</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                            tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                            eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                            elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                            id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                            adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                            vulputate diam interdum morbi ac a.</p>
                                    </div> */}
                                    {/* <div className="wpo-project-single-gallery">
                                        <div className="row mt-4">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src='https://arkio-react.wpocean.com/static/media/p2.2b3319864ab05fdaa9bd.jpg' alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src='https://arkio-react.wpocean.com/static/media/p1.6722c8372f0f23e2737c.jpg' alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Resieved goals</h3>
                                                </div>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 list-widget-s">
                                                <div className="wpo-project-single-title">
                                                    <h3>Results</h3>
                                                </div>
                                                <ul>
                                                    <li>Mauris dignissim blandit cursus imperdiet accumsan lorem.</li>
                                                    <li>Nam id in non sed cras purus nunc et.</li>
                                                    <li>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                                                    <li>Quis mauris vel felis convallis nulla dignissim.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <BlogList/> */}
                                    {/* <RelatedProject/>
                                    <Discuss/> */}

        <BlogList/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <ChaletLabonneImg/>

  <div className="wpo-project-single-area" style={{marginTop:'20px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    
                               
                                   
                               
                                   
                                    <div className="wpo-service-single-item">
            <div className="wpo-service-single-title">
                <h3>Facilities</h3>
            </div>
            <div className="wpo-service-area">
                <div className="row align-items-center">
                    {/* {Services.slice(0,3).map((service, sitem) => ( */}
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Hall}></img>
                            {/* <i className='fi flaticon-planning' ></i> */}
                                <h5>Spacious Hall (10-12 Person)</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={gameimg}></img>
                                <h5> Game Room
                                (Roof Top)</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Outdoor}></img>
                                <h5 style={{textAlign:"center"}}>Outdoor
                                BBQ</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={HIghspeed}></img>
                                <h5 >High-speed
                                Internet</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>


                        
                    {/* ))} */}
                </div>
            </div>
            <div className="wpo-service-area" >
                <div className="row align-items-center">
                    {/* {Services.slice(0,3).map((service, sitem) => ( */}
                        
                    <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={DRIVERS}></img>
                                <h5 > Drivers
                                Accommodation</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Kitchen}></img>
                                <h5 > Complete
                                Kitchen Utensils</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={i24}></img>
                                <h5 > 24 Hrs
                                Water & Electriciy</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={cleaning}></img>
                                <h5 > Free
                                Cleaning</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>

                        
                    {/* ))} */}
                </div>
            </div>
        </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* <Testimonial/> */}
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ChaletLabonne;
