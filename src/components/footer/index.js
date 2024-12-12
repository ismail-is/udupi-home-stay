import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/allimg/udpi.webp'
// import Logo from '../../images/logo-2.svg'
import Projects from '../../api/project'



const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className={`wpo-site-footer ${props.ftClass}`}>
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt=""/></Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Viverra laoreet ultrices
                                donec placerat commodo elementum justo, consequat.</p>
                            <ul>
                            <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-youtube"></i>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-email"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Important Links </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single">Home</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single">Home Stays </Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/service-single">Catering </Link></li> */}
                                <li><Link onClick={ClickHandler} to="/service-single">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-location"></i>H.No. 4-4-95, Bhaghat  <br/> Singh Marg,Udupi 576101 </li>
                                    <li><i className="fi flaticon-telephone"></i> <a href='https://wa.me/918971220576 ' style={{color:"#FFFFF8"}}>+91 89712 20576  </a><br/>
                                    <a href='tel:+9180501 23132 ' style={{color:"#FFFFF8"}}>+91 80501 23132  </a> </li>
                                     
                                           


                                    <li><i className="fi flaticon-email"></i><a href='mailto:fahad@udupistay.com' style={{color:"#FFFFF8"}}>fahad@udupistay.com</a><br/>
                                    <a href='mailto:asif@udupistay.com' style={{color:"#FFFFF8"}}>asif@udupistay.com</a></li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Our Gallery</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0, 6).map((project, pot) => (
                                    <li key={pot}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <ul>
                            <li>&copy; 2024 udupistay. Design By <Link to="https://brightmedia.tech/" target='blank'>Bright Media </Link></li>
                            {/* <li><Link onClick={ClickHandler} to="/">Terms of use |</Link> <Link onClick={ClickHandler} to="/">Privacy Environmental Policy</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;