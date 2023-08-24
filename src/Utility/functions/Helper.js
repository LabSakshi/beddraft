import { Image_Url, SportImage_Url } from "../../constant/Environment";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
};

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const formatPlayerData = (data, martketIdArray = []) => {
  let formattedData = [];

  data.forEach((element) => {
    const { sport, location, league, startDate, participants } =
      element.fixture;
    let tempData = {};
    let marketfilteredData = element?.markets?.filter((marketEle) => {
      return martketIdArray.includes(marketEle.id);
    });

    const key = "id";
    let uniqueArr = [
      ...new Map(marketfilteredData?.map((item) => [item[key], item])).values(),
    ];

    uniqueArr = updateArray(uniqueArr, martketIdArray);

    let priority = [2, 1];
    let participantList = checkPosition(participants, priority);
    tempData.marketData = element?.markets; //uniqueArr;
    tempData.sport = sport;
    tempData.location = location;
    tempData.league = league;
    tempData.participants = participantList;
    tempData.startDate = startDate;
    tempData.fixtureId = element.fixtureId;
    tempData.id = element.id;
    tempData.goLive = element.fixture.goLive;
    if (tempData.marketData.length > 0) {
      formattedData.push(tempData);
    }
  });

  return formattedData;
};

export const formatApiData = (data, martketIdArray) => {
  let formattedData = [];

  data.forEach((element) => {
    const { sport, location, league, startDate, participants } =
      element.fixture;

    let tempData = {};
    let marketfilteredData = element?.markets?.filter((marketEle) => {
      return martketIdArray.includes(marketEle.id);
    });

    const key = "id";
    let uniqueArr = [
      ...new Map(marketfilteredData?.map((item) => [item[key], item])).values(),
    ];

    uniqueArr = updateArray(uniqueArr, martketIdArray);

    let priority = [2, 1];
    let participantList = checkPosition(participants, priority);
    tempData.marketData = uniqueArr;
    tempData.sport = sport;
    tempData.location = location;
    tempData.league = league;
    tempData.participants = participantList;
    tempData.startDate = startDate;
    tempData.fixtureId = element.fixtureId;
    tempData.id = element.id;
    tempData.goLive = element.fixture.goLive;
    if (tempData.marketData.length > 0) {
      formattedData.push(tempData);
    }
  });

  return formattedData;
};

export const formatWagerData = (data, martketIdArray) => {
  let formattedData = [];

  data.forEach((element) => {
    const { sport, location, league, startDate, participants } =
      element.fixture;

    let tempData = {};
    let marketfilteredData = element.markets.filter((marketEle) => {
      return martketIdArray.includes(marketEle.id);
    });

    const key = "id";
    let uniqueArr = [
      ...new Map(marketfilteredData.map((item) => [item[key], item])).values(),
    ];

    uniqueArr = updateArray(uniqueArr, martketIdArray);

    let priority = [2, 1];
    let participantList = checkPosition(participants, priority);
    tempData.marketData = uniqueArr;
    tempData.sport = sport;
    tempData.location = location;
    tempData.league = league;
    tempData.participants = participantList;
    tempData.startDate = startDate;
    tempData.fixtureId = element.fixtureId;
    tempData.id = element.id;

    formattedData.push(tempData);
  });

  return formattedData;
};

export const formatEventIdData = (data, martketIdArray, eventId) => {
  let formattedData = [];

  data.forEach((element) => {
    const { sport, location, league, startDate, participants } =
      element.fixture;
    const EventId = element.fixtureId;
    if (EventId === eventId) {
      let tempData = {};
      let marketfilteredData = element.markets.filter((marketEle) => {
        return martketIdArray.includes(marketEle.id);
      });

      const key = "id";
      let uniqueArr = [
        ...new Map(
          marketfilteredData.map((item) => [item[key], item])
        ).values(),
      ];

      uniqueArr = updateArray(uniqueArr, martketIdArray);

      let priority = [2, 1];
      let participantList = checkPosition(participants, priority);
      tempData.marketData = uniqueArr;
      tempData.sport = sport;
      tempData.location = location;
      tempData.league = league;
      tempData.participants = participantList;
      tempData.startDate = startDate;
      tempData.fixtureId = element.fixtureId;
      tempData.id = element.id;

      formattedData.push(tempData);
    }
  });

  return formattedData;
};

const updateArray = (arr, arr2) => {
  return arr.sort((a, b) => arr2.indexOf(a.id) - arr2.indexOf(b.id));
};

const checkPosition = (arr, arr2) => {
  return arr.sort(
    (a, b) =>
      arr2.indexOf(parseInt(a.position)) - arr2.indexOf(parseInt(b.position))
  );
};

const checkBetName = (arr) => {
  arr.map((value, index) => {
    if (value.id == 28) {
      value.bets.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
  });
  return arr;
};

export const calculateOdds = (odds, stake) => {
  if (odds >= 0) {
    let total = stake * (odds / 100) + Number(stake); //5*(220/100)+5
    return total.toFixed(2);
  } else {
    let total = stake / (Math.abs(odds) / 100) + Number(stake);
    return total.toFixed(2);
  }
};

export const calculateReverseOdds = (odds, towin) => {
  if (odds >= 0) {
    return towin / (odds / 100) + 1;
  } else {
    return (towin * (odds / 100)) / (1 + odds / 100);
  }
};
export const calculateAllReverseOdds = (odds, stake) => {
  if (odds >= 0) {
    return stake * (odds / 100) + Number(stake); //5*(220/100)+5
  } else {
    return stake / (Math.abs(odds) / 100) + Number(stake);
  }
};
export const calculateAllOdds = (odds, stake) => {
  let totalodds = 1;
  let money = 1;
  let spread = 1;
  let total = 1;
  let usodds;
  odds.map((item) => {
    let first = item.t1Spread2 ?? item.tHome ?? item.priceUS;
    let second = item.t1Money2 ?? item.tTie;
    let third = item.t1Total2 ?? item.tAway;

    if (first != undefined) {
      if (first >= 0) {
        spread = (first / 100 + 1) * spread;
      } else {
        spread = (1 - 100 / first) * spread;
      }
    } else if (second != undefined) {
      if (second >= 0) {
        money = (second / 100 + 1) * money;
      } else {
        money = (1 - 100 / second) * money;
      }
    } else {
      if (third >= 0) {
        total = (third / 100 + 1) * total;
      } else {
        total = (1 - 100 / third) * total;
      }
    }
  });

  totalodds = spread * money * total;

  usodds = (totalodds - 1) * 100;

  var underdog = calculateOdds(usodds, stake);
  return underdog;
};

// filter data on the basis of event id
export const filterEventData = (data, multipleEventId) => {
  return data.map((item) => {
    const newdata = item.markets.filter((element) =>
      multipleEventId.includes(element.id)
    );
    return {
      fixtureId: item.fixtureId,
      markets: newdata,
    };
  });
};

export const getImageUrl = (name, sportName) => {
  let tempNmae = name?.replace(". ", ".").replace(/[^\w]/g, "_")?.toLowerCase();
  if (sportName === "National Collegiate Athletic Association (NCAA)") {
    sportName = "ncaaf";
  }
  let imageUrl =
    `${Image_Url}` + sportName?.toLowerCase() + "/" + tempNmae + ".png";
  return imageUrl;
};

export const getSportImageUrl = (sportName) => {
  let imageUrl = `${SportImage_Url}` + sportName?.toLowerCase() + ".svg";
  return imageUrl;
};

export const getMarketSingleData = (data) => {
  let newmarket = [];
  data.forEach((element) => {
    if (element.markets.length > 0) {
      element.markets.map((item, index) => {
        if (newmarket.length == 0) {
          newmarket.push({
            id: `${element.id}_${index}`,
            name: item.statName,
          });
        } else {
          let filterData = newmarket.filter((d) => d.name == item.statName);

          if (filterData.length == 0) {
            newmarket.push({
              id: `${element.id}_${index}`,
              name: item.statName,
            });
          }
        }
      });
    }
  });
  return newmarket;
};
