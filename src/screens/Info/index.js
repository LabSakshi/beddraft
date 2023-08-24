import React , {useState , useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { endPoints } from "../../constant/Environment";
import { getAllData, updateUser } from "../../Utility/API";
import { ErrorToast, SuccesToast } from "../../components/Toast/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";
import { fetchAllData } from "../../Utility/API";

const Info = () => { 

    //  const dataurl = props;

  const state = useSelector((state) => state.auth);
  const userData = state.user;
  //console.log('userData',userData)
  const userDeatils = JSON.parse(localStorage.getItem("user"));
  const userData1 = userDeatils;
  const navigate = useNavigate();

  const[counter, setcounter] = useState(false);

  const controller = new AbortController();
  // const signal = controller.signal;

  // console.log("url", dataurl); 
 
  let cancel ;  

    useEffect(() => {
      fetchAllData2();
      back();
    }, []);

   const fetchAllData2 = () =>{

    let url = `${endPoints.apiBaseUrl}${endPoints.api.apiurl}/${useriid}`;

        fetchAllData(url , { signal: controller.signal })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          console.log("api running");
          if(response.status=="success"){
             setTimeout(function () {
              window.location.href = response.data.RedirectUrl;
          }, 5000);
          }
        })
        .catch((error) => {
          console.error(error);
        });  
   }

    const back = () => {

      // navigate("/login");
      clearTimeout(cancel);

    }

    // const userDetials = JSON.parse(localStorage.getItem("user"));

    // const useriid = userDeatils.account.idAccount;

    const useriid = state.user.idUser;

    // console.log("state", state.user.account.idAccount , useriid);
    
    



  return (
    <>
        <div className="row" style={{ background:"red!important"}}>
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <div className="infobox row" style={{background:"#E4E4E4" , marginTop:"180px" , padding:"25px" , border:"1px solid #0D3862"}}>
                 <div className="col-lg-12">
                    <h5 style={{textAlign:"center" , lineHeight:"1.4", color:"#0D3862"}}>In a 2 seconds you will be redirected to <br/>
                     ID Photo Verification form<br/>
                      to confirm your identity with IDPV process.
                    </h5>         
                 </div>
                 <div className="col-lg-12 mt-3">
                  <div className='row'>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-4'>
                    <div className="btn btn-primary" onClick={back}>Cancel</div>
                    </div>
                    <div className='col-lg-4'></div>
                  </div>         
                 </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
    </>
  )
}

export default Info;
