import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PaymentEndpoints } from "../../../constant/Environment";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { fetchAllData } from "../../../Utility/API";
const Wallet = () => {

  let params = new URLSearchParams(window.location.search);
  let userId = params.get("userId");
  let fwUserId = params.get("fwUserId");
  const [isLoading, setIsLoadinig] = useState(false);
  useEffect(() => {
    setIsLoadinig(true);
    getWalletInfo();
  }, []);
  function getWalletInfo() {

    let url = `${PaymentEndpoints.apiBaseUrl}${PaymentEndpoints.api.INFORMATION}${fwUserId}`;
    
    fetchAllData(url)
    .then((res) => res.json())
    .then((response) => {
      setIsLoadinig(false)
      

    })
    .catch((error) => {
      setIsLoadinig(false)
      console.error(error);
    });

  
  }
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          color: "white",
        }}
      >
       Balance is added successsfully in your wallet
      </h1>
      {/* <Header />
      <SideBar /> */}
    </div>
  );
};

export default Wallet;
