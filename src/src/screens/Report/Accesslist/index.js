import React, { useState } from "react";
import "./Access-List.css";
import { FaRegUser } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import {
  IoArrowForwardSharp,
  IoIosArrowDown,
  IoMdSettings,
  IoArrowBack,
} from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { CgChevronDown } from "react-icons/cg";
import { FiPrinter } from "react-icons/fi";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

// import { Link } from "react-router-dom";
import { Form, Button, Table } from "react-bootstrap";

const Accesslist = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="container bg-color">
        <div className="inner-space1">
          <div className="row">
            <>
              <div className="col-md-4">
                <div className="form-space-r30">
                  <Form className="my-form-layout1">
                    <Form.Group className="mb-3" controlId="SesionID">
                      <Form.Control type="text" placeholder="Sesion ID :" />
                    </Form.Group>
                    <div className="custom-dropdown">
                      <Form.Select aria-label="Default select example">
                        <option>Event Type :</option>
                        <option value="1">Adhar card</option>
                        <option value="2">Voter id card</option>
                      </Form.Select>
                      <span className="custom-dropdown-arrow">
                        <FiChevronDown />
                      </span>
                    </div>
                    <div className="custom-dropdown">
                      <Form.Select aria-label="Default select example">
                        <option>Time Zone :</option>
                        <option value="1">Adhar card</option>
                        <option value="2">Voter id card</option>
                      </Form.Select>
                      <span className="custom-dropdown-arrow">
                        <FiChevronDown />
                      </span>
                    </div>
                    <Form.Group className="mb-3" controlId="SesisonCode">
                      <Form.Control type="text" placeholder="Sesison Code :" />
                    </Form.Group>
                    <div className="flex-input-design1 equal-input-design">
                      <div className="with-big-input posi-rela">
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Control
                            className="padding-l"
                            type="text"
                            placeholder="17/07/2017"
                          />
                        </Form.Group>
                        <span className="input-arrow-front">
                          <IoArrowForwardSharp />
                        </span>
                        <span className="under-label">From :</span>
                      </div>

                      <div className="with-big-input posi-rela">
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Control
                            className="padding-l"
                            type="text"
                            placeholder="17/07/2017"
                          />
                        </Form.Group>
                        <span className="input-arrow-front">
                          <IoArrowBack />
                        </span>
                        <span className="under-label">To :</span>
                      </div>
                    </div>

                    <div className="pdf-link mt-3">
                      <a>
                        {" "}
                        <BsFillFileEarmarkPdfFill />
                      </a>
                    </div>

                    <div className="flex-div btn-with">
                      <Button
                        variant="danger"
                        className="cancel-btn"
                        type="submit"
                      >
                        Reset
                      </Button>
                      <Button
                        variant="primary"
                        className="save-btn"
                        type="submit"
                      >
                        Search
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="col-md-8">
                <div className="table-design-one  mt-4">
                  <Table>
                    <thead>
                      <tr>
                        <th>Sesion ID</th>
                        <th>Session Code</th>
                        <th>Player</th>
                        <th>Start</th>
                        <th>Logout Type</th>
                        <th>Ip Address</th>
                        <th>Initial Balance</th>
                        <th>Final Balance</th>
                        <th>Played</th>
                      </tr>
                    </thead>
                    <tbody className="two-table-color">
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accesslist;
