import React from "react";
import "./Validity.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

const Validity = () => {

  return (
    <div>
      <div className="container bg-color space-bottom">
        <div className="inner-smallspace">
          <div className="row">

            <div className="col-md-12">
              <div className="content-page-design">
                <h2>2. VALIDITY AND ACCEPTANCE OF BETS</h2>
                <h4>2.1 Bets Management</h4>
                <p>
                  Once confirmed the bet can not be changed or canceled by the Player. https://sportsbook.bettdraft.com reserves the right to reject or partially accept the amount of the bet. https://sportsbook.bettdraft.com also reserves the right to cancel a bet previously accepted prior to the event without explanation, in which case the information will be sent by message within the Player's account. In case of irregularities or decisions that hamper the smooth running of an event, https://sportsbook.bettdraft.com reserves the right to declare 'null' event even after the kick off time too.
                </p>
                <h4>2.2 Validity of bets</h4>
                <p>
                  The Player is required to check his bet before committing. A bet is valid only after being confirmed by the central system of acceptance of https://sportsbook.bettdraft.com by assigning an identification code. The bet will be finally considered accepted once the message "Bet Accepted" is shown in the coupon.<br></br>
                  All bets are not confirmed before the start of the first event, will be rejected. Only bets registered in the list of the Player's account will be considered valid. Complaints relating bets that have not been properly registered on the database will not be taken into account.
                </p>
                <h4>2.3 Bet Types</h4>
                <p>The Player has the possibility to choose from different types of wagers and creates his own personalized combinations. The Types of bets available on https://sportsbook.bettdraft.com are:</p>
                <p>Single Bets: it occurs when the Player places a bet which includes just one event predicted; it is necessary the definition of that unique result forecasted to get the win.</p>
                <p>Multiple Bets: it occurs when the Player places a bet with more than one event; to obtain the win it is necessary to predict correctly all the events.</p>
                <p>Integral Bets: consists in predicting multiple events (with a minimum of two) where it is possible to select more than one odd for the same match/event. The system generates several tickets in order to let each odd (for the same event) appearing only once per ticket.
                  <br></br>Ex:
                </p>
                <p>If the Player bets::</p>
                <p>Lazio - Roma: 1 and 2 <br></br>
                  Milan - Inter: X <br></br>
                  Torino - Juventus: X
                </p>
                <p>The system will generate two tickets:</p>
                <p>
                  1. Lazio-Roma 1; Milan-Inter X; Torino-Juventus X<br></br>
                  2. Lazio-Roma 2; Milan-Inter X;
                </p>
                <p>Torino-Juventus X System Bets: Once a player set in the coupon at least 3 odds, he/she can decide to play a system bet. Clicking on the tab "System" in the above side of the coupon, it is possible to start planning a system bet. It is not necessary to predict and win all the events selected. For instance, selecting 4 odds and choosing double combinations only, the system generates 6 tickets, each one made of 2 events; in this way the Player has 6 possibilities to win.</p>
                <p>The Player can also decide the types of combinations (single, double, triple, quadruple) and the amount to stake on them. Moreover, it is possible, clicking on the button "B", to set a match as the base of the system generated, this means that it will be present in each combination.</p>
                <p>The Player can also combine events related to different sports categories, but, in some cases, it is not possible to combine different types of odds concerning the same event (for instance the "Motor" category). In the case, for a human or system error, this kind of system is accepted by the Application, all the bets in question will be canceled (all the odds will get the value 1.0). The Application will automatically return credits to the Player.</p>



              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Validity;
