import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header">
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={props.Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/home">Home Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home2">Home Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home3">Home Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home4">Home Style 4</Link></li>
                                                <li><Link onClick={ClickHandler} to="/home5">Home Style 5</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        {/* <li className="menu-item-has-children">
                                            <Link to="/service">Service</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/service">Service</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-s2">Service S2</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/1">Service Single</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} to="/project">Home Stays </Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} to="/Whitehouse">WHITE HOUSE</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/GardenVilla">GARDEN VILLA</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/CottageHouse">COTTAGE HOUSE</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/TopVilla">HILL TOP VILLA</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/SunriseHome">SUNRISE HOME</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/ChaletLabonne">CHALET LA BONNE VIE</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/ViewPoint ">VIEWPOINT OASIS</Link></li>
                                                    {/* <li><Link onClick={ClickHandler} to="/project-s2">Project S2</Link></li>
                                                    <li><Link onClick={ClickHandler} to="/project-single/1">Project Single</Link></li> */}
                                                </ul>
                                            </li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/blog">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} to="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} to="/product-single/1">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} to="/team-single/1">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} to="/Catering">Catering </Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi ti-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link to="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link to="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);