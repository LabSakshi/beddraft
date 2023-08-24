import React from "react";
import { Form, Button, Accordion } from "react-bootstrap";

const Cricket = () => {
  const data=[
    {
      id:0,
      heading:'1X2',
      content:"The Player has to predict the final result of the match.There are three possible outcomes: Sign: 1 - Description:Home team winSign: X - Description: DrawSign: 2 -Description: Away team win"
      }
      
      
  ]
 
  return (
    <div>
      <div className="container bg-color space-bottom">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-6">
              <div className="custom-collapse-div">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                {data.map((item)=>{
                  return(
                 <Accordion.Item eventKey={item.id}>
                 <Accordion.Header>{item.heading}</Accordion.Header>
                 <Accordion.Body>
                   {item.content}
                 </Accordion.Body>
               </Accordion.Item>)
                })}
                </Accordion>
              </div>
            </div>
            <div className="col-md-6">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cricket;
