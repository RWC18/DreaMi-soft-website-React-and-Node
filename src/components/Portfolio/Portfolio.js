import React from 'react';
import './Portfolio.scss'


//images
import pythTable from '../../img/table.jpg';
import calc from '../../img/calc.jpg';
import chipset from '../../img/chipset.gif';
import burger from '../../img/burger.jpg';

const Portfolio = () => {
    return(
        <section className="portfolio">
            <div className="midSection"> </div>
            <div className="portfolio_section">
                <h2>Portfolio</h2>
                <h4>Websites</h4>
                    <ul>
                        <li>
                            <img src={burger} alt="burger builder"/>
                            <div>
                                <p>Burger Builder</p>
                                <a href="https://burger--builder.herokuapp.com/" target="_blank">
                                    <i className="fas fa-link"> </i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={chipset} alt="burger builder"/>
                            <div>
                                <p>Computer repair service</p>
                                <a href="https://vahe-minasyan.herokuapp.com/" target="_blank">
                                    <i className="fas fa-link"> </i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={calc} alt="burger builder"/>
                            <div>
                                <p>Online calulator</p>
                                <a href="https://calculator-redux.herokuapp.com/" target="_blank">
                                    <i className="fas fa-link"> </i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <img src={pythTable} alt="burger builder"/>
                            <div>
                                <p>Pythagoras table for school</p>
                                <a href="https://pythagoras-table.herokuapp.com/" target="_blank">
                                    <i className="fas fa-link"> </i>
                                </a>
                            </div>
                        </li>
                    </ul>


                <h4>Graphic Arts</h4>
                <ul>
                    <li>
                        <img src={burger} alt="burger builder"/>
                        <div>
                            <p>Burger Builder</p>
                            <a href="https://burger--builder.herokuapp.com/" target="_blank">
                                <i className="fas fa-link"> </i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={chipset} alt="burger builder"/>
                        <div>
                            <p>Computer repair service</p>
                            <a href="https://vahe-minasyan.herokuapp.com/" target="_blank">
                                <i className="fas fa-link"> </i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={calc} alt="burger builder"/>
                        <div>
                            <p>Online calulator</p>
                            <a href="https://calculator-redux.herokuapp.com/" target="_blank">
                                <i className="fas fa-link"> </i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <img src={pythTable} alt="burger builder"/>
                        <div>
                            <p>Pythagoras table for school</p>
                            <a href="https://pythagoras-table.herokuapp.com/" target="_blank">
                                <i className="fas fa-link"> </i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};


export default Portfolio;