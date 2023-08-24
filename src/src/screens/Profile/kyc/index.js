import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { endPoints } from "../../../constant/Environment";
import Toaster from "../../../components/Toast";
import Loader from "../../../components/Loader";
import { fetchAllData ,getAllData} from "../../../Utility/API";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../../redux/Actions/Actions";
const Kyc = () => {

  let params = new URLSearchParams(window.location.search);
  let userId = params.get("userId");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoadinig] = useState(false);
  useEffect(() => {
    setIsLoadinig(true);
    getWalletInfo();
  }, []);
  function getWalletInfo() {

    let url = `${endPoints.apiBaseUrl}${endPoints.api.kyc_verify}${userId}`;
    
    fetchAllData(url)
    .then((res) => res.json())
    .then(async(response) => {
     //console.log('response',response)
      setIsLoadinig(false)
      // if (response.status === "success") {
      //   dispatch({
      //       type: Actions.TEST_CASE,
      //       data: false,
      //     });
      //   navigate("/");
      // }
      dispatch({
        type: Actions.TEST_CASE,
        data: false,
      });
     await GetUserById(userId)
    navigate("/");
   
     
    })
    .catch((error) => {
      setIsLoadinig(false)
      console.error(error);
      dispatch({
        type: Actions.TEST_CASE,
        data: false,
      });
    navigate("/");
    });
    
  const  GetUserById = async (userId) => {
    if (userId) {
      let url = `${endPoints.api.GET_BY_USERID}/${userId}`;
      getAllData(url).then((response) => {
        dispatch({
          type: Actions.LOGIN,
          data: { user: response.data },
        });
      });
    }
  };

  
  }
  return (
    <div style={{marginTop:'300px'}}>

    </div>
  );
};

export default Kyc;
