import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="header-sec">
        <div className="container">
          <div className="header-top">
            <div className="header-logo">
              <div className="logo">
                <img src="https://avada.com/wp-content/uploads/2021/07/avada-logo-svg.svg" />
              </div>
            </div>
            <div className="nav-menu">
              <nav>
                <ul>
                  <li className="nav-links">
                    <a>Avada</a>
                    <i class="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="nav-links">
                    <a>Avada For</a>
                    <i class="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="nav-links">
                    <a>Hosting</a>
                    <i class="fa-solid fa-chevron-down"></i>
                  </li>
                  <li className="nav-links">
                    <a>Customization</a>
                  </li>
                  <li className="nav-links">
                    <a>Resources</a>
                    <i class="fa-solid fa-chevron-down"></i>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="myavada">
                <a className="myavada-btn"> <i class="fa-solid fa-star"></i> My Avada</a>
            </div>
          </div>
          <div className="header-bot">
            <div className="header-bot-left">
                <div className="header-content">
                    <h1>The Ultimate</h1>
                    <h1>Online Store</h1>
                    <h1>Website Builder</h1> 
                    <p>Trusted by beginners, marketerd & professionals: Built with usability and perfomance in mind</p>
                     <a> Start Building <i class="fa-solid fa-arrow-right-long"></i></a> 
                    <div className="content-bot">
                        <div className="content-bot-left">
                            <p>900K +</p>
                            <p>People Trust Avada</p>
                        </div>
                        <div className="content-bot-right">
                            <p>25K +</p>
                            <p>Average 5-Star Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bot-right">
                <div className="header-img">
                    <img src="https://www.upwork.com/catalog-images-resized/692ad3f59b3ed0d62d6205a6c78a164d/large@2x"/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
