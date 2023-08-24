import React from "react";
import "./scoring.css"

const Scoring = () => {
  return (
    <div>
      <div className="container bg-color-pp space-bottom">
        <div className="inner-smallspace-pp">
          <div className="row">
            <div className="col-md-12">
              <div className="content-page-design">
                
                <h2 style={{fontSize:"28px"}}>Scoring </h2>

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

export default Scoring;
