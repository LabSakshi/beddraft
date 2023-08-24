import React from 'react'

const Verificationsteps=()=> {
  return (
    <div>
    <div className="container bg-color-about space-bottom">
      <div className="inner-smallspace-about">
        <div className="row">
          <div className="col-md-12">
            <div className="content-page-design">
              <h2 style={{textAlign:"center"}}>Activate Your Walllet</h2>

               <div className='row'>
               <div className='col-lg-4'></div>

               <div className='col-lg-6'>

                <p style={{display:"flex"}}>
                    <span style={{ fontSize:"38px"}}><b>1</b></span>
                    <span className='mt-2' style={{marginLeft:"35px", fontSize:"17px"}}>Click the "Activate my wallet" link below and simply<br/> confirm your information.</span>
                </p>

               </div>

               <div className='col-lg-2'></div>  
               
               </div>

               <div className='row'>
               <div className='col-lg-4'></div>

               <div className='col-lg-6'>

                <p style={{display:"flex"}}>
                    <span style={{ fontSize:"38px"}}><b>2</b></span>
                    <span className='mt-3' style={{marginLeft:"35px" , fontSize:"17px"}}>Add a payment method and add funds to your wallet.</span>
                </p>

               </div>

               <div className='col-lg-2'></div>  
               
               </div>

               <div className='row'>
               <div className='col-lg-4'></div>

               <div className='col-lg-6'>

                <p style={{display:"flex"}}>
                    <span style={{ fontSize:"38px"}}><b>3</b></span>
                    <span className='mt-2' style={{marginLeft:"15px", fontSize:"17px"}}>Select how much of your Wallet Balance you would like<br/> to transfer to your BettDraft Balance.</span>
                </p>

               </div>

               <div className='col-lg-2'></div>  
               
               </div>

               <div className='row mt-3'>
               <div className='col-lg-4'></div>

               <div className='col-lg-4' style={{marginLeft:"4%"}}>

                <div className='btn btn-primary' style={{width:"100%"}}>Activate my Wallet</div>

               </div>

               <div className='col-lg-1'></div>  
               
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <section className="login-page-section">
        <div className="login-form-div">
          <div
            className="login-form col-md-5"
            noValidate
            onSubmit={HandleSubmit}
          >
            <img
              src={logo}
              style={{
                width: "auto",
                height: "49px",
                cursor: "pointer",
                marginLeft: "22%",
              }}
              alt="BettDraft"
            />
            <h2
              className="mb-4"
              style={{
                marginTop: "20px",
              }}
            >
              Congratulations!
            </h2>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
              }}
            >
              Your account has been created.
            </label>
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              We've sent an email to the email address provided with a link to
              verify your email.
            </label>

            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              To complete the sign up process, 
             please click the link in the
              email.
            </label>
            <div >
            <span
              style={{
                // justifyContent: "center",
                // display: "flex",
                color:"#0D3862",
                marginTop: "10px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or please
              </span>
              <span
                style={{
                  color:"#0D3862",
                
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                // onClick={resendMail}
              >
               click here,
              </span>
              <span
              style={{
                // justifyContent: "center",
                // display: "flex",
                // color:"black",
                color:"#0D3862!important",
                marginTop: "10px",
              }}
            >
              for it resend.
            </span>
            </div>
            {/* <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"black",
                marginTop: "10px",
              }}
            >
              If you have not received the email, please check you junk or spam
              folder or 
              
             
              
              here, for it resent.
            </label> 
            <label
              style={{
                justifyContent: "center",
                display: "flex",
                color:"#0D3862",
                marginTop: "40px",
                fontSize: "12px",
              }}
            >
              Already validated your email?
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div
                className='btn btn-primary'
                variant="primary"
                type="submit"
                style={{ width: "100%",background:'#0D3862' }}
                onClick={() => {
                  // window.location.reload();
                //   navigate("/login");
                }}
              >
                Log in Here
              </div>
            </div>
            {/* <div
              style={{
                color:"black",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              If you or someone you know has a gambling problem and wants help,
              call 1-800-522-4700 or chat at ncpgambling.org
            </div> 
             <span
                style={{
                  color:"#0D3862",
                  fontSize: "12px",
                  marginTop: "10px",
                }}
              >
                If you or someone you know has a gambling problem and wants
                help, call 1-800-522-4700 or chat at 
              </span>
              <span
                style={{
                 
                  fontSize: "12px",
                  marginTop: "4px",
                  marginLeft: "4px",
                  marginRight: "4px",
                  textDecoration: "underline",
                  color: "#0d6efd",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.ncpgambling.org/", "_blank"); //to open new page
                }}
              >
                ncpgambling.org
              </span>
          </div>
        </div>
      </section> */}

  </div>
  )
}

export default Verificationsteps;