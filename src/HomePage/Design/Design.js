import React from "react";
import "./Design.css";
const Design = () => {
  return (
    <div>
      <section className="design-sec">
        <div className="container">
          <div className="design-title">
            <h1>All-In-One Website Builder</h1>
            <h3>Experience total control over your website creation process</h3>
          </div>
          <div className="design-content">
            <div className="design-list">
              <img src="https://avada.theme-fusion.com/wp-content/uploads/2021/06/launch-2@2x-400x245.jpg " />
              <h2 id="content-1">96 Prebuilt Websites</h2>
              <p>
                Prebuilt websites are designed to save you time. import with a
                few clicks&customize it to suit your requirement
              </p>
            </div>
            <div className="design-list">
              <img src="https://avada.theme-fusion.com/wp-content/uploads/2021/07/design-all-6-600x427.jpg" />
              <h2>120+Design Elements</h2>
              <p>
              Packed with options,they are highly flexible for any design & for any purpose.the only limit is your imagination
              </p>
            </div>
            <div className="design-list">
              <img src="https://avada.theme-fusion.com/wp-content/uploads/2021/07/design-elements-6-600x427.jpg" />
              <h2>Built For Performance</h2>
              <p>
                Experience total control of your website's features that will
                empower you to make superior performance-realted decision.
                Discover More
              </p>
            </div>
          </div>
          <div className="discover">
            <a>Discover More <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
