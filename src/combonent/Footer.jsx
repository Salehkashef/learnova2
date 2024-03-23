import React from "react";
import style from "./Footer.module.css";
import logo from "../assets/img/V07.png";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start ">
        <section>
          <div className="container text-center text-md-start ">
            <div className="row ">
              <div className="col-md-3 col-lg-4 col-xl-3  mx-auto mb-2 text-center mt-4">
                <div className="heder d-flex align-items-center justify-content-center">
                  <img src={logo} className={style.logo} />
                  <div class="vr ms-3 mx-3"></div>
                  <h5>
                    Virtual Class <br /> for Zoom
                  </h5>
                </div>
                <div className={style.footerboton}>
                  <p>Subscribe to get our Newsletter</p>
                  <div className={style.inpo}>
                      <input type="text" id="typePhone" class={style.form1}/>
                      <input type="button" value="Subscribe" className={style.btn} />   
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div
          className=" text-center p-4 mt-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <div className={style.footerlink}>
           <a className="nav-link active " href="">Careers</a>
           <div class="vr ms-3 mx-3"></div>
           <p className="mt-3">Privacy Policy</p>
           <div class="vr ms-3 mx-3"></div>
           <p className="mt-3">Terms & Conditions</p>
          </div>
          <span>© 2021 Class Technologies Inc. </span>
        </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
