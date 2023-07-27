import React from "react";
import "./ListSection.css";

const ListSection = () => {
  return (
    <div>
      <section className="list-sec">
        <div className="container">
          <div className="list-title">
            <img src="https://i.ibb.co/vPfypsY/Logo-half.jpg"></img>
            <h1>Design Anything, Build Everything</h1>
            <h3>
              Design and launch your website fast & no coding knowledge is
              required
            </h3>
          </div>
          <div className="list-items">
            <div className="list-items-left">
              <ul className="list-items-list">
                <li>
                  <i class="fa-solid fa-folder-open"></i>
                  <a>Live Visual Builder</a>
                </li>
                <li>
                  <i class="fa-solid fa-file-export"></i>
                  <a>Layout Builder</a>
                </li>
                <li>
                  <i class="fa-solid fa-bars"></i>
                  <a>Header Builder</a>
                </li>
                <li>
                  <i class="fa-solid fa-table-list"></i>
                  <a>Mega Menu</a>
                </li>
                <li>
                  <i class="fa-solid fa-tv"></i>
                  <a>Footer Builder</a>
                </li>
                <li>
                  <i class="fa-solid fa-medal"></i>
                  <a>Form Builder</a>
                </li>
                <li>
                  <i class="fa-solid fa-folder-open"></i>
                  <a>Off Canvasr</a>
                </li>
                <li>
                  <i class="fa-solid fa-circle-check"></i>
                  <a>Setup Wizard</a>
                </li>
                <li>
                  <i class="fa-solid fa-medal"></i>
                  <a>Perfomance Wizard</a>
                </li>
              </ul>
            </div>
            <div className="list-items-right">
              <img src="https://avada.theme-fusion.com/wp-content/uploads/2021/07/build-everything-1200x664.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListSection;
