import React from "react";
import "./Withdraw.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const Withdraw = () => {
  return (
    <div>
      <div className="container bg-color">
        <div className="inner-divspace">
          <div className="row">
            <div className="col-md-4">
              <div className="form-space-r">
                <Form className="my-form-layout1">
                  <div className="visa-card-div">
                    <div className="card-inner-div">
                      {/* <img
                        src={require("../../../assests/images/visa-card.png")}
                      /> */}
                    </div>
                    <div className="content-img">
                      <p>Bankname</p>

                      <div className="visa-check-div">
                        <Form.Group
                          className="mb-3 mt-4 flex-div"
                          id="check-yellow"
                        >
                          <Form.Check type="checkbox" label="Chose a card" />
                        </Form.Group>
                        <div className="card-delete">
                          <a href="">
                            <RiDeleteBinLine />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="withdraw-input mt-5">
                    <Form.Group className="with-small-input" controlId="Amount">
                      <Form.Control
                        className="text-left"
                        type="text"
                        placeholder="Enter Amount"
                        style={{
                          marginTop: "0px",
                          borderRadius: "20px",
                          paddingLeft: "22px",
                          paddingRight: "40px",
                        }}
                      />
                    </Form.Group>
                    <Button
                      variant="warning"
                      className="save-btn card-withdraw"
                      type="submit"
                    >
                      Withdraw
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-space-m opacity-less">
                <Form className="my-form-layout1">
                  <div className="visa-card-div">
                    <div className="card-inner-div">
                      {/* <img
                        src={require("../../../assests/images/visa-card.png")}
                      /> */}
                    </div>
                    <div className="content-img">
                      <p>Bankname</p>

                      <div className="visa-check-div">
                        <Form.Group
                          className="mb-3 mt-4 flex-div"
                          id="check-yellow"
                        >
                          <Form.Check type="checkbox" label="Chose a card" />
                        </Form.Group>
                        <div className="card-delete">
                          <a href="">
                            {" "}
                            <RiDeleteBinLine />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-space-l opacity-less">
                <Form className="my-form-layout1">
                  <div className="visa-card-div">
                    <div className="card-inner-div">
                      {/* <img
                        src={require("../../../assests/images/visa-card.png")}
                      /> */}
                    </div>
                    <div className="content-img">
                      <p>Bankname</p>

                      <div className="visa-check-div">
                        <Form.Group
                          className="mb-3 mt-4 flex-div"
                          id="check-yellow"
                        >
                          <Form.Check type="checkbox" label="Chose a card" />
                        </Form.Group>
                        <div className="card-delete">
                          <a href="">
                            {" "}
                            <RiDeleteBinLine />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
