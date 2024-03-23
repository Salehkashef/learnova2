import { useEffect } from "react";
import style from "./Fav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Redux/slices/categorySlice";
import { useNavigate } from "react-router-dom";

function Fav() {
  const dispatcher = useDispatch();
  const categories = useSelector(
    (state) => state.CategoryReducer.categories.data
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatcher(getCategory());
  }, [dispatcher]);
  const handleCardClick = (item) => {
    navigate(`/category`, { state: item });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-4">
          <h1>Ignite Your Learning Journey. Unleash Your Potential.</h1>
        </div>
      </div>
      <div className="row mt-4">
        {categories &&
          categories.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              onClick={() => handleCardClick(item)}
            >
              <div
                className={`${style.cards} card border-0 shadow bg-body-tertiary rounded text-center`}
              >
                <div className="card-body">
                  <div className={style.imgcard}>
                    <img
                      src={`http://localhost:4000/imgs/${item.icon}`}
                      alt="Category Image"
                    />
                  </div>
                  <h5 className="card-title mt-3">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Fav;
