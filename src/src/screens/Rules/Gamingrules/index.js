import React from "react";
import "./Gaming-Rules.css";

import { Form, Button, Table } from "react-bootstrap";


const Gamingrules = () => {
  return (
    <div>
      <div className="container bg-color space-bottom">
        <div className="inner-smallspace">
          <div className="row">
            <div className="col-md-12">
              <div className="content-page-design">
                <h2>3. GAMING RULES</h2>
                <h4>3.1 Bonus</h4>
                <p>
                  https://sportsbook.bettdraft.com gives special bonus on multiple bets
                  according to the number of events inserted into the Bet slip.
                  All the odds selected will be valid for the purpose of
                  obtaining the bonus. The calculation of the bonus stands in
                  multiply the potential winning to the percentage of bonus
                  according to the number of selected events. The pattern of
                  allocation of the share bonus is the following:
                </p>

                <Table className="content-table">
                  <thead>
                    <tr>
                      <th>NUMBER OF EVENTS</th>
                      <th>% BONUS</th>
                      <th>% QUOTA MIN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>0.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>0.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>0.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>4.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>6.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>11.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>19.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>23.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>30.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>34.0%</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                <Table className="content-table">
                  <thead>
                    <tr>
                      <th>NUMBER OF EVENTS</th>
                      <th>% BONUS</th>
                      <th>% QUOTA MIN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11</td>
                      <td>39.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>43.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>48.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>53.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>60.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>70.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>78.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>83.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>90.0%</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>105.0%</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                <h4>3.2 Flattening</h4>
                <p>
                  https://sportsbook.bettdraft.com reserves the right to limit the maximum
                  payout potential bet or system. If the Player exceeds this
                  limit, an instant message inside the coupon will make it
                  informed of that fact and, in the event that the Player
                  accepts this condition, however, the payout will be determined
                  based on the limit just shown to the Player before of further
                  confirmation. The potential winnings are then displayed on the
                  bet slip or the bets list showed in the Player's gaming
                  account.
                </p>

                <h4>3.3 Rounding</h4>
                <p>
                  Stakes: The player is allowed to stake whole amounts or
                  amounts made of two decimal digits at the most. For System
                  bets and Automatic Betting Systems, which allow the Player to
                  enter the total stake and not a specific stake per
                  combination, the application splits up the total amount staked
                  selecting the approximate value. Although the amount is
                  rounded, the calculation of the payout reflects the effective
                  amount staked, the payout is based on the following formula:
                  <br></br>
                  (Odd*Odd*....*Odd) * Stake + Bonus.
                  <br></br>
                  Payout: The rounding of payouts (potential winning, final
                  winning, Integral and Parlay systems winning) is applied on
                  the second decimal digit according to the following rule:
                  simplifying a number to a certain place value, the extra
                  decimal places drop and if the second dropped digit is 5 or
                  greater, round up the last digit kept. If the second dropped
                  digit is 4 or smaller, round down (keep the same) the last
                  digit kept.
                  <br></br>
                  3.4 Programmings
                  <br></br>
                  Dates and times published by https://sportsbook.bettdraft.com have a
                  purely indicative value. If the date or time of an event is
                  not correct, bets placed prior to the actual event will be
                  considered valid, while those placed after the beginning of
                  the same will be considered void. In the case of multiple
                  bets, canceled the event will be allocated the odd 1.0. In
                  this case, multiple bets are considered valid even if it
                  should fail the minimum number of required events.
                  <br></br>
                  https://sportsbook.bettdraft.com will not be liable for any errors in
                  respect of bets including where: (i) https://sportsbook.bettdraft.com
                  has incorrectly stated the relevant
                  odds/spreads/handicap/totals/Cash Out amount; (ii)
                  https://sportsbook.bettdraft.com continues to accept bets on closed or
                  suspended markets; (iii) https://sportsbook.bettdraft.com incorrectly
                  calculates or pays a settlement amount; or (iv) any error
                  occurs in pay tables included or in any game or product used.
                  <br></br>
                  3.5 Voiding of Events and Bets
                  <br></br>
                  In the event that a match is officially postponed or
                  interrupted (unless it is stated differently in some sports),
                  the bets will be considered valid if the event itself will be
                  taken up and completed by 24 hours , depending on to local
                  time. If the sports event does not take place in the time
                  frame specified, or at the location indicated , or if one of
                  the participants did not take part , the bet is considered
                  "Void". An event that is interrupted for any reason (even at
                  the last minute) and not be resumed and completed within the
                  time frame indicated , shall be voided (unless it is stated
                  differently in some sports). If a match of any sport is
                  suspended during extra time , all bets will be valid at the
                  regular time . When an event will be considered null and void
                  , in the list of bets will appear " void " , and the relative
                  odd is 1.
                  <br></br>
                  3.6 Results
                  <br></br>A bet is considered Won or Lost when the result of
                  the events are confirmed and defined. Results at the table, or
                  any type determined by the disciplinary authority, will not be
                  taken into account. https://sportsbook.bettdraft.com is reliable for the
                  publishing of results, a dedicated team is in charge of the
                  collecting and defining the Results consulting reliable feeds.
                  <br></br>
                  3.7 Value of odds
                  <br></br>
                  All the odds available on https://sportsbook.bettdraft.com are
                  constantly updated. The odd selected by the Player is valid
                  from the time of confirmation of the bet.
                  <br></br>
                  https://sportsbook.bettdraft.com can decide to change the odds of an
                  event without notice. However, if a player had selected it
                  before the change, the system generates a message asking to
                  the Player if he/she wants to accept the updated odd or if
                  he/she wants to remove it from the coupon..
                  <br></br>
                  3.8 Other issues
                  <br></br>
                  For each case not covered by these rules or by the contents of
                  the website, https://sportsbook.bettdraft.com reserves the right to
                  decide for themselves. For any dispute the jurisdiction shall
                  be considered to https://sportsbook.bettdraft.com reserves the right to
                  decide for themselves. For any dispute the jurisdiction shall
                  be considered to Panama City by Panama City law enforcement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamingrules;
