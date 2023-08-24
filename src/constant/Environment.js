export const endPoints = {
  apiBaseUrl: 'https://ind-dev-accountapi.bettdraft.com:5000/',  //Dev Url
  // apiBaseUrl: 'https://accountapi.bettdraft.com:5000/',  //Prod Url
  api: {
    geocomplyLience:'geocomplyLience',
    LOGIN_ENDPOINT: "users/login",
    SIGNUP: "users/signup", //account-management1/users/signup
    GET_BY_USERID: "users/userid", // 12  Append userid
    GET_BY_USERNAME: "users/username/", // userrname
    UPDATE_PERSONAL: "users/personal",
    UPDATE_PROFILE_IMAGE: "upload/profileimage",
    EMAIL_SUPPORT: "email/support",
    VERIFICATION_ENDPOINT: "users/validate",
    STATES: "states",
    UPDATE_EMAIL: "users/email",
    FORGOT_PASSWORD: "users/passwordlost/",
    GET_SPORTS_DATA: "api/sports/id", //sportsid 6046
    CHANGE_PASS: "users/password",
    GET_QUESTIONS: 'questions',
    GET_DOCUMENTS: 'documentTypes',
    transactions: 'alltransactions',
    activations: 'activations',
    ssnVerification: 'api/ssn/verification',
    Reset_password: 'reset/password',
    resendMail:'user/resend',
    GetUserLimit: 'user/limit/',
    SetUserLimit: 'user/limit',
    brochures: 'brochures',
    brochureDetails: 'brochureDetails',
    order: 'transactions/order',
    ordersHistory: 'orders',
    apiurl:'user/kyc/token',
    banking_withdraw:'banking/withdrawals',
    kyc_verify:'user/kyc/verify/'
  },
  mode: "Development",
};
//https://bettordoneapi-dev.betthouse.com/
export const Image_Url = "https://elasticbeanstalk-us-east-1-715244717776.s3.amazonaws.com/team/"
export const SportImage_Url = "https://elasticbeanstalk-us-east-1-715244717776.s3.amazonaws.com/sports/"
export const API_URL = "";
export const Voucher_Url = "https://elasticbeanstalk-us-east-1-715244717776.s3.amazonaws.com"
export const PlayerCardImageUrl = "https://sportsfeed-dev.bettdraft.com:5000/api";

export const PaymentEndpoints = {
  apiBaseUrl: "https://dev-payment.bettdraft.com:5000/", //Dev Url
  // apiBaseUrl: "https://paymentapi.bettdraft.com:5000/",  // Prod Url
  api: {
    ACTIVATE: "api/payment/enroll",
    WALLET: 'api/payment/wallet',
    INFORMATION: 'api/payment/information/',
    deposit_WithDraw: 'api/payment/transfers',
    fabiwallet: 'api/payment/information'
  },
};


export const sportEndPoint = {
  apiBaseUrl: "https://sportsfeed-dev.bettdraft.com:5000/",   //Dev Url
  //  apiBaseUrl: "https://sportsfeed.bettdraft.com:5000/", //Prod Url
  api: {

    leagueByIdUrl: "api/league/",
    leagueList: "api/leagues",
    sports: "api/sports/",
    sportsById: "api/sports/",
    wagers: "api/league/wagers/",
    LOG_BET: "api/bets/process",
    Out_Right: "api/outrightmarkets/",
    Default_Bet_Config: "api/config",
    all_bets: "api/bets/info",
    Odds_Refresh: 'api/sports/getOdds',
    futureLeague: 'api/league/future/',
    live_now: 'api/league/live',
    playerData:'api/sportplayers/',
    playersportsData : 'api/playerevent/sport/',
    playerleagueData : 'api/playerevent/league/',
    mybets : 'api/fantasy/info',
    fantasy:'api/fantasy/bet',
    Image:'api'

  },
  mode: "Development",
};

export default {};
