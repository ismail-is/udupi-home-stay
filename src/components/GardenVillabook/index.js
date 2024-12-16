import React from 'react';
import ContactForm from '../ContactFrom';
import BookingForm from '../BookingForm';
import CheckWrap from '../CheckWrap';
import { Grid, makeStyles } from '@material-ui/core';
import WhiteVillaform from '../WhiteVillaform';
import Offer from '../Offer';
import GardenVillaform from '../GardenVillaform';

const useStyles = makeStyles((theme) => ({
    sticker: {
      position: "absolute", // Position the sticker absolutely within the parent
      right: "5px", // Align to the right side
      top: "35px", // Vertical alignment
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "120px", // Width of the circle
      height: "120px", // Height of the circle
      textAlign: "center",
      background: "linear-gradient(294deg, rgb(134 18 176 / 45%), rgb(150, 176, 18))",
      color: "#fff",
      borderRadius: "50%", // Make it a perfect circle
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.8s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    ribbon1: {
      position: "absolute",
      top: "15px",
      right: "-70px",
      background: "#ffd700",
      color: "#333",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "5px 10px",
      transform: "rotate(15deg)",
      borderRadius: "5px",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      animation: "rotateRibbon 2s infinite", // Add animation here
      "&:hover": {
        transform: "rotate(10deg)",
      },
    },
    "@keyframes rotateRibbon": {
      "0%, 100%": {
        transform: "rotate(15deg)",
      },
      "50%": {
        transform: "rotate(10deg)",
      }
    }
}));

const GardenVillabook = () => {
    const classes = useStyles();
    
    return(
        <section className="wpo-contact-pg-section section-padding " style={{marginTop:'-90px',marginBottom:'150px'}}>
            <div className="container" >
                
                <div className="row">
                
                    <div className="col col-lg-12" >
                       
                        <div className="wpo-contact-form-area" style={{ borderRadius: "4px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", background: "linear-gradient(232deg, #96b01280, #96b012)", }}>
                            <div className={classes.ribbon1}>Book Now to<br/> Get 10% Off</div>
                            <GardenVillaform />
                        </div>

                    </div>                
                </div>
                
            </div> 
        </section>
    );
};

export default GardenVillabook;
