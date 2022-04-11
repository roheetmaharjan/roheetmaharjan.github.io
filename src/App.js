import './App.css';
import ProfileImage from "./images/profile-2.jpg";

import Image10 from "./images/screen/10.png";
import Image11 from "./images/screen/11.png";
import Image12 from "./images/screen/12.png";
import Image13 from "./images/screen/13.png";
import Image14 from "./images/screen/14.png";

function App() {
  return (
    <div className="row">
        <div className="col-sm-4">
            <div className="left-head">
                <div className="my-profile">
                    <div className="profile-image">
                        <img src={ ProfileImage } alt="Rohit Maharjan" />
                    </div>
                    <h3 className="name">Rohit Maharjan</h3>
                    <p className="my-tag">UI/UX Designer | Front-End Developer</p>
                    <div className="my-info">
                        <p>I'm a digital product designer with a strong belief in simplicity, delightful experiences, and human centered design. I craft digital products for web and mobile apps</p>
                    </div>
                    <ul className="social-media">
                        <li><a href="https://www.facebook.com/rohit.maharjan133/" target="_blank"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/maroheet" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/rohit.mhz/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://dribbble.com/roheet_maharjan" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="mailto:swift.rohit13@gmail.com" target="_blank"><i className="far fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm-8">
            <div className="content-area">
                <section id="portfolio-section" className="portfolio">
                    <div className="container">
                        <div className="section-title">
                            <div className="box">
                            </div>
                            <div className="title">
                                <h3>My Work</h3>
                            </div>
                        </div>
                        <div id="filters" className="button-group">
                            <button className="button is-checked" data-filter="*">all</button>
                            <button className="button" data-filter=".website">Websites</button>
                            <button className="button" data-filter=".graphic">Graphics</button>
                        </div>
                        <div className="grid">
                            <div className="element-item website" data-category="website">
                                <a href=""><img src={Image10} /></a>
                            </div>
                            <div className="element-item website" data-category="website">
                                <a href=""><img src={Image11} /></a>
                            </div>
                            <div className="element-item website" data-category="website">
                                <a href=""><img src={Image12} /></a>
                            </div>
                            <div className="element-item website" data-category="website">
                                <a href=""><img src={Image13} /></a>
                            </div>
                            <div className="element-item website" data-category="website">
                                <a href=""><img src={Image14 } /></a>
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/medical.png" alt="medical"></a> */}
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/multiple.png" alt="medical"></a> */}
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/corporate.png" alt="medical"></a> */}
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/pathao.jpg" alt="medical"></a> */}
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/marketing.jpg" alt="medical"></a> */}
                            </div>
                            <div className="element-item website" data-category="website">
                                {/* <a href=""><img src="images/screen/consult.png" alt="medical"></a> */}
                            </div>
                            <div className="element-item graphic" data-category="graphic">
                                {/* <a href=""><img src="images/website/glinde.jpg" alt="graphic"></a> */}
                            </div>
                            <div className="element-item graphic" data-category="graphic">
                                {/* <a href=""><img src="images/screen/sports.png" alt="graphic"></a> */}
                            </div>
                            <div className="element-item graphic" data-category="graphic">
                                {/* <a href=""><img src="images/website/id.png" alt="graphic"></a> */}
                            </div>
                            <div className="element-item graphic" data-category="graphic">
                                {/* <a href=""><img src="images/website/visiting-card1.png" alt="graphic"></a> */}
                            </div>
                            <div className="element-item graphic" data-category="graphic">
                                {/* <a href=""><img src="images/website/visiting-card2.png" alt="graphic"></a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default App;
