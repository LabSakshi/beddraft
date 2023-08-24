import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../redux/Actions/Actions";
import { Link } from "react-router-dom";
import Sportsbook from "../../Sportsbook";

const MobileProfile = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const ProfileMenus = [
    {
      name: "Personal Information",
      path: "personal-information",
    },
    {
      name: "Change Email",
      path: "change-email",
    },
    {
      name: "Change Password",
      path: "change-password",
    },

    {
      name: "My Entries",
      path: "my-entries",
    },
    {
      name: "Wallet",
      path: "userwallet",
    },

    {
      name: "Contact US",
      path: "contact-us",
    },
  ];  

  return (
    <Sportsbook>
      <div className="custom-fff-div2" style={{ marginTop: "-68px" , background:"#E4E4E4!important" }}>
        <div className="flex-column-hidden">
          <div style={{ padding: "9px" }}>
            <h5 style={{color:"#0D3862" , fontWeight:"bold"}}>{"Profile"}</h5>
          </div>
          {ProfileMenus.map((item, index) => {
            return (
              <Link
                to={`/${item.path}`}
                className="sideBar-game"
                onClick={() => {
                  dispatch({
                    type: Actions.TEST_CASE,
                    data: false,
                  });
                }}
              >
                <div className="linkdiv-box">
                  <div className="flex-start-colum">
                    <a className="link-according profilecolor" style={{color:"#0D3862!important"}}>
                      <span style={{color:"red!important" , fontWeight:"bold", fontSize:"14px"}}>{item.name}</span>
                      <CgChevronRight />
                    </a>
                    <div className="link-according-border"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Sportsbook>
  );
};

export default MobileProfile;
