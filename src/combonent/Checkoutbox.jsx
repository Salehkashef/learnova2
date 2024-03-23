import Topoffer from "./Topoffer";
import style from "./Checkoutbox.module.css";

function Checkoutbox() {
  return (
    <>
      <div className="container mt-4 mb-5 ">
        <div className="row">
          <div className="col-sm-7  mb-3 mb-sm-0 mt-5">
            <div className={`shadow ${style.contaner}`}>
              <div className="ms-4 mt-4">
                <h1>Checkout</h1>
              </div>
              <form className="mx-3 ms-3">
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name on Card
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Card Number
                  </label>
                  <input type="number" className="form-control" id="number" />
                </div>
                <div className="row">
                  <div className="col-sm-6  mb-3 mb-sm-0 ">
                    {" "}
                    <div className="mb-3">
                      <label htmlFor="date" className="form-label">
                        Expiration Date ( MM/YY )
                      </label>
                      <input type="date" className="form-control" id="date" />
                    </div>
                  </div>
                  <div className="col-sm-4  mb-3 mb-sm-0">
                    <div className="mb-3">
                      <label htmlFor="Name" className="form-label">
                        CVC
                      </label>
                      <input type="text" className="form-control" id="Name" />
                    </div>
                  </div>
                </div>
                <input
                  className="form-check-input mx-3"
                  type="checkbox"
                  id="check"
                />
                <label htmlFor="check">
                  Save my information for faster checkout
                </label>

                <button className={`mt-4 mb-4 ${style.btn}`} type="submit">
                  Confirm Payment
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-4 ms-4 mb-sm-0 mt-4 ">
            <div className={`shadow ${style.contaner2}`}>
              <h5 className="ms-3 mt-4">Summary</h5>
              <div className="row">
                <div className="col-sm-5 mb-sm-0"></div>
                <div className="col-sm-7 mb-sm-0 ">
                  <p className={style.hei}>
                    adipising elit, sed do eiusmod tempor
                  </p>
                  <p className={style.blor}>Lorem ipsum dollar...</p>
                  <h5 className={style.hei}>$24.69</h5>
                </div>
              </div>
              <hr className={style.line} />
              <div className="row">
                <div className="col-sm-5   mb-sm-0 "></div>
                <div class="col-sm-7   mb-sm-0 ">
                  <p className={style.hei}>
                    adipising elit, sed do eiusmod tempor
                  </p>
                  <p className={style.blor}>Lorem ipsum dollar...</p>
                  <h5 className={style.hei}>$24.69</h5>
                </div>
              </div>
              <hr className={style.line} />
              <div className="techerimg d-flex justify-content-lg-between align-items-center w-75 ms-5">
                <div className="d-flex justify-content-start align-items-center">
                  <p className={style.hei}>Subtotal</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <p className={style.hei}>$51.38</p>
                </div>
              </div>
              <hr className={style.line} />
              <div className="techerimg d-flex justify-content-lg-between align-items-center w-75 ms-5">
                <div className="d-flex justify-content-start align-items-center">
                  <p className={style.hei}>Coupon Discount</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <p className={style.hei}>0 %</p>
                </div>
              </div>
              <hr className={style.line} />
              <div className="techerimg d-flex justify-content-lg-between align-items-center w-75 ms-5">
                <div className="d-flex justify-content-start align-items-center">
                  <p className={style.hei}>TAX</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <p className={style.hei}>5</p>
                </div>
              </div>
              <hr className={style.line} />
              <div className="techerimg d-flex justify-content-lg-between align-items-center w-75 ms-5">
                <div className="d-flex justify-content-start align-items-center">
                  <p className={style.hei}>Total</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <p className={style.hei}>$56.38</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Topoffer />
    </>
  );
}

export default Checkoutbox;
