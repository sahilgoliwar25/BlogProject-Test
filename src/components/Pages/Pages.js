import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import "../GlobalNavComp.css";
import { Link, useLocation } from "react-router-dom";
import ads from "../../assets/ad.gif";

const Pages = (props) => {
  const currRoute = useLocation();
  const [DData] = useContext(Store);
  let count = 0;
  return (
    <div className="nav-comp-body">
      <div className="context-comp">
        <div className="ele-container">
          <p className="comp-head">{props.category}</p>
          {DData.filter((item) => item.cat === props.category).map(
            (data, index) => {
              return (
                <div className="ele-parent" key={index}>
                  <Link to={`${currRoute.pathname}/${data.id}`}>
                    <div className="elements">
                      <img src={data.image} alt="Not Found" />
                      <div>
                        <p className="ele-head">{data.heading}</p>
                        <p className="ele-desc">{data.description}</p>
                        <p className="ele-type">
                          <span>{data.type}</span> / {data.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <hr />
                </div>
              );
            }
          )}
        </div>
        <div className="top-posts-container">
          <p className="comp-head">Top Posts</p>
          {DData.filter((item) => item.cat === props.category)
            .reverse()
            .map((data, index) => {
              if (count < 4) {
                count++;
                return (
                  <div className="post-parent" key={index}>
                    <Link to={`${currRoute.pathname}/${data.id}`}>
                      <div
                        className="post-elements elements"
                        id={`ele` + count}
                      >
                        <img src={data.image} alt="Not Found" />
                        <div>
                          <p className="ele-head">{data.heading}</p>
                          <p className="ele-type">
                            <span>{data.type}</span> / {data.date}
                          </p>
                        </div>
                        <div className="post-rank">{count}</div>
                      </div>
                    </Link>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
          <div className="blog-ad">
            <img src={ads} alt="Ad not found" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
