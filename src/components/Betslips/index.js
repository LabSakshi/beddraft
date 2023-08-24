import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../redux/Actions/Actions";
import { useState, useEffect } from "react";

import {
  calculateOdds,
  calculateReverseOdds,
} from "../../Utility/functions/Helper";
import { debounce } from "@mui/material";
const Betslips = (props) => {
  const dispatch = useDispatch();
  const [wager, setWager] = useState("");
  const [towin, setTowin] = useState("");
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const {
    title,
    displayName,
    priceUS,
    t1Title,
    t2Title,
    t1Spread1,
    t1Spread2,
    t1Money1,
    t1Money2,
    t1Total1,
    t1Total2,
    tHome,
    tTie,
    tAway,
    time,
    type,
    betId,
  } = props.data;

  const state = useSelector((state) => state);
  let betslipLength = state.betslip.betslips.length;
  const isParlay = state.betslip.parlayBets;
  //handle remove symbol click event
  const handleRemoveBetslip = () => {
    dispatch({
      type: Actions.REMOVE_SELECTED_BETSLIP,
      removeEleIndex: props.index,
    });
    if (betslipLength <= 2) {
      dispatch({
        type: Actions.PARLAY_BETS,
        data: false
      });
    }
  };
  const checkWager = debounce((value) => {
    value = parseInt(value);
    console.log('State:', state);
    if (value < parseInt(state.betslip.betConfiguration["min_wager"])) {
      setDisplay(true);
      setMessage(
        `Wager must be atleast ${state.betslip.betConfiguration["min_wager"]}`
      );
    } else if (
      value > parseInt(state.betslip.betConfiguration["max_wager"])
    ) {
      setDisplay(true);
      setMessage(
        `Your Requested bet is over the allowed limit ${state.betslip.betConfiguration["max_wager"]}`
      );
    } else {
      setDisplay(false);
      setMessage("");
    }
  }, 500);

  useEffect(() => {
    let newbets = state.betslip.betslips.map((elem) => ({
      ...elem,
      wager: "",
      toWin: "",
    }));
    dispatch({ type: Actions.BETSLIP_RATES, data: newbets });
  }, [state.betslip.betslips.length > 1]);

  const checkTowin = debounce((value) => {
    if (value < state.betslip.betConfiguration["min_win"]) {
      setDisplay(true);
      setMessage(
        `To Win must be atleast ${state.betslip.betConfiguration["min_win"]}`
      );
    } else if (value < state.betslip.betConfiguration["max_win"]) {
      setDisplay(true);
      setMessage(
        `Your Requested bet is over the allowed limit ${state.betslip.betConfiguration["max_win"]}`
      );
    } else {
      setDisplay(true);
    }
  }, 500);
  async function handleOnchange(e, input) {
    let value = e.target.value;
    let odds =
      t1Spread2 ?? t1Money2 ?? t1Total2 ?? priceUS ?? tHome ?? tTie ?? tAway;
    var calcualtedOdd = calculateOdds(odds, value);

    if (input == "wager") {
      value != "" && checkWager(value);
      setWager(value);
      setTowin(calcualtedOdd);
    } else {
      value != "" && checkTowin(value);
      setTowin(value);
      setWager(calculateReverseOdds(odds, value));
    }

    var data = state.betslip.betslips.filter((ele) => {
      if (ele.betId == betId) {
        let tempBetslip = ele;
        tempBetslip["wager"] = value;
        tempBetslip["toWin"] = calcualtedOdd;

        return tempBetslip;
      } else {
        return ele;
      }
    });

    dispatch({ type: Actions.BETSLIP_RATES, data: data });
  }

  let value = t1Spread2 ??
    t1Money2 ??
    t1Total2 ??
    priceUS ??
    tHome ??
    tTie ??
    tAway

  return (
    <div className="main-overflow-middle ">
      <div className="flex-basis-grow">
        <div className="main-overflow-div">
          <div className="height-space"> </div>
          <div className="white-bg-div">
            <div className="white-bg-border"></div>
          </div>
          <div className="flex-hori-flex-start ">
            <div className="column-vertical-left-flex pt-6">
              <div
                className="right-remove-icon column-vertical-center-nobasis"
                onClick={() => {
                  handleRemoveBetslip();
                }}
              >
                <FiMinusCircle />
              </div>
            </div>
            <div className="grow-flex-basis-start pt-16">
              <div className="grow-flex-basis-start">
                <div className="column-vertical-left-nobasis pb-12 pr16">
                  <div className="grow-flex-basis-start">
                    <div className="flex-content-center space-between-flex">
                      <div className="dflex-start-strech">
                        {type === 'Tie' ?
                          <span className="game-name mr-4">
                            Draw</span>
                          :
                          <span className="game-name mr-4">
                            {displayName ? displayName : t1Title}</span>
                        }

                        <span className="game-point game-name">
                          {t1Spread1 ?? t1Money1 ?? t1Total1}
                        </span>
                        {/* <span className="game-symbol">
                          <RiMoneyDollarCircleLine />
                        </span> */}
                      </div>

                      <div className="result-value">

                        <span className="result-value-icon red-color">
                          {value >= 0 ? <AiFillCaretUp color="green" /> : <AiFillCaretDown />}
                        </span>
                        <span className={value >= 0 ? "game-name green-color" : "game-name red-color"}>
                          {t1Spread2 ??
                            t1Money2 ??
                            t1Total2 ??
                            priceUS ??
                            tHome ??
                            tTie ??
                            tAway}
                        </span>
                      </div>
                    </div>
                    <div className="under-game-value">
                      <span>{type} Betting</span>
                    </div>
                    <div className="space-between-flex input-top-head">
                      <span style={{ width: '50%' }}>
                        {t1Title} @ {t2Title}
                      </span>
                      <span>{time}</span>
                    </div>
                  </div>
                </div>
                <div className="main-input-box column-vertical-center-flex">
                  {!isParlay && (
                    <div className="justify-equaly">
                      <label className="flex-basis-grow mr-8">
                        <div className="flex-basic-grow input-div-border">
                          <div className="grow-flex-basis-start">
                            <span className="label-name">WAGER</span>
                            <div className="input-with-symbol flex-center-start">
                              {/* <span>$</span> */}
                              <input
                                value={wager}
                                className="input-box-no"
                                type="number"
                                placeholder=""
                                onChange={(e) => handleOnchange(e, "wager")}
                              // onBlur={() => {
                              //   checkWager();
                              // }}
                              />
                            </div>
                          </div>
                        </div>
                      </label>

                      <label className="flex-basis-grow mr-8">
                        <div className="flex-basic-grow input-div-border">
                          <div className="grow-flex-basis-start">
                            <span className="label-name">
                              {/* Potential Winnings  */}
                              TO WIN
                            </span>
                            <div className="input-with-symbol flex-center-start">
                              {/* <span>$</span> */}
                              <input
                                value={towin}
                                className="input-box-no"
                                type="number"
                                placeholder=""
                                onChange={(e) => handleOnchange(e, "towin")}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                {display && betslipLength <= 1 && (
                  <div className="column-vertical-left-flex border-top">
                    <div className="column-vertical-left-flex pt-12 pb-12">
                      <div className="column-vertical-left-nobasis bg-space16">
                        <div className="flex-basic-grow">
                          <span className="span-pay">{message}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Betslips;
