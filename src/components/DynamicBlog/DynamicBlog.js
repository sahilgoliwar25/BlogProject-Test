import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import { Link, useParams } from "react-router-dom";
import "./DynamicBlog.css";
import man from "../../assets/man.png";
import { PiHandsClappingDuotone, PiShareNetworkBold } from "react-icons/pi";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useState } from "react";

const DynamicBlog = () => {
  const [DData] = useContext(Store);
  const stuid = useParams().Id;
  const [cato] = useState(DData.filter((item) => item.id === stuid));
  // console.log(cato[0].cat);
  let count = 0;

  return (
    <div>
      <div className="blog-parent">
        {DData.filter((item) => item.id === stuid).map((data, index) => {
          return (
            <div className="blogDetails" key={index}>
              <p className="blogHead">{data.heading}</p>
              <div className="user">
                <div className="user-info">
                  <div>
                    <img className="user-img" src={man} alt="User Icon" />
                  </div>
                  <div>
                    <p className="user-name">Sahil Goliwar</p>
                    <p className="date">{data.date}</p>
                  </div>
                </div>
                <div className="user-social-icons">
                  <FaFacebookSquare />
                  <FaTwitterSquare />
                  <FaInstagramSquare />
                  <FaYoutubeSquare />
                </div>
              </div>
              <img className="blogImg" src={data.image} alt="Not Found" />
              <div>
                {data.description.split("\n").map((str) => (
                  <p className="blog-data-desc" key={index}>
                    {str}
                  </p>
                ))}
              </div>
              <div className="blog-response">
                <div className="blog-actions">
                  <PiHandsClappingDuotone /> <p>9.3K</p>
                </div>
                <div className="blog-actions">
                  <PiShareNetworkBold /> <p> Share</p>
                </div>
              </div>

              <div className="written-user">
                <div className="user-info">
                  <div>
                    <img className="user-img" src={man} alt="User Icon" />
                  </div>
                  <div>
                    <p className="writtenUser">WRITTEN BY</p>
                    <p className="user-name">Sahil Goliwar</p>
                    <p className="date">{data.date} . 10 min read</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="blog">
          <div className="blog-actions">
            <PiHandsClappingDuotone /> <p>9.3K</p>
          </div>
          <div className="blog-actions">
            <PiShareNetworkBold /> <p> Share this article</p>
          </div>
        </div>
      </div>
      <div className="more-siren-container">
        <h2>More From The Siren</h2>
        <div>
          <div className="more-siren-data">
            {DData.filter(
              (item) => item.cat === cato[0].cat && item.id !== stuid
            ).map((data, index) => {
              // console.log(data);
              if (count < 3) {
                count++;
                // console.log(data);
                return (
                  <Link to={`/${data.id}`}>
                    <div key={data.id}>
                      <div className="more-siren-img">
                        <img
                          className=""
                          src={data.image}
                          alt="More Siren Imgs"
                        />
                      </div>
                      <div>
                        <p className="more-siren-head">{data.heading}</p>
                        <p className=" more-siren-date">
                          {data.type} / {data.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlog;
