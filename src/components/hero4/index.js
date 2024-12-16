import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-4.jpg'
import hero2 from '../../images/allimg/HomeSlider/one.jpg'
import hero3 from '../../images/slider/slide-5.jpg' 
import SUNRISE from '../../images/allimg/HomeSlider/1.webp' 



class Hero4 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-hero-slider wpo-hero-style-3">
                <div className="wpo-line-animated">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="hero-container">
                    <div className="hero-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>WHITE HOUSE</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/Whitehouse" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>GARDEN VILLA</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/GardenVilla" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>COTTAGE HOUSE</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/CottageHouse" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>HILL TOP VILLA</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/TopVilla" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${SUNRISE})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>SUNRISE HOME</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/SunriseHome" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>CHALET LABONNE</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/ChaletLabonne" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-slide">
                                <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>VIEWPOINT OASIS</h2>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/ViewPoint" className="theme-btn">Stay With US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero4;