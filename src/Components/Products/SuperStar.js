import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { db } from "../../firebase";
import { products } from "../../datass";
import Product from "../Products/Product";
import "../Products/StanSmith.css";
import Powerrslap from "../../video/introsuperstar.mp4";
const StanSmith = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [name, Setname] = useState("");
  const [phone, Setage] = useState("");
  const [comment, Setcourse] = useState("");
  const sub = (e) => {
    e.preventDefault();
    // Add data to the store
    db.collection("data")
      .add({
        Nane: name,
        Phone: phone,
        Comment: comment,
      })
      .then((docRef) => {
        alert("Data Successfully Submitted");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <>
      <video autoPlay loop muted style={{ width: "100%", margin: "auto" }}>
        <source src={Powerrslap} type="video/mp4" />
      </video>

      <div className="clearfix"></div>
      <div className="content-top ">
        <div className="container ">
          <div className="a001">
            <div class="rate">
              <div class="titlerate">
                <strong>XẾP HẠNG VÀ ĐÁNH GIÁ</strong>
              </div>
              <div class="containerrate">
                <div class="ratenumber">
                  <div class="containstar">
                    <div class="qualitystar">
                      <strong>4.5</strong>
                    </div>
                    <div class="starandreview">
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa checked">&#xf123;</i>
                      <p>
                        <span>41</span> Reviews
                      </p>
                    </div>
                  </div>
                  <div class="rowvote">
                    <div class="titlevote">
                      <strong>PHÂN TÍCH XẾP HẠNG</strong>
                    </div>
                    <div class="hmvote">
                      <div class="titlestar">
                        <strong>5 SAO</strong>
                      </div>
                      <div class="titlevote">
                        <div class="barcontainer">
                          <div class="fivestar"></div>
                        </div>
                      </div>
                      <div class="numbervote">
                        <strong>31</strong>
                      </div>
                    </div>
                    <div class="hmvote">
                      <div class="titlestar">
                        <strong>4 SAO</strong>
                      </div>
                      <div class="titlevote">
                        <div class="barcontainer">
                          <div class="fourstar"></div>
                        </div>
                      </div>
                      <div class="numbervote">
                        <strong>6</strong>
                      </div>
                    </div>
                    <div class="hmvote">
                      <div class="titlestar">
                        <strong>3 SAO</strong>
                      </div>
                      <div class="titlevote">
                        <div class="barcontainer">
                          <div class="threestar"></div>
                        </div>
                      </div>
                      <div class="numbervote">
                        <strong>10</strong>
                      </div>
                    </div>
                    <div class="hmvote">
                      <div class="titlestar">
                        <strong>2 SAO</strong>
                      </div>
                      <div class="titlevote">
                        <div class="barcontainer">
                          <div class="twostar"></div>
                        </div>
                      </div>
                      <div class="numbervote">
                        <strong>13</strong>
                      </div>
                    </div>
                    <div class="hmvote">
                      <div class="titlestar">
                        <strong>1 SAO</strong>
                      </div>
                      <div class="titlevote">
                        <div class="barcontainer">
                          <div class="onestar"></div>
                        </div>
                      </div>
                      <div class="numbervote">
                        <strong>0</strong>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
                <div class="detailvote">
                  <div class="titledetailvote">
                    <strong>91%</strong>
                    <p>khách hàng đề xuất sản phẩm này</p>
                  </div>
                  <div class="detailvoteinside">
                    <div class="titledetailvote">
                      <span>Kích cỡ</span>
                    </div>
                    <div class="bardetailvote">
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                    </div>
                    <div class="vote1"></div>
                  </div>
                  <div class="infodetailvote">
                    <div class="titleleft">
                      <p>Quá nhỏ</p>
                    </div>
                    <p>Hoàn hảo</p>
                    <div class="titleright">
                      <p>Quá to</p>
                    </div>
                  </div>
                  <div class="detailvoteinside">
                    <div class="titledetailvote">
                      <span>Chiều rộng</span>
                    </div>
                    <div class="bardetailvote">
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                    </div>
                    <div class="vote3"></div>
                  </div>
                  <div class="infodetailvote">
                    <div class="titleleft">
                      <p>Quá mảnh</p>
                    </div>
                    <p>Hoàn hảo</p>
                    <div class="titleright">
                      <p>Quá rộng</p>
                    </div>
                  </div>
                  <div class="detailvoteinside">
                    <div class="titledetailvote">
                      <span>Thoải mái</span>
                    </div>
                    <div class="bardetailvote">
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                      <div class="rowdv"></div>
                    </div>
                    <div class="vote4"></div>
                  </div>
                  <div class="infodetailvote">
                    <div class="titleleft">
                      <p>Không thoải mái</p>
                    </div>
                    <div class="titleright" style={{ marginLeft: "100px" }}>
                      <p>Thoai mai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-rate">
              <center>
                <form className="form01"
                  style={{ marginTop: "20px" }}
                  onSubmit={(event) => {
                    sub(event);
                  }}
                >
                  <h1>Rating</h1>
                  Tên:
                  <input
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => {
                      Setname(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  SĐT: <input
                    type="number"
                    placeholder="Phone number"
                    onChange={(e) => {
                      Setage(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  Comment: <input
                    type="text"
                    placeholder="Your comment"
                    onChange={(e) => {
                      Setcourse(e.target.value);
                    }}
                  />
                  <br />
                  <br />
                  <button type="submit">Submit</button>
                </form>
              </center>
            </div>
          </div>
          <div className="spec ">
            <h3>Products</h3>
            <div className="ser-t">
              <b></b>
              <span>
                <i></i>
              </span>
              <b className="line"></b>
            </div>
          </div>
          <div class="search-form">
            <input
              style={{ border: "1px solid black", color: "black" }}
              type="text"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <input type="submit" value=" " />
          </div>
          <div className="clearfix"></div>
          <div className="products">
            {products
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (
                  <Product
                    key={key}
                    key={val.id}
                    id={val.id}
                    title={val.title}
                    price={val.price}
                    rating={val.rating}
                    image={val.image}
                    specification={val.specification}
                    detail={val.detail}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default StanSmith;
