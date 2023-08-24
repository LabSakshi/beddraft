import React from "react";
import "./houserules.css";

import { Form, Button, Table } from "react-bootstrap";

const HouseRules = () => {
  return (
    <div>
      <div className="container bg-color-hr space-bottom">
        <div className="inner-smallspace-hr">
          <div className="row">
            <div className="col-md-12">
              <div className="content-page-design">
                <h2>BettDraft House Rules</h2>

                <h4>1. Contest House Rules</h4>

               <p>
               1.1 These House Rules for contest entries (referred to as the "House Rules") are applicable to all contest entry activities on the BettDraft Platform within the Authorized Jurisdictions (Texas and Illinois). By accessing the BettDraft Platform, you acknowledge that you have read, understood, and agreed to abide by these House Rules.
               </p>

               <p>
               1.2 BettDraft reserves the right to modify these House Rules at its sole discretion and upon approval required from applicable state regulators. Any changes made will be immediately effective and binding upon you. BettDraft's final decision regarding the interpretation and application of the House Rules, including events, markets, players, player statistics (“stats”), selections, and payouts, shall be binding on you.
               </p>

               <p>1.3 These House Rules are subject to and incorporate the Terms and Conditions (referred to as the "Terms"), which are an integral part of these House Rules, unless otherwise defined in these House Rules. </p>

                 <p>
                 1.4 Only individuals who are eligible and have provided the required documentation (State issued ID and/or Passport), aged 18 years or older, and not classified as a Prohibited Person, self-excluded, or otherwise excluded, and must be physically located within an Authorized Jurisdiction, are permitted to enter contests. BettDraft reserves the right to refuse access, suspend or terminate an account at any time for reasons deemed sufficient.
                 </p>

                 <p>
                 1.5 You may not act as an agent or proxy in order to enter contests on behalf of someone else. Your account is for your sole personal use and may not be used by or accessed by anyone other than the account holder. You are responsible for keeping your credentials safe and preventing unauthorized access to your account. BettDraft is not responsible for unauthorized access to your account.
                 </p>

                 <h4>2. Contest entries </h4>

                 <p>
                 2.1 BettDraft accepts contest entries based on the terms provided, unless otherwise indicated on printed media or other official sources.
                 </p>

                 <p>2.2 BettDraft reserves the right to suspend or close any market or remove players or player stats for selection at its discretion, even if contrary to these House Rules. BettDraft may void an entire contest entry, subject to voiding restrictions set by the Regulator of the Authorized Gaming Jurisdiction.
                 </p>

                 <p>
                 2.3 BettDraft reserves the right to refuse any contest entry before its acceptance.
                 </p>

                 <p>
                 2.4 BettDraft determines the minimum and maximum entry fees for all contests, which may vary on a market-by-market or patron-by-patron basis.
                 </p>

                 <p>
                 2.5 Player selections can be made until the official start time, unless otherwise specified by BettDraft.
                 </p>

                 <p>
                 2.6 No players may be selected after the game or event has started. Any players added to a team after the event or game has started may render the entire entry void.
                 </p>

                 <p>
                 2.7 If a selected player’s stats projection matches the final stats achieved exactly (to 2 decimal places), in the event or game, that selection is marked as a PUSH, which will inactivate the player on the team and revert the contest entry to an entry with one less player than the original. The payout structure will revert to a team comprising of one less player than the original entry. For example, if you have a player PUSH on an 8-player selection, your entry will become a 7-player selection and the max payout you can receive will be that of a 7-player selection entry. All other players are not affected and the remaining players on the entry are valid. A 2-player selection will result in a refund if a player PUSHES.
                 </p>

                 <p>
                 2.8 If an event is canceled before it starts or doesn't meet the minimum length requirement to be considered official and final, the applicable players on your team selection will be declared as Did Not Play (“DNP”). Likewise, if a player selected on your team is not active in the game or event and resulted in a 0:00 min active gametime, that player will be considered as DNP. As per the rules above for a PUSH, the player will be inactivated from the team and will revert your entry to one less player. As per the example outlined in 2.7, payouts are adjusted to the next level down and a 2-player selection will result in a refund. 
                 </p>
                 
                 <p>
                 2.9 Your entry can remain valid and revert down for a maximum of 3 PUSHES and/or DNPs. If you receive 4 or more PUSHES and/or DNPs, your entry will be voided and refunded. If you receive up to 3 PUSHES and/or DNPs and it results in only one remaining player on your team, the entry will be voided and refunded. Like in the example outlined in 2.7, 3 PUSHES and/or DNPs on an 8-player team will revert the entry to a 5-player team. 
                 </p>

                 <p>
                 2.10 Each contest entry must meet the minimum amount established by BettDraft for the specific contest, with an overall minimum entry fee of $1.00.
                 </p>

                 <p>
                 2.11 The maximum contest entry fee amount is limited by the specific contest rules and by the eligible balance of your account. Maximum contest entry fees may be applied on a market-by-market or patron-by-patron basis. 
                 </p>

                 <p>
                 2.12 BettDraft may restrict, suspend, limit, or modify the availability of a contest on a market-by-market or patron-by-patron basis.
                 </p>

                 <p>
                 2.13 When entering contests, BettDraft provides player stat projections for selection. Changes in projections may occur during the creation of your team and processing of your contest entry, and if so, an alert will be displayed before the entry is placed. By default, the BettDraft Platform will decline a contest entry when projected stat changes occur prior to completing a contest entry. You will need reconfirm and submit your entry again based on the new updated stats provided.
                 </p>

                 <p>
                 2.14 Your selection is your responsibility and by submitting a contest entry, you confirm that you have actively selected and reviewed your selection, players, games and stats and predictions prior to submission. All contest entries are final.
                 </p>

                 <h4>3. Funding and Payouts</h4>

                 <p>
                 3.1 To enter any contest, you must deposit funds into your BettDraft Account. Deposits are made through a third party payment processor, First American Bankcard Inc. (“FABI”). You will need to initially activate and fund your FABI wallet to  be able to transfer funds into your BettDraft account. 
                 </p>

                 <p>
                 3.2 FABI wallet is an online digital account similar to PayPal and you can deposit and withdraw funds from your FABI wallet at any time. You can deposit funds into your FABI wallet using any valid Visa or Mastercard. Transferring funds to you BettDraft Account from your FABI wallet is free and instant. 
                 </p>
                 
                 <p>
                 3.3 All funding methods are subject to First American Bankcard Inc. and BettDraft's anti-money laundering procedures and comply with federal currency transaction reporting thresholds.
                 </p>

                 <p>
                 3.4 Some Bonuses granted by BettDraft, such as those offered as part of promotions or rewards programs, may be used for contest entries but may not be withdrawn. These Bonuses include, but are not limited to, free play points, coupons and other credits.
                 </p>

                 <p>
                 3.5 In order to enter contests, you must have an active and eligible balance available in your BettDraft account. Contest entries are not completed using funds directly from your FABI wallet or any other source other than your active BettDraft balance. 
                 </p>

                 <p>
                 3.6 Payouts on contest entries are made in accordance with the terms, conditions, rules, policies, or other agreements with BettDraft. All final decisions on payouts are made by BettDraft.
                 </p>

                 <p>
                 3.7 If BettDraft determines that one or more individuals have attempted to circumvent the terms, conditions, rules, policies, or other agreements with BettDraft, including maximum contest entry amounts or limitations applicable to you or the maximum payout limits set by these House Rules, BettDraft may void the relevant contest entries.
                 </p>

                 <p>
                 3.8 Payout amounts on all contests are presented at the time of entry. BettDraft reserves the right to change these payouts at any time and without prior notice. Any changes to these payouts will not affect any contest entries initiated prior to the changes made. Payout amounts presented at the point of entry are valid and binding. 
                 </p>

                 <p>
                 3.9 Payouts are credited directly to your BettDraft Account Balance only. Payout amounts are rounded to the nearest cent. 
                 </p>

                 <p>
                 3.10 Withdrawals from your BettDraft account are processed as a funds transfer back to your FABI wallet. Part or all of your FABI wallet balance can be withdrawn to your bank account at any time. You can also retain a balance in your FABI wallet indefinitely, much like you would with a PayPal account.
                 </p>

                 <p>
                 3.11 Deposits made into your FABI wallet are your responsibility and you are liable to the funds credited to your balance to First American Bankcard Inc. In the event if a chargeback for any transaction into your wallet, BettDraft reserves the right to suspend your account, void all active contest entries and void and winnings issued to you from contest entries entered with funds that have been charged back. BettDraft will remove and return to First American Bankcard Inc. any funds remaining in your account to cover the value of the charged back amount. If your account does not have sufficient funds, you will be liable to First American Bankcard Inc. for the outstanding amount pertaining to the charged back transaction. BettDraft reserves the right to indefinitely suspend your account in the event of a chargeback request. 
                 </p>

                 <p>
                 3.12 BettDraft Accounts are subject to an audit at the discretion of management at any time. If it is determined that account balances are inaccurate or in error as a result of posting errors, late decision adjustments, modifications mandated by notifications or decisions by state and federal regulators or other system errors, the BettDraft Account will be adjusted to reflect the findings of the audit. An account may also be adjusted because of the resolution of a customer dispute. In the event an adjustment would result in a negative balance in the account, all activity in the account will be suspended until agreement on the adjustment is reached between the account holder and operator. If the parties are unable to agree on the adjustment the matter will be submitted to the local regulating authorities for resolution as a customer dispute.
                 </p>


                 <h4>4. Contest rules</h4>

                 <p>
                 4.1 To enter a contest, you must create a team with a minimum of 2 players. You will select each player based on a range of available performance stats. For each stat, there will be a projected stat total for the specific game or event such as Fantasy Points, Passing Yards, Rebounds or Goals. For each player that you add to your ticket, you will determine whether that player will achieve more than the stat projection or less. You will make this determination for each player on your team. 
                 </p>

                 <p>
                 4.2 You must select a minimum of 2 and a maximum of 10 players.
                 </p>

                 <p>
                 4.3 Your selection cannot be made up of all players from the same team. You must select at least one player from a different team on each contest entry.
                 </p>

                 <p>
                 4.4 You may only submit a contest entry once. Team selections with the same players, stats and more or less combination than a previously submitted ticket will not be accepted. Further attempts to submit multiple duplicate entries may result in an account suspension.
                 </p>

                 <p>
                 4.5 Payouts are calculated based on a multiplier of your entry fee and based on the number of players you have selected in your team. (See table below) Payout values and the payout multiplier are shown on your ticket at point of entry. On teams comprised of 2 players, you must get both selections correct to receive a payout. On teams comprised of 3 players, you can still receive a payout by getting one selection incorrect. On teams comprised of 4 or more players, you can still receive a payout by getting up to 2 selections incorrect.
                 </p>
               
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

                 <h4>5. Results and settlements</h4>
                
                <p>
                5.1 Final stat results are provided by a third-party provider and considered final and accurate at the official end of the event.
                </p>

                <p>
                5.2 Settlement of events will take place within a maximum of 30 mins after the official results being made public.  BettDraft is not responsible for delays to settlement due to third-party or official results delays.  
                </p>

                <p>
                5.3 Your contest entry is only concluded once the last event of all your selected players has concluded. 
                </p>

                <p>
                5.4 Stat corrections that are issued more than 30 mins after the end of a game or event will not be considered and will not impact the outcome of your contest. 
                </p>

                <p>
                5.5 BettDraft will make available upon request, a transaction log and history of all contest entries and results. Access to these transactions can also be located under account overview in the patron’s account.
                </p>

                <p>
                5.5 All results are final. 
                </p>

                <h4>6. Refunds and voids</h4>

                <p>
                6.1 BettDraft reserves the right to void and refund your entry if you have entered a contest and it is deemed obvious that any of the following circumstances have occurred:
                <br/>
                <li>If players on your team selection are participants in an event that is postponed or cancelled and not rescheduled within a 48-hour time frame.</li>
                <li>Contest entries have been offered, placed and/or accepted due to an Error.</li>
                <li>Contest entries placed while the website was encountering technical problems, that would otherwise not have been accepted.</li>
                <li>Contest entries accepted after the scheduled start time (a past post) of any player selected can be voided.</li>
                <li>Contest entries accepted including players with an incorrect stat value due to a failed feed or stale feed.</li>
                <li>Reported tampering from external integrity monitoring provider for an event.</li>
                </p>

                <p>
                6.2 In cases where you can provide adequate proof that the entry was submitted in error or that your account was subject to unauthorized access, we may void the entry on your behalf. In such cases this must be done immediately after submission, before any stats have changed and cannot be implemented once any of the events on your ticket have started. 
                </p>

                <h4>7. Obvious errors</h4>

                <p>
                7.1. While BettDraft makes reasonable efforts to avoid obvious errors, BettDraft retains the right to settle a contest with the correct stats or void the entry and refund the entry fee, as outlined below.
                </p>

                <p>
                7.2. An illustrative list of 'evident errors' includes:
                </p>

                <p>
                <li>Materially different stats offered compared to those available in the general market when the entry was placed;</li>
                <li>Clearly incorrect stats offered at the time of placing the wager given the probability of the event occurring;</li>
                <li>Misquoted stats resulting from human or system errors, bugs, or defects;</li>
                <li>Errors arising from software and/or system bugs or defects;</li>
                <li>Continuation of accepting contest entries on a market for an event that should have been suspended, including when the event is ongoing, already finished, or the outcome has been determined;</li>
                <li>Errors in determining the amount of winnings/returns paid to you, including due to manual or computer input errors;</li>
                <li>Creation and grading of markets for a non-existent event or matchup.</li>
                </p>

                <p>
                7.3. BettDraft reserves the right to rectify any obvious error regarding a contest entry and settle the contest with the accurate player stats applicable to the contest (excluding the obvious error) when the entry was made, subject to regulatory requirements.
                </p>

                <p>
                7.4. In the event of obvious errors, you acknowledge, understand, and agree that BettDraft reserves the right to take corrective measures to address such errors, including the cancellation, voiding, or refunding of entries or winnings, and the adjustment of your account to resolve the errors, complying with applicable regulatory requirements. You agree to cooperate with BettDraft in resolving such errors and returning any funds or winnings that may have been erroneously paid to you, including the return of such funds or winnings from your Account. You acknowledge that BettDraft retains the right to rectify or otherwise resolve such evident errors at its discretion, subject to compliance with applicable regulatory requirements.
                </p>

                <p>
                7.5. It is your responsibility to promptly notify BettDraft and cooperate with BettDraft in resolving any error or potential error related to your entry or account activity.
                </p>

                <p>
                7.6. If you have utilized or withdrawn any funds credited or awarded to your account due to an error, including using such funds for contest entries, you agree that BettDraft may cancel such entries and/or withhold any winnings from such contests. You further agree to hold any funds credited to your account from such entries and to return such funds to BettDraft upon request for payment.
                </p>

                <p>
                7.7. By using the services provided by BettDraft, you acknowledge, understand, and agree that BettDraft reserves the right to cancel, remove, or modify any of the services at any time.
                </p>


                <h4>8. Prohibited participants</h4>

                <p>
                8.1. Contest entries will not be accepted from individuals below the age of 18, those who are not physically present in an Authorized Gaming Jurisdiction (Texas or Illinois), or those who do not comply with the Applicable Laws of the Authorized Gaming Jurisdiction.
                </p>

                <p>
                8.2. The following individuals may not create or hold a patron account or participate in any contests on the BettDraft Platform:
                </p>

                <p>
                  <li>
                  Any person whose account creation or holding may compromise the integrity of any contest or event.
                  </li>
                 </p>

                <p>
                  <li>
                  Any person prohibited by any regulatory body or applicable Law from placing contest entries, including:
                  </li>
                  <ol>
                  <li>individuals who are self-excluded or barred;</li>
                  <li>any person whom management has deemed to have have violated the terms and conditions set forth by BettDraft;</li>
                  <li>any person who has been determined by state or federal officials to be excluded or barred;</li>
                  <li>individuals placing contest entries as agents or proxies; </li>
                  <li>athletes, coaches, referees, or players involved in any event overseen by their respective sports governing body based on publicly available information; </li>
                  <li>individuals holding positions of authority or influence over event participants, such as coaches, managers, handlers, or athletic trainers; </li>
                  <li>individuals with access to exclusive information on events overseen by their respective sports governing body based on publicly available information; or </li>
                  <li>individuals identified in any lists provided by a sport's governing body to the Regulator.</li>
                  </ol>
                </p>

                <p>
                  <li>Government officials or residents of embargoed countries and/or individuals whose names appear on the U.S. Treasury Department's list of Specially Designated Nationals, the U.S. Department of Commerce Denied Persons' List, Entity List, or similar lists.</li>

                  <li>Individuals prohibited from entering contests with us by the terms of their employment contract.</li>

                  <li>"Key employees" or other employees of BettDraft, acting in their own name or on behalf of another employee, friend, relative, or any other person.</li>   
                </p>

                <p>
                8.3. No member of an athletic organization, including athletes, coaches, managers, trainers, medical personnel, officials, team affiliates, employees, contractors, owners of any professional or collegiate teams, or other individuals involved in authorized sporting events subject to contest entry, may place contest entries on events within their organization or events in which they have direct involvement in their capacity of employment.
                </p>

                <h4>9. Disputes</h4>

                <p>
                For any disputes, please contact our customer support department at support@bettdraft.com.
                </p>

                <h4>10. Responsible gaming</h4>

                <p>
                For responsible gaming please refer to our responsible gaming section. 
                </p>

                <h4>11. Additional Rules</h4>

                <p>
                For any case not covered by these House Rules, the Terms and Conditions or by the contest rules, BettDraft reserves the right to review and provide a ruling for themselves. For any case that are raised with or involves a regulated jurisdiction, the jurisdiction regulatory body will review and provide and ruling themselves. Any cases pertaining to federal law will be passed to and handled by law enforcement.
                </p>

                <h4>12. Sports specific rules and scoring. </h4>
            
                <h4>Football</h4>

                <p>
                    <b>Stat selection scoring</b>
                </p>

                <p>
                Your selection of More or Less will be scored against the stat type you selected. All scoring includes overtime stats.
                </p>

                <p>
                The following Stats are available for Football.
                </p>

                <p>
                    <b>Passing Yards</b>
                </p>

                <p>
                    The total of all passing yards made by the QB where the receiver caught the ball, and the play was ruled as a complete pass. Lateral or passes behind the QB are not considered a pass. Plays where the QB acted as a receiver are not considered a pass.
                </p>

                <p>
                    <b>Pass Completions</b>
                </p>

                <p>
                The total number of passes made by the QB where the receiver caught the ball, and the play was ruled as a complete pass. Lateral or passes behind the QB are not considered a pass. Plays where the QB acted as a receiver are not considered a pass. 
                </p>

                 <p>
                    <b>Rush Attempts</b>
                 </p>

                 <p>
                 Rush Attempts is the number of times a player carried the ball on a running play. 
                 Providing the player has played at least one snap, zero attempts will result in 0 final score. 
                 A catch or reception does not qualify as a rush attempt. 
                 Only laterally passed balls (not a forward pass) or passes behind the QB qualify as a rushing attempt for the receiving player. 
                 NFL officially rules that kneel downs count as rush attempts. Sacks do not count.
                 </p>

                 <p>
                    <b>Receiving Targets</b>
                 </p>

                 <p>
                 The total number of times the ball is thrown towards the receiver. 
The receiver is not required to catch the ball to quality as a receiving target. 
If there are multiple receivers will be in the same area; the NFL official scoring ruling on the targeted player is used and this stat will be in issued accordingly.
                 </p>

                 <p>
                    <b>Receptions</b>
                 </p>
                 
                  <p>
                  The total of all receiving yards for a receiver. 
The receiver must complete the catch and it must be ruled a complete pass for the yardage to be considered.
                  </p>

                  <p>
                    <b>Extra Points Made</b>
                  </p>

                  <p>
                  The total number of extra points successfully converted for a kicker. 
                  </p>

                  <p>
                    <b>Field Goals Made</b>
                  </p>

                  <p>
                  The total number of field goals successfully converted by a kicker. Extra point conversions are excluded from this stat. Zero attempts will result in 0 final score.
                  </p>

                  <p>
                    <b>Punt Yards</b>
                  </p>

                  <p>
                  The total yardage of all punts for a punter. zero attempts will result in 0 final score. 
Punt yards are only the yards from the punt to the reception or point the ball is marked out of bounds.
                  </p>

                  <p>
                    <b>Tackles</b>
                  </p>

                  <p>
                  Includes both Solo Tackles and Assisted Tackles
                  </p>

                  <p>
                    <b>Fantasy Points</b>
                  </p>

                  <p>
                  Fantasy points are based on the sum of all points for each player based on the scoring below. For offensive players, these are calculated on a player level. 
For the defense, these are based on DST/Special teams group scoring.
Kickers must be active in the game to qualify.
                  </p>

                  <p>
                    <b>OFFENSIVE PLAYERS</b>
                  </p>

                  <p>
                  <li>Passing Yards: 1 point per 25 yards</li>
                  <li>Passing Touchdowns: 4 points</li>
                  <li>Passing Interceptions: -2 points</li>
                  <li>Rushing Yards: 1 point per 10 yards</li>
                  <li>Rushing Touchdowns: 6 points</li>
                  <li>Receptions: 1 points (only if using PPR scoring)</li>
                  <li>Receiving Yards: 1 point per 10 yards</li>
                  <li>Receiving Touchdowns: 6 points</li>
                  <li>2-Point Conversions: 2 points</li>
                  <li>Fumbles Lost: -2 points</li>
                  <li>Fumble Recovered for a Touchdown: 6 points</li>
                  </p>

                  <p>
                    <b>TEAM DEFENSE / SPECIAL TEAMS</b>
                  </p>

                  <p>
                  <li>Sacks: 1 point</li>
                   <li>Interceptions: 2 points</li>
                   <li>Fumbles Recovered: 2 points</li>
                   <li>Safeties: 2 points</li>
                   <li>Defensive Touchdowns: 6 points</li>
                   <li>Kick and Punt Return Touchdowns: 6 points</li>
                   <li>2-Point Conversion Returns: 2 points</li>
                   <li>Points Allowed (0): 10 points</li>
                   <li>Points Allowed (1-6): 7 points</li>
                   <li>Points Allowed (7-13): 4 points</li>
                   <li>Points Allowed (14-20): 1 points</li>
                   <li>Points Allowed (21-27): 0 points</li>
                   <li>Points Allowed (28-34): -1 points</li>
                   <li>Points Allowed (35+): -4 points</li>
                  </p>

                  <p>
                    <b>KICKING</b>
                  </p>

                  <p>
                    <li>PAT Made: 1 point</li>
                    <li>FG Made (0-49 yards): 3 points</li>
                    <li>FG Made (50+ yards): 5 points</li>
                  </p>

                  <p>
                  Offensive Players will only be scored on offensive stats and must play at least one offensive snap.
                  </p>
                  
                  <p>
                  Canceled or postponed will result in players from that game being marked as Did Not Play (DNP).
                  </p>

                  <h4>Basketball</h4>

                  <p>
                    <b>Stat selection scoring </b>
                  </p>

                  <p>
                  Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                  </p>

                  <p>
                  The following Stats are available for Basketball. 
                  </p>

                  <p>
                    <b>Points</b>
                  </p>

                  <p>
                  The total number of points scored by an individual player. 
This includes 2-point, 3-point, and free throws.
                  </p>

                  <p>
                    <b>Rebounds</b>
                  </p>

                  <p>
                  The total count of rebounds made by a player. 
                  </p>

                  <p>
                    <b>Assists</b>
                  </p>

                  <p>
                  The total count of all assists made by a player.
                  </p>

                  <p>
                    <b>Three Pointers Made</b>
                  </p>

                  <p>
                  The total count of all three pointers made. 
Only includes made three pointers. Does not include attempts.
                  </p>

                  <p>
                    <b>Free Throws Made</b>
                  </p>

                  <p>
                  The total count of all free throws made.
Only includes made free throws. Does not include attempts.
                  </p>

                  <p>
                    <b>Personal Fouls</b>
                  </p>

                  <p>
                  Personal Fouls will not include technical fouls.
Final determination of all personal files is based on our statistics feed provider.
                  </p>

                  <p>
                    <b>Minutes Played</b>
                  </p>

                  <p>
                  Total number of full minutes played by a player in the game. 
The stat is based on completed minutes played and seconds are not included. For example. 15min: 53sec will not be rounded to 16mins but will be scored as 15 full mins of game time completed.
Less than one minute will result in a 0 final score. 
                  </p>

                  <p>
                    <b>Fantasy Points</b>
                  </p>

                  <p>
                  Fantasy points are based on the sum of all points for each player based on the scoring below.
                  </p>

                  <p>
                  ALL PLAYERS 
                  </p>

                  <p>
                  <li>Three Point Field Goals: 3 points</li>
                  <li>Two Point Field Goals: 2 points</li>
                  <li>Free Throws Made: 1 point</li>
                  <li>Rebounds: 1.2 points</li>
                  <li>Assists: 1.5 points</li>
                  <li>Blocked Shots: 2 points</li>
                  <li>Steals: 2 points</li>
                  <li>Turnovers: -1 points</li>
                  </p>

                  <p>
                  Players must record at least one second of official game time to be counted for entries.
                  </p>

                  <p>
                  Canceled or postponed will result in players from that game being marked as Did Not Play (DNP).
                  </p>

                  <h4>Baseball</h4>

                  <p>
                    <b>Stat selection scoring</b>
                  </p>

                  <p>
                  Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                  </p>

                  <p>
                  The following Stats are available for Baseball.
                  </p>

                  <p>
                  <b>Hits</b>  
                  </p>

                  <p>
                  The number of hits made by a hitter. 
                  </p>

                  <p>
                  <b>Runs</b>  
                  </p>

                  <p>
                  The total runs scored by a player.
                  </p>

                   <p>
                  <b>Strikeouts</b>  
                  </p>

                  <p>
                  The total number of strikeouts by a hitter. 
                  </p>

                  <p>
                  <b>Total Bases</b>  
                  </p>

                  <p>
                  The number of bases a player has gained with hits. 
Values are 1 for first base, 2 for second base, 3 for third base and 4 for a home run.
Walks are not included.
                  </p>

                  <p>
                  <b>Total Outs Pitched</b>  
                  </p>

                  <p>
                  The total number of outs a pitcher has completed.
                  </p>

                   <p>
                  <b>Pitching Strikeouts</b>  
                  </p>

                  <p>
                  The number of strikeouts allowed when the pitcher is pitching.
                  </p>


                  <p>
                  <b>Pitches Thrown</b>  
                  </p>

                  <p>
                  The total number of pitches thrown by a pitcher.
                  </p>

                  <p>
                  <b>Pitched Strikes</b>  
                  </p>

                  <p>
                  The total number of strikes pitched by a pitcher.
                  </p>


                  <p>
                  <b>Hits Allowed</b>  
                  </p>

                  <p>
                  The number of hits allowed by the pitcher while pitching. 
                  </p> 

                  <p>
                    <b>Fantasy Points</b>
                  </p>

                  <p>
                  Fantasy points are based on the sum of all points for each player based on the scoring below. 
                  </p>

                  <p>
                  HITTING
                  </p>

                  <p>
                  <li>Singles: 1 point</li>
                  <li>Doubles: 2 points</li>
                  <li>Triples: 3 points</li>
                  <li>Home Runs: 4 points</li>
                  <li>Runs: 1 point</li>
                  <li>Runs Batted In: 1 point</li>
                  <li>Walks: 1 point</li>
                  <li>Hit By Pitch: 1 point</li>
                  <li>Stolen Bases: 2 points</li>
                  <li>Caught Stealing: -1 point</li>
                  </p>

                  <p>
                   PITCHING
                  </p>

                    <p>
                    <li>
                    Wins: 4 points
                    </li>
                    </p>

                    <p>
                    <li>
                    Saves: 2 points
                    </li>
                    </p>


                    <p>
                    <li>
                    Innings Pitched: 1 point
                    </li>
                    </p>


                    <p>
                    <li>
                    Earned Runs Allowed: -1 point
                    </li>
                    </p> 

                    <p>
                    Hitters must be in the starting lineup and record at least one plate appearance to be eligible. Non eligible hitters will be considered a “Did Not Play” (DNP). Hitters Scores will only be determined by their hitting statistics.
                    </p>

                    <p>
                    Pitchers must record one pitch at any point in the game to be eligible. Non eligible pitchers will be considered a “Did Not Play” (DNP). Pitcher Scores will only be determined by their pitching statistics.
                    </p>

                    <p>Canceled or postponed will result in players from that game being marked as Did Not Play (DNP).</p>


                   <h4>Hockey</h4>     

                      <p>
                        <b>Stat selection scoring </b>
                      </p>

                      <p>
                      Your selection of More or Less will be scored against the stat type you selected.
                      All scoring includes overtime stats.
                      </p>
                        
                        <p>
                        The following Stats are available for Hockey.
                        </p>

                      <p>
                        <b>Goals</b>
                      </p>

                      <p>
                      The total number of goals scored by a player.
Shootout goals are not included.
                      </p>

                      <p>
                        <b>Assists</b>
                      </p>

                      <p>
                      The total number of assists made by a player.
This includes both Primary and Secondary assists.
                      </p>

                      <p>
                        <b>Shots on Goal</b>
                      </p>

                      <p>
                      The total number of shots on goal made by a player.
Shootout goals or shots are not included.
                      </p>

                      <p>
                        <b>Hits</b>
                      </p>

                      <p>
                      The total number of hits made by a player.
                      </p>

                      <p>
                        <b>Faceoffs Won</b>
                      </p>

                      <p>
                      The total number of face offs won by a player.
                      </p>

                      <p>
                        <b>Takeaways</b>
                      </p>
                      
                      <p>
                      The total number of takeaways by a player.
                      </p>

                      <p>
                        <b>Blocked shots</b>
                      </p>

                      <p>
                      The total number of blocked shots by a defensive player.
                      </p>


                      <p>
                        <b>Minutes on Ice</b>
                      </p>

                      <p>
                      Total number of full minutes played by a player in the game. 
The stat is based on completed minutes played and seconds are not included. For example. 15min: 53sec will not be rounded to 16mins but will be scored as 15 full mins of game time completed.
Less than one minute will result in a 0 final score. 
                      </p>

                      <p>
                        <b>Goalie Saves</b>
                      </p>

                      <p>
                      The total number of saves made by goalie.
Shootout saves are not included.
                      </p>

                      <p>
                        <b>Fantasy Points</b>
                      </p>

                      <p>
                      Fantasy points are based on the sum of all points for each player based on the scoring below.
                      </p>

                      <p>SKATERS</p>

                      <p>
                      <li>Goals: 3 points</li>
                      <li>Assists: 2 points</li>
                      <li>Shots On Goal: 0.5 points</li>
                      <li>Plus/Minus: 1 point</li>
                      <li>Blocks: 0.5 points</li>
                      <li>Power Play Goals/Assists: 0.5 points</li>
                      <li>Short-Handed Goals/Assists: 0.5 points</li>
                      <li>Shootout Goals: 0.2 points</li>
                      </p>

                      <p>
                      GOALTENDERS
                      </p>

                      <p>
                        <li>Wins: 3 points</li>
                        <li>Goals Against: -1 points</li>
                        <li>Saves: 0.2 points</li>
                        <li>Shutouts: 2 points</li>
                      </p>

                      <p>
                      Players must record at least one second of official game time to be eligible.
                      </p>
                      
                      <p>
                      Goalies must start the game to be eligible. 
Non eligible goalies will be considered a “Did Not Play” (DNP). 
                      </p>

                      <p>
                      Players do not accrue any points for shootout goals or shootout saves.
                      </p>

                      <p>
                      Canceled or postponed will result in players from that game being marked as Did Not Play (DNP).
                      </p>

                      <h4>Soccer</h4>

                      <p>
                        <b>Stat selection scoring </b>
                      </p>

                      <p>
                      Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                      </p>

                      <p>
                      The following Stats are available for Soccer.
                      </p>

                      <p>
                        <b>Goalkeeper Saves</b>
                      </p>

                      <p>
                      The total number of saves a goalkeeper makes. 
A save is where the ball is cleared or stopped from entering the goal from shots on target. 
                      </p>

                      <p>
                        <b>Shots</b>
                      </p>

                      <p>
                      The total number of shots made towards the goal by a player.
This includes shots made and shots made on goal. 
                      </p>

                      <p>
                        <b>Shots on Goal</b>
                      </p>

                      <p>
                      The total number of shots on goal made by a player. 
A shot on goal is an attempted goal where the ball was saved and cleared. If the ball was not stopped, it would have resulted in a goal. 
Goals are recorded as a goal and not a shot on goal. 
                      </p>

                      <p>
                        <b>Tackles</b>
                      </p>

                      <p>
                      The total number of tackles made by a player.
A tackle is defined as where a player connects with the ball in a ground challenge where he successfully takes the ball away from the player in possession. This will account for all tackles regardless of the outcome of the tackle. 
                      </p>

                      <p>
                        <b>Goals</b>
                      </p>

                      <p>The total number of goals made by a player.</p>

                      <p>
                        <b>Passes Attempted</b>
                      </p>

                      <p>The total number of pass attempts made by a player. A pass attempt is where a player passes the ball in a clear direction of another team member. 
Pass attempts are counted as the number of passes made regardless of whether the ball connected with the team member or if it was intercepted or went out of bounds. 
Passes where there was no team member in the general vicinity of the ball is not considered a pass attempt. 
                       </p>

                      <p>
                        <b>Passes Completed</b>
                      </p>

                      <p>
                      The total number of pass completions made by a player. 
A completed pass is where a player passes the ball directly to another team member and the team member receives and has position of the ball.
                      </p>

                      <p>
                        <b>Shots Assisted</b>
                      </p>

                      <p>
                      The total number of assisted shots made by a player. 
An assisted shot is the final pass leading to the recipient of the ball having an attempt at goal. 
The play does not need to result in a goal to qualify but can result in a shot, shot on goal or goal. 
                      </p>

                      <p>
                        <b>Crosses</b>
                      </p>

                      <p>
                      The total number of crosses made by a player. 
A cross is a pass from a wide area of the field towards the center of the field near the opponent's goal.
                      </p>

                      <p>
                        <b>Clearance</b>
                      </p>

                      <p>
                      The total number of clearances made by a player.
This is a defensive action where a player kicks the ball away from his own goal with no intended recipient.
                      </p>

                      <p>
                        <b>Fantasy Points</b>
                      </p>

                      <p>
                      Fantasy points are based on the sum of all points for each player based on the scoring below. 
                      </p>

                      <p>
                      ALL PLAYERS
                      </p>

                      <p>
                      <li>Goals: 10 points</li>
                      <li>Assists: 6 points</li>
                      <li>Shots: 1 point</li>
                      <li>Shots On Goal: 1 point</li>
                      <li>Crosses: 0.75 points</li>
                      <li>Fouled: 1 point</li>
                      <li>Fouls: -0.5 points</li>
                      <li>Tackles Won: 1 point</li>
                      <li>Interceptions: 0.5 points</li>
                      <li>Yellow Cards: -1.5 points</li>
                      <li>Red Cards: -3 points</li>
                      <li>Penalty Kick Misses: -5 points</li>
                      </p>

                      <p>
                      DEFENDERS
                      </p>

                      <p>
                        <li>Clean Sheets: 3 points</li>
                      </p>

                      <p>GOALKEEPERS</p>

                      <p>
                        <li>Saves: 2 points</li>
                        <li>Goals Against: -2 points</li>
                        <li>Wins: 5 points</li>
                        <li>Clean Sheets: 5 points</li>
                        <li>Penalty Kick Saves: 3 points</li>
                      </p>

                     <p>
                     Penalty Shootout goals DO NOT count towards goal totals.
                     </p>

                     <p>
                     Players must start the game or play at least one full half to be counted for entries.
Non eligible goalies will be considered a “Did Not Play” (DNP).
                     </p>

                     <p>
                     In the event a soccer match does not play the entirety of 90 minutes, due to abandonment, suspension, or other reasons, all players in the match will be marked as DNP.
Canceled or postponed matches will result in players from that game being marked as Did Not Play (DNP).
                     </p>

                     <h4>Golf</h4>

                     <p>
                        <b>Stat selection scoring</b>
                     </p>

                     <p>
                     Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                     </p>

                     <p>The following Stats are available for Golf.</p>

                     <p>
                        <b>Total Strokes</b>
                     </p>

                     <p>
                     The total number of strokes completed in the tournament by a player. 
Strokes includes drives, strokes from fairways, bunkers and rough as well as puts. 
Drops are considered a stroke. 
                     </p>


                     <p>
                        <b>
                        Birdies
                        </b>
                     </p>

                     <p>
                     The total Birdies a golfer has scored in the tournament. 
                     </p>

                     <p>
                        <b>
                        Pars 
                        </b>
                     </p>

                     <p>
                     The total pars a golfer has scored in the tournament. 
                     </p>

                     <p>
                        <b>Bogeys</b>
                     </p>

                     <p>
                     The total number of bogeys a golfer has scored in the tournament. 
                     </p>

                     <p>
                        <b>
                        Fantasy Points
                        </b>
                     </p>

                     <p>
                     Fantasy points are based on the sum of all points for each player based on the scoring below.
                     </p>

                     <p>
                     PER HOLE SCORING
                     </p>

                     <p>
                     <li>Double Eagle: 20 points</li>
                     <li>Eagle: 8 points</li>
                     <li>Birdie: 3 points</li>
                     <li>Par: 0.5 points</li>
                     <li>Bogey: -0.5 points</li>
                     <li>Double Bogey: -1 point</li>
                     <li>Worse than Double Bogey: -1 point</li>
                     </p>

                     <p>
                     TOURNAMENT FINISH SCORING
                     </p>

                     <p>
                     <li>1st: 30 points</li>
                     <li>2nd: 20 points</li>
                     <li>3rd: 18 points</li>
                     <li>4th: 16 points</li>
                     <li>5th: 14 points</li>
                     <li>6th: 12 points</li>
                     <li>7th: 10 points</li>
                     <li>8th: 9 points</li>
                     <li>9th: 8 points</li>
                     <li>10th: 7 points</li>
                     <li>11th-15th: 6 points</li>
                     <li>16th-20th: 5 points</li>
                     <li>21st-25th: 4 points</li>
                     <li>26th-30th: 3 points</li>
                     <li>31st-40th: 2 points</li>
                     <li>41st-50th: 1 points</li>
                     </p>

                     <p>
                     STREAKS AND BONUSES
                     </p>

                     <p>
                        <li>Streak of 3 Birdies of Better (Max 1 Per Round): 3 points</li>
                        <li>Bogey Free Round: 3 points</li>
                        <li>All 4 Rounds Under 70 Strokes: 5 points</li>
                        <li>Hole in One: 10 points</li>
                     </p>

                     <p>Golfers must complete a minimum of 9 holes to be eligible.
Non eligible golfers will be considered a “Did Not Play” (DNP).
                    </p>

                    <p>
                    All playoff holes are excluded from scoring.
                    </p>

                    <p>
                    Canceled or postponed tournaments will result in players from that tournament being marked as Did Not Play (DNP).
                    </p>


                    <h4>NASCAR</h4>

                    <p>
                        <b>Stat selection scoring </b>
                    </p>

                    <p>
                    Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                    </p>

                    <p>
                    The following Stats are available for NASCAR.
                    </p>

                    <p>
                        <b>Fantasy Points</b>
                    </p>

                    <p>
                    Fantasy points are based on the sum of all points for each driver based on the scoring below:
                    </p>

                    <p>
                    RACE SCORING
                    </p>
                    
                    <p>
                        <li>Place Differential: +/- 1 point</li>
                        <li>Laps Led: 0.25 points</li>
                    </p>

                    <p>FINAL POSITION SCORING</p>

                    <p>
                    <li>1st: 46 points</li>
                    <li>2nd: 42 points</li>
                    <li>3rd: 41 points</li>
                    <li>4th: 40 points</li>
                    <li>5th: 39 points</li>
                    <li>6th: 38 points</li>
                    <li>7th: 37 points</li>
                    <li>8th: 36 points</li>
                    <li>9th: 35 points</li>
                    <li>10th: 34 points</li>
                    <li>11th: 33 points</li>
                    <li>12th: 32 points</li>
                    <li>13th: 31 points</li>
                    <li>14th: 30 points</li>
                    <li>15th: 29 points</li>
                    <li>16th: 28 points</li>
                    <li>17th: 27 points</li>
                    <li>18th: 26 points</li>
                    <li>19th: 25 points</li>
                    <li>20th: 24 points</li>
                    <li>21st: 23 points</li>
                    <li>22nd: 22 points</li>
                    <li>23rd: 21 points</li>
                    <li>24th: 20 points</li>
                    <li>25th: 19 points</li>
                    <li>26th: 18 points</li>
                    <li>27th: 17 points</li>
                    <li>28th: 16 points</li>
                    <li>29th: 15 points</li>
                    <li>30th: 14 points</li>
                    <li>31st: 13 points</li>
                    <li>32nd: 12 points</li>
                    <li>33rd: 11 points</li>
                    <li>34th: 10 points</li>
                    <li>35th: 9 points</li>
                    <li>36th: 8 points</li>
                    <li>37th: 7 points</li>
                    <li>38th: 6 points</li>
                    <li>39th: 5 points</li>
                    <li>40th: 4 points</li>
                    <li>41st: 3 points</li>
                    <li>42nd: 2 points</li>
                    <li>43rd: 1 points</li>
                    </p>

                    <p>
                    Drivers must start the race to be eligible. 
Non eligible drivers will be considered a “Did Not Play” (DNP).
                    </p>

                    <p>
                    Canceled or postponed races will result in drivers from that driver being marked as Did Not Play (DNP).
                    </p>

                    <h4>Formula 1</h4>

                    <p>
                        <b>Stat selection scoring </b>
                    </p>

                    <p>
                    Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                    </p>

                    <p>
                    The following Stats are available for Formula 1.
                    </p>

                    <p>
                        <b>Starting position</b>
                    </p>

                    <p>
                    Based on the qualifying staring position of your selected driver. 
Positions are presented in a .5 format. For example, if your selected driver's starting position stat is 4.5 then less would be any position from 1-4 and more would be any position 5 or higher. 
Penalties than result is a driver starting at the back of the grid is considered the more.
                    </p>

                    <p>
                        <b>Fantasy Points</b>
                    </p>

                    <p>
                    Fantasy points are based on the sum of all points for each driver based on the scoring below:
                    </p>

                    <p>
                    RACE SCORING
                    Fastest Lap + Place Points
                    </p>

                    <p>
                        <li>Race Fastest Lap: 1 Point *Only 1 fastest lap is awarded per race.</li>
                    </p>

                    <p>
                    FINAL POSITION SCORING
                    </p>

                    <p>
                    <li>1st Place:	25 points</li>
                    <li>2nd Place:	18 points</li>
                    <li>3rd Place:	15 points</li>
                    <li>4th Place:	12 points</li>
                    <li>5th Place:	10 points</li>
                    <li>6th Place:	 6 points</li>
                    <li>8th Place:	 4 points</li>
                    <li>9th Place:	 2 points</li>
                    <li>10th Place:	 1 points</li>
                    <li>11th+ Place: 0 points</li>

                    </p>

                    <p>
                    Drivers must start the race to be eligible. 
Non eligible drivers will be considered a “Did Not Play” (DNP).  
                    </p>

                    <p>
                    Canceled or postponed races will result in drivers from that driver being marked as Did Not Play (DNP).
                    </p>

                    <h4>Boxing</h4>

                     <p>
                        <b>Stat selection scoring</b>
                     </p>

                     <p>
                     Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                     </p>

                     <p>
                        The following Stats are available for Boxing.
                     </p>

                     <p>
                        <b>Fantasy Points</b>
                     </p>

                     <p>
                     Fantasy points are based on the sum of all points for each driver based on the scoring below:
                     </p>

                     <p>
                     BOXING SCORING
                     </p>

                     <p>
                     <li>Punch Landed:  			0.5 points</li>
                     <li>Knockdown on Opponent:      12 points</li>
                     <li>Being Knocked Down by Opponent:  -12 points</li>
                     <li>Win Within Rounds 1-2:		100 points</li>
                     <li>Win Within Rounds 3-6:		75 points</li>
                     <li>Win Within Rounds 7-10:		50 points</li>
                     <li>Win Within Rounds 11-12:		25 points</li>
                     <li>Decision Win:				20 points</li>
                     </p>

                     <p>
                     Boxers must record at least one second of fight time to be eligible. 
Non eligible boxers will be considered a “Did Not Play” (DNP).
                     </p>

                     <p>
                     Canceled or postponed fights will result in drivers from that boxer being marked as Did Not Play (DNP).
                     </p>

                     <h4>MMA</h4>

                     <p>
                        <b>Stat selection scoring </b>
                     </p>

                     <p>
                     Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                     </p>

                     <p>The following Stats are available for MMA.</p>
                    
                    <p>
                        <b>Fantasy Points</b>
                    </p>

                    <p>
                    Fantasy points are based on the sum of all points for each driver based on the scoring below:
                    </p>

                    <p>
                    MMA SCORING
                    </p>

                    <p>
                    <li>Significant Strikes:		0.6 points</li>
                    <li>Takedown:			6 points</li>
                    <li>Takedown Defense:		3 points</li>
                    <li>Submission Attempt:		5 points</li>
                    <li>Knockdown:			12 points</li>
                    <li>1st Round Win:		100 points</li>
                    <li>2nd Round Win:		75 points</li>
                    <li>3rd Round Win:		50 points</li>
                    <li>4th Round Win:		35 points</li>
                    <li>5th Round Win:		25 points</li>
                    <li>Decision Win:			20 points</li>
                    </p>

                    <p>
                    Fighters must record at least one second of fight time to be eligible. 
Non eligible fighter will be considered a “Did Not Play” (DNP).
                    </p>

                    <p>
                    Canceled or postponed fights will result in drivers from that fighter being marked as Did Not Play (DNP).
                    </p>

                    <h4>Tennis</h4>
                    
                    <p>
                        <b>Stat selection scoring</b>
                    </p>

                    <p>
                    Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                    </p>
                    
                    <p>The following Stats are available for Tennis.</p>

                    <p>
                        <b>Aces</b>
                    </p>

                    <p>
                    The total number of Aces achieved by a player throughout the match.
                    </p>

                    <p>
                        <b>Double Faults</b>
                    </p>

                    <p>
                    The total number of double faults made by a player throughout the match.
                    </p>

                    <p>
                        <b>Games Won</b>
                    </p>

                    <p>
                    The total number of games won in the match across all sets.
                    </p>

                    <p>
                        <b>Fantasy Points</b>
                    </p>

                    <p>
                    Fantasy points are based on the sum of all points for each player based on the scoring below:
                    </p>

                    <p>
                    TENNIS SCORING
                    </p>

                    <p>
                    <li>Match Played:	10 points</li>
                    <li>Game Win:	1 points</li>
                    <li>Game Loss:	-1 points</li>
                    <li>Set Won:	3 points</li>
                    <li>Set Loss:	-3 points</li>
                    <li>Ace:		0.5 points</li>
                    <li>Double Fault:	-0.5 points</li>
                    </p>

                    <p>
                    Players must record at least one serve to be eligible. 
Non eligible players will be considered a “Did Not Play” (DNP).
                    </p>

                    <p>
                    Canceled or postponed matches will result in players from that match being marked as Did Not Play (DNP).
                    </p>

                    <h4>Cricket</h4>

                    <p>
                        <b>Stat selection scoring</b>
                    </p>

                    <p>
                    Your selection of More or Less will be scored against the stat type you selected.
All scoring includes overtime stats.
                    </p>

                    <p>
                    The following Stats are available for cricket.
                    </p>

                    <p>
                        <b>Runs</b>
                    </p>

                    <p>
                    The total runs made by a batter. 
This includes single runs, boundary runs (4) and Six's (6)
                    </p>

                    <p>
                        <b>Bowled Wickets</b>
                    </p>

                    <p>
                    The number of batters bowled out by a bowled wicket. 
Does not include run outs. 
                    </p>

                    <p>
                        <b>Catches</b>
                    </p>

                    <p>
                    Total catches made by a fielder.
                    </p>

                    <p>
                   <b>Fantasy Points</b>
                    </p>

                    <p>
                    Fantasy points are based on the sum of all points for each player based on the scoring below:
                    </p>
                    
                    <p>BATTING SCORING</p>

                    <p>
                    <li>Run: 1 points</li>
                    <li>Boundary Bonus:	1 points</li>
                    <li>Six Bonus: 		2 points</li>
                    <li>30 Run Bonus:		4 points</li>
                    <li>Half-Century Bonus:	8 points</li>
                    <li>Century Bonus:	16 points</li>
                    </p>

                    <p>
                    Bowling
                    </p>

                    <p>
                    <li>Wicket (Excluding Run Out):	25 points</li>
                    <li>Bonus (LBW/Bowled): 	8 points</li>
                    <li>3 Wicket Bonus:		4 points</li>
                    <li>4 Wicket Bonus:		8 points</li>
                    <li>5 Wicket Bonus:		16 points</li>
                    <li>Maiden Over:			12 points</li>
                    </p>

                    <p>
                    Fielding
                    </p>

                    <p>
                    <li>Catch:				8 points</li>
                    <li>3 Catch Bonus:		4 points</li>
                    <li>Stumping:			12 points</li>
                    <li>Run out (Direct hit):		12 points</li>
                    <li>Run out (Not a direct hit):	6 points</li>
                    </p>

                    <p>
                    Batters must bat at least once to be considered eligible. 
Bowlers need to complete at least one bowl to be considered eligible. 
Fielders need to field for at least one inning to be considered eligible. 
                    </p>

                    <p>
                    Non eligible players will be considered a “Did Not Play” (DNP).
                    </p>

                    <p>
                    Canceled or postponed matches will result in players from that match being marked as Did Not Play (DNP).
                    </p>    
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
