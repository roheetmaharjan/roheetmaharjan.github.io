import './App.css';

//Image
import ProfileImg from "./images/profile-2.jpg";
import Img10 from "./images/screen/10.png";
import Img11 from "./images/screen/11.png";
import Img12 from "./images/screen/12.png";
import Img13 from "./images/screen/13.png";
import Img14 from "./images/screen/14.png";
import Img15 from "./images/screen/medical.png";
import Img16 from "./images/screen/multiple.png";
import Img17 from "./images/screen/corporate.png";
import Img18 from "./images/screen/pathao.jpg";
import Img19 from "./images/screen/marketing.jpg";
import Img20 from "./images/screen/consult.png";
import Img21 from "./images/website/glinde.jpg";
import Img22 from "./images/screen/sports.png";
import Img23 from "./images/website/id.png";
import Img24 from "./images/website/visiting-card1.png";
import Img25 from "./images/website/visiting-card2.png";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="col-sm-4">
            <div class="left-head">
                <div class="my-profile">
                    <div class="profile-image">
                        <img src={ProfileImg} alt="Rohit Maharjan" />
                    </div>
                    <h3 class="name">Rohit Maharjan</h3>
                    <p class="my-tag">UI/UX Designer | Front-End Developer</p>
                    <div class="my-info">
                        <p>I'm a digital product designer with a strong belief in simplicity, delightful experiences, and human centered design. I craft digital products for web and mobile apps</p>
                    </div>
                    <ul class="social-media">
                        <li><a href="https://www.facebook.com/rohit.maharjan133/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/maroheet" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/rohit.mhz/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://dribbble.com/roheet_maharjan" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                        <li><a href="mailto:swift.rohit13@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-sm-8">
            <div class="content-area">
                <section id="portfolio-section" class="portfolio">
                    <div class="container">
                        <div class="section-title">
                            <div class="box">
                            </div>
                            <div class="title">
                                <h3>My Work</h3>
                            </div>
                        </div>
                        <div id="filters" class="button-group">
                            <button class="button is-checked" data-filter="*">all</button>
                            <button class="button" data-filter=".website">Websites</button>
                            <button class="button" data-filter=".graphic">Graphics</button>
                        </div>
                        <div class="grid">
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img10} /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img11} /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img12} /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img13} /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img14} /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img15} alt="medical" /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img16} alt="medical" /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img17} alt="medical" /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img18} alt="medical" /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img19} alt="medical" /></a>
                            </div>
                            <div class="element-item website" data-category="website">
                                <a href=""><img src={Img20} alt="medical" /></a>
                            </div>
                            <div class="element-item graphic" data-category="graphic">
                                <a href=""><img src={Img21} alt="graphic" /></a>
                            </div>
                            <div class="element-item graphic" data-category="graphic">
                                <a href=""><img src={Img22} alt="graphic" /></a>
                            </div>
                            <div class="element-item graphic" data-category="graphic">
                                <a href=""><img src={Img23} alt="graphic" /></a>
                            </div>
                            <div class="element-item graphic" data-category="graphic">
                                <a href=""><img src={Img24} alt="graphic" /></a>
                            </div>
                            <div class="element-item graphic" data-category="graphic">
                                <a href=""><img src={Img25} alt="graphic" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
