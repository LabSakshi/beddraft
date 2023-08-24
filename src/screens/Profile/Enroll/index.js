import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PaymentEndpoints } from "../../../constant/Environment";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { postData } from "../../../Utility/API";
import { useSelector, useDispatch } from "react-redux";
import { ErrorToast, SuccesToast } from "../../../components/Toast/message";
const Enroll = () => {
  //   const { userId, fwUserId } = useParams();  const state = useSelector((state) => state.auth);
  const state = useSelector((state) => state.auth);
  const User = state.user;

  let params = new URLSearchParams(window.location.search);
  let userId = params.get("userId") || User?.idUser;
  let fwUserId = params.get("fwUserId") || User?.account?.fwUserId;
  const [isLoading, setIsLoadinig] = useState(false);
  useEffect(() => {
    setIsLoadinig(true);
    FetchSportsData();
  }, []);
  function FetchSportsData() {

    var raw = JSON.stringify({
      userId: userId,
      walletUserId: fwUserId,
    });
    let url = `${PaymentEndpoints.apiBaseUrl}${PaymentEndpoints.api.WALLET}`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        
        if (result.status === "success") {
          window.location.href = result.data.walletUrl;
        }else{
          ErrorToast(result.message)
        }
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "210px",
          color: "black",
          marginBottom:"200px"
        }}
      >
        {/* Your wallet has been created successfully. */}
        You are being redirected to FabiWallet...
      </h1>
      {/* <Header />
      <SideBar /> */}
    </div>
  );
};

export default Enroll;
