import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form, Button, Accordion , Table } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
  return (
    <div>
      <div className="container bg-color space-bottom">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-12">
              <div className="custom-collapse-div">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4>
                      What are the requirements to open an account with Bettdraft?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                     <p>To sign up and join BettDraft, you need to meet certain requirements:</p>
                    <p>
                      <li>Currently, BettDraft is available for residents of Texas and Illinois. To create an account with BettDraft, you must be physically located within one of these Authorized Jurisdictions, be 18 years of age or older and not be classified as a Prohibited person, self-excluded, or otherwise excluded by applicable laws or regulations.                        
                      </li><br/>
                      <li>To ensure eligibility, we may require individuals to provide the necessary documentation, such as a state-issued ID and/or Passport, as part of the account verification process.
                    </li><br/>
                    <li>
                    Only eligible individuals who meet the requirements mentioned above are permitted to enter contests on BettDraft.
                    </li>
                    </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h4>
                      What states can I play from?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      At BettDraft, we're currently accepting customers from the states of Texas and Illinois. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h4>
                      Will BettDraft expand its coverage to other states?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Absolutely! We have plans to expand our coverage to many other states in the next few months and bring the thrill of BettDraft to sports fans across the country.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h4>
                      How can I stay updated on when BettDraft will be available in my state?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      To stay informed and be the first to know when BettDraft goes live in your state, we recommend signing up for our email waiting list. By joining the waiting list, you will receive a confirmation email once we launch in your state. It's the best way to stay connected and ensure you don't miss out on the action.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <h4>
                      What kind of information does BettDraft collect from Visitors and Players?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      At BettDraft, we collect various types of information, including:
                      </p>

                      <p>
                        <li>
                        Personal data to validate that you are of legal age and that you're permitted to have an account at BettDraft.
                        </li>
                        <li>
                        Information about your internet connection and the equipment you use to access our Services is collected. This helps us optimize your experience and ensure smooth functionality.
                        </li>
                        <li>
                        We may collect the location of you or your device when accessing certain services or sections of our site or app as required by law.
                        </li>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <h4>
                      Can I edit my personal information?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      To review or modify your personal information, you can access your account profile page. You can only modify your email, physical address and password. You may also request access to, correction or deletion of any personal information by emailing us. However, we may decline a request to change information if we believe it would violate any legal requirement or cause the information to be incorrect.  
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <h4>
                      What is a contest at BettDraft?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      A contest at BettDraft is based on building a team comprised of real-life players from professional sports leagues. These teams are constructed based on strategical results and predictions made by each player and their performance in an individual game. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      <h4>
                      What is an entry fee?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      An entry fee refers to the amount paid by participants to enter a contest on BettDraft. Entry fees and prize pools can vary depending on the number of players on your team. 
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      <h4>
                      What is the minimum entry fee?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      BettDraft determines the minimum entry fees for all contests, which may vary on a market-by-market or patron-by-patron basis. The minimum entry is $1
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      <h4>
                      What is the maximum entry fee
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      BettDraft determines the maximum entry fees for all contests, which may vary on a market-by-market or patron-by-patron basis. The maximum entry is $100 but may vary by contest.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>
                      <h4>
                      How do I build my virtual teams?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      To build your virtual team:
                      </p>

                      <p>
                        <li>
                        Find and select your players, click their stat and it will automatically add to your team.  
                        </li><br/>
                        <li>
                        Add a minimum of 2 and up to 10 players. You can add players from multiple teams, multiple games and even multiple sports.
                        </li>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>


                  <Accordion.Item eventKey="11">
                    <Accordion.Header>
                      <h4>
                      What sports are available for fantasy contests at BettDraft?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      BettDraft offers a wide range of sports for fantasy contests. You can choose from the following sports:
                      </p>

                      <p>
                       <li>Football</li><br/>
                      <li>Basketball</li><br/>
                      <li>Baseball</li><br/>
                      <li>Hockey</li><br/>
                      <li>Soccer</li><br/>
                      <li>Golf</li><br/>
                      <li>Tennis</li><br/>
                      <li>Cricket</li><br/>
                      <li>NASCAR</li><br/>
                      <li>Formula 1</li><br/>
                      <li>Boxing</li><br/>
                      <li>MMA</li><br/>
                      </p>

                      <p>
                      Not all sports are available through ought the year, some may be available during the season. Please see the site for current sports listings.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="13">
                    <Accordion.Header>
                      <h4>
                      How can I find the payout amounts for a contest?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Payout amounts are determined in the entry fee and number of players selected in your team, once you build your team and select the entry fee amount. The payout amount will be clearly displayed prior to you submitting your entry. These are also displayed in the "My bets" section for existing bets.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="14">
                    <Accordion.Header>
                      <h4>
                      How are payouts credited to my BettDraft account?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      Payouts are directly credited to your BettDraft Account Balance. Once the contest concludes and the results are finalized, the payout amounts will be reflected in your account balance.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="15">
                    <Accordion.Header>
                      <h4>
                      How are payouts calculated?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Table className="content-table table-bordered" style={{width:"100%" , border:"1px solid black"}}>
                  <thead>
                    <tr>
                      <th>Players Selected</th>
                      <th>Min Correct for a Payout</th>
                      <th>Payout Option 1<br/> No. Correct | Entry Multiply</th>
                      <th>Payout Option 2<br/> No. Correct | Entry Multiply</th>
                      <th>Payout Option 3<br/> No. Correct | Entry Multiply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>2</td>
                      <td>2 - 3X</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2</td>
                      <td>3 - 5X</td>
                      <td>2 - 1.25X</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2</td>
                      <td>4 - 10X</td>
                      <td>3 - 1.5X</td>
                      <td>2 - 1X</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>3</td>
                      <td>5 - 15X</td>
                      <td>4 - 2X</td>
                      <td>3 - 1.25X</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>4</td>
                      <td>6 - 25X</td>
                      <td>5 - 3X</td>
                      <td>4 - 1.5X</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>5</td>
                      <td>7 - 40X</td>
                      <td>6 - 4X</td>
                      <td>5 - 1.75X</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>6</td>
                      <td>8 - 60X</td>
                      <td>7 - 5X</td>
                      <td>6 - 2X</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>7</td>
                      <td>9 - 80X</td>
                      <td>8 - 10X</td>
                      <td>7 - 2.5X</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>8</td>
                      <td>10 - 100X</td>
                      <td>9 - 15X</td>
                      <td>8 - 3X</td>
                    </tr>
                  </tbody>
                </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="16">
                    <Accordion.Header>
                      <h4>
                        How can I find my completed contests?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                      To find your completed contests on BettDraft, simply:
                      </p>

                      <p>
                        <li>Go to the top right side of the website and click on your profile icon.
                        </li>
                        <li>
                        From the dropdown menu, select "My Entries".
                        </li>
                        <li>
                        Within the "My Entries" section, you'll find tabs for "Open Entries" and "Past Entries."
                        </li>
                        <li>
                        Click on “Open entries” for pending and recently placed entries or, on the "Past Entries" tab to view your completed contests. 
                        </li>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
