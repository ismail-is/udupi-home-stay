import React from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../api/CottageImg'
import SectionTitle from '../SectionTitle';

const CottageHouseImg = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className="wpo-project-area-s2 section-padding" style={{marginTop:'-300px'}}> 
            <div className="container">
                {/* <SectionTitle subTitle={'Udupi Homestay'} MainTitle={'Our Homestays '}/> */}
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {Projects.slice(0, 10).map((project, pot) => (
                                            <div className="grid" key={pot}>
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img src={project.pImg} alt="" />
                                                        <div className="left-border"></div>
                                                        {/* <div className="left-border1">lo</div> */}
                                                        <div className="right-border"></div>
                                                    </div>
                                                    {/* <div className="wpo-project-text">
                                                        <h2><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}>{project.title}</Link></h2>
                                                        <span>{project.subTitle}</span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default CottageHouseImg;

