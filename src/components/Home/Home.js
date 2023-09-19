import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import "./Home.css";
import { Link } from "react-router-dom";
import ads from "../../assets/ad.gif";
import { FaArrowDown } from "react-icons/fa";
// import axios from "axios";

const Home = () => {
  // let count = 0;
  const [DData] = useContext(Store);
  // console.log(DData[0]);
  const x = Math.floor(Math.random() * 50);
  console.log(x);
  // useEffect(()=>{
  //   axios.get("https://sahil-goliwar-thesiren-blogapp-server.onrender.com/fetch")
  //   .then(res=>{console.log(res)})
  //   .catch(err=>consol)
  // },[])
  return (
    <>
      <div>
        <div className="top-content">
          <Link to={`/${DData[x].id}`}>
            <div className="card1 card">
              <img src={DData[x].image} alt="img Not Found" />
              <div className="textContent">
                {DData[x].heading}
                <br />

                <div className="typedate">
                  <span className="typebold">{DData[x].type}</span> /{" "}
                  {DData[x].date}
                </div>
              </div>
            </div>
          </Link>
          <div className="card-row">
            <Link to={`/${DData[x + 1].id}`}>
              <div className="card2 card">
                <img src={DData[x + 1].image} alt="img Not Found" />
                <div className="textContent">
                  {DData[x + 1].heading}
                  <br />
                  <div className="typedate">
                    <span className="typebold">{DData[x + 1].type}</span> /{" "}
                    {DData[x + 1].date}
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`/${DData[x + 2].id}`}>
              <div className="card3 card">
                <img src={DData[x + 2].image} alt="img Not Found" />
                <div className="textContent">
                  {DData[x + 2].heading}
                  <br />
                  <div className="typedate">
                    <span className="typebold">{DData[x + 2].type}</span> /{" "}
                    {DData[x + 2].date}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="latest-content containers-home">
          <p className="the-latest">The Latest</p>
          <div className="latest-post">
            <div>
              <Link to={`/${DData[x + 3].id}`}>
                <div className="latest-content-display">
                  <img src={DData[x + 3].image} alt="Not Found" />
                  <div className="latest-content-info">
                    <p className="latest-heading">{DData[x + 3].heading}</p>
                    <p className="latest-desc">{DData[x + 3].description}</p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 3].type}
                      </span>{" "}
                      / {DData[x + 3].date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/${DData[x + 4].id}`}>
                <div className="latest-content-display">
                  <img src={DData[x + 4].image} alt="Not Found" />
                  <div className="latest-content-info">
                    <p className="latest-heading">{DData[x + 4].heading}</p>
                    <p className="latest-desc">{DData[x + 4].description}</p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 4].type}
                      </span>{" "}
                      / {DData[x + 4].date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={`/${DData[x + 5].id}`}>
                <div className="latest-content-display">
                  <img src={DData[x + 5].image} alt="Not Found" />
                  <div className="latest-content-info">
                    <p className="latest-heading">{DData[x + 5].heading}</p>
                    <p className="latest-desc">{DData[x + 5].description}</p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 5].type}
                      </span>{" "}
                      / {DData[x + 5].date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="latest-content containers-home">
          <p className="the-latest">Latest Articles</p>
          <div className="latest-content-container">
            <div className="latest-content-blogs">
              <div className="">
                <hr />
                <div>
                  <Link to={`/${DData[x + 6].id}`}>
                    <div className="latest-elements">
                      <img src={DData[x + 6].image} alt="Not Found" />
                      <div>
                        <p className="latest-ele-head">
                          {DData[x + 6].heading}
                        </p>
                        <p className="latest-ele-desc">
                          {DData[x + 6].description}
                        </p>
                        <p className="latest-ele-type">
                          <span>{DData[x + 6].type}</span> / {DData[x + 6].date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
                <div>
                  <Link to={`/${DData[x + 7].id}`}>
                    <div className="latest-elements">
                      <img src={DData[x + 7].image} alt="Not Found" />
                      <div>
                        <p className="latest-ele-head">
                          {DData[x + 7].heading}
                        </p>
                        <p className="latest-ele-desc">
                          {DData[x + 7].description}
                        </p>
                        <p className="latest-ele-type">
                          <span>{DData[x + 7].type}</span> / {DData[x + 7].date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
                <div>
                  <Link to={`/${DData[x + 8].id}`}>
                    <div className="latest-elements">
                      <img src={DData[x + 8].image} alt="Not Found" />
                      <div>
                        <p className="latest-ele-head">
                          {DData[x + 8].heading}
                        </p>
                        <p className="latest-ele-desc">
                          {DData[x + 8].description}
                        </p>
                        <p className="latest-ele-type">
                          <span>{DData[x + 8].type}</span> / {DData[x + 8].date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
                <div>
                  <Link to={`/${DData[x + 9].id}`}>
                    <div className="latest-elements">
                      <img src={DData[x + 9].image} alt="Not Found" />
                      <div>
                        <p className="latest-ele-head">
                          {DData[x + 9].heading}
                        </p>
                        <p className="latest-ele-desc">
                          {DData[x + 9].description}
                        </p>
                        <p className="latest-ele-type">
                          <span>{DData[x + 9].type}</span> / {DData[x + 9].date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
                <div className="load-more">
                  Load More <FaArrowDown />
                </div>
              </div>
            </div>

            <div className="blog-ad">
              <img src={ads} alt="Ad not found" />
            </div>
          </div>
        </div>
        <div className="latest-content containers-home">
          <p className="the-latest-stories">Latest Stories</p>
          <div className="latest-post">
            <div>
              <Link to={`/${DData[x + 3].id}`}>
                <div className="latest-stories-display">
                  <div className="latest-content-info">
                    <p className="latest-content-heading">
                      {DData[x + 3].heading}
                    </p>
                    <p className="latest-content-desc">
                      {DData[x + 3].description}
                    </p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 3].type}
                      </span>{" "}
                      / {DData[x + 3].date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <hr />
            <div>
              <Link to={`/${DData[x + 4].id}`}>
                <div className="latest-stories-display">
                  <div className="latest-content-info">
                    <p className="latest-content-heading">
                      {DData[x + 4].heading}
                    </p>
                    <p className="latest-content-desc">
                      {DData[x + 4].description}
                    </p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 4].type}
                      </span>{" "}
                      / {DData[x + 4].date}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <hr />
            <div>
              <Link to={`/${DData[x + 5].id}`}>
                <div className="latest-stories-display">
                  <div className="latest-content-info">
                    <p className="latest-content-heading">
                      {DData[x + 5].heading}
                    </p>
                    <p className="latest-content-desc">
                      {DData[x + 5].description}
                    </p>
                    <p className="latest-content-date">
                      <span className="latest-content-date-bold">
                        {DData[x + 5].type}
                      </span>{" "}
                      / {DData[x + 5].date}
                    </p>
                    {/* <div className="post-rank">{count}</div> */}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="load-more">
            Load More <FaArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
