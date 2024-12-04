import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar';
import Logo from '../../images/logo.svg'
import Footer from '../../components/footer';
import Shop from '../../components/Shop';

const ShopPage = ({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const products = productsArray

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <section className="wpo-shop-page section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Shop
                                addToCartProduct={addToCartProduct}
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);